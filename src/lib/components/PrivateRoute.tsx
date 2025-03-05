import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Layout from "@/pages/Layout";

const PrivateRoute = () => {
  const { user } = useAuth();
  return user ? <Layout /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
