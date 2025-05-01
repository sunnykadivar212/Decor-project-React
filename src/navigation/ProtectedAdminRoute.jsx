import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedAdminRoute = () => {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader isLoading={true} />;
  }

  if (!user || !isAdmin) {
    return (
      <Navigate to="/sign-in" state={{ from: location.pathname }} replace />
    );
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
