import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Dashboard from "./pages/(logged-in)/Dashboard";
import NotFound from "./pages/NotFoundPage";
import Layout from "./pages/Layout";
import AddSensorPage from "./pages/(logged-in)/AddSensorPage";
import MachinePage from "./pages/(logged-in)/MachinePage";
import AddReportPage from "./pages/(logged-in)/AddReportPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import MachineListPage from "./pages/(logged-in)/MachineListPage";
import ActiveMachineList from "./pages/(logged-in)/ActiveMachineList";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./lib/components/PrivateRoute";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <NotFound /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/app",
    element: <PrivateRoute />,
    children: [
      { path: "/app", element: <Dashboard /> },
      { path: "/app/machine-list", element: <MachineListPage /> },
      { path: "/app/active-machines", element: <ActiveMachineList /> },
      { path: "/app/add-sensor", element: <AddSensorPage /> },
      { path: "/app/report", element: <AddReportPage /> },
      { path: "/app/machines/:id", element: <MachinePage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
