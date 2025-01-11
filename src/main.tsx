import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/(logged-in)/DashboardPage";
import MachinesPage from "./pages/(logged-in)/MachinesPage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/machines", element: <MachinesPage /> },
    ],
  },
  {
    path: "/machines",
    element: <MachinesPage />,
  },
  { path: "/machines/:machineId", element: <MachinesPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
