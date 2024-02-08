import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireAuth = () => {
  const { userData } = useAuth();
  const location = useLocation();

  console.log("--------");

  return userData ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
