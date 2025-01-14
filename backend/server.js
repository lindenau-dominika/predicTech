const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connectDB');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cookie = require('cookie'); // Dodajemy bibliotekę do parsowania ciasteczek
const authRoutes = require('./routes/auth.route');
const machineRoutes = require('./routes/machine.route');
const { createServer } = require('http');
const WebSocket = require('ws');
const Redis = require('ioredis');
const { handleWebSocketMessage } = require('./handlers/wsMessageHandler');
const { wsSendMachines } = require('./handlers/wsSendMachines');
const { storeWsConnection, 
    removeWsConnection, 
    getWsConnections, 
    clearWsConnections,
    clearAllWsConnections } = require('./utils/redisHandler');
const { sendMessageToUser, broadcastMessage } = require('./utils/sendMessage');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const errorHandler = require('./middleware/errorHandler');
const { v4: uuidv4 } = require('uuid');
const { send } = require('process');
const path = require('path');

//config dla zmiennych srodowiskowych
dotenv.config();

//stale wartosci dla servera
const WEBSOCKET_PING_TIMEOUT = 30000; // 30 sekund - czas oczekiwania na odpowiedź na ping
const WEBSOCKET_PATH = '/websocket';
const PORT = process.env.PORT || 8080;

// tworzenie serwera http
const app = express();
const server = createServer(app)



// middleware
app.use(bodyParser.json()); // mozna dodac limit do 1mb - { limit: '1mb' }
app.use(cookieParser());

// Rate limiter - limit ilości requestów na serwerze http 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter); // zapobiega ddosom

// CORS configuration
const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (corsOptions.origin.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', corsOptions.methods.join(','));
        res.setHeader('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(','));
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
    next();
});

app.use(errorHandler);

// Routes
app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}


app.use('/api/machine', machineRoutes);

// websocket dziala na tym samym porcie co http server nie robi osobnego serwera
const wss = new WebSocket.Server({ 
    noServer: true,
    path: WEBSOCKET_PATH 
});

// WebSocket authentication middleware
const authenticateWebSocket = (request, socket, head) => {
    return new Promise((resolve, reject) => {
        try {
            const cookies = cookie.parse(request.headers.cookie || '');
            const token = cookies.token;

            if (!token) {
                reject(new Error('No token provided'));
                return;
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded?.userId) {
                reject(new Error('Invalid token'));
                return;
            }

            resolve(decoded.userId);
        } catch (err) {
            reject(err);
        }
    });
};

// WebSocket connection handling
server.on('upgrade', async (request, socket, head) => {
    try {
        const userId = await authenticateWebSocket(request, socket, head);
        wss.handleUpgrade(request, socket, head, (ws) => {
            wss.emit('connection', ws, request, userId);
        });
    } catch (err) {
        console.error('WebSocket upgrade error:', err.message);
        socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
        socket.destroy();
    }
});

// WebSocket connection handler
wss.on('connection', async  (ws, request, userId) => {
    const wsId = uuidv4();
    console.log(`New WebSocket connection - User: ${userId}, WsId: ${wsId}`);

    // Store connection
    storeWsConnection(userId, wsId);
    ws.wsId = wsId;

    // Setup ping/pong
    ws.isAlive = true;
    ws.on('pong', () => {
        ws.isAlive = true;
    });

    // Message handler
    ws.on('message', (message) => {
        handleWebSocketMessage(ws, message, userId);
    });

    // Close handler
    ws.on('close', () => {
        removeWsConnection(userId, wsId); // usuwa konkretna polaczenie
        //clearConnections(userId); // usuwa wszystkie polaczenia
        console.log(`WebSocket closed - User: ${userId}, WsId: ${wsId}`);
    });

    // Error handler
    ws.on('error', (error) => {
        console.error(`WebSocket error - User: ${userId}, WsId: ${wsId}:`, error);
        clearWsConnections(userId);
    });
});

// Heartbeat mechanism
const interval = setInterval(() => {
    wss.clients.forEach((ws) => {
        if (ws.isAlive === false) {
            removeWsConnection(ws.userId, ws.wsId);
            return ws.terminate();
        }
        
        ws.isAlive = false;
        ws.ping();
    });
}, WEBSOCKET_PING_TIMEOUT);

wss.on('close', () => {
    clearInterval(interval);
});

// Graceful shutdown
const gracefulShutdown = () => {
    console.log('Shutting down gracefully...');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });

    // Force shutdown after 10 seconds
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);


// Wyczyszczenie wszystkich połączeń przy starcie serwera
clearAllWsConnections().then(() => {
    server.listen(PORT, () => {
        connectDB();
        console.log(`Server is running on port ${PORT}`);
    });
});