import { createContext, useContext, useState, ReactNode } from "react";

// Typ danych użytkownika
interface User {
  createdAt: string;
  email: string;
  isVerified: boolean;
  lastLogin: string;
  name: string;
  updatedAt: string;
  verificationToken: string;
  verificationTkoenExpiresAt: string;
  __v: number;
  _id: string;
}

interface UserData {
  message: string;
  success: true;
  user: User;
}

// Typ kontekstu
interface AuthContextType {
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
  getUser: () => UserData | null;
}

// Tworzymy kontekst
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider kontekstu
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? (JSON.parse(savedUser) as UserData) : null;
  });

  const login = (userData: UserData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Funkcja zwracająca dane użytkownika
  const getUser = () => user;

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook do pobierania kontekstu
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
