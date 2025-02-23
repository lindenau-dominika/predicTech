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
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MachineListPage from "./pages/(logged-in)/MachineListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

    errorElement: <NotFound />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "/app",
    element: <Layout />,
    children: [
      { path: "/app", element: <Dashboard /> },
      { path: "/app/machine-list", element: <MachineListPage /> },
      { path: "/app/add-sensor", element: <AddSensorPage /> },
      { path: "/app/report", element: <AddReportPage /> },
      {
        path: "/app/machines/:id",
        element: <MachinePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
