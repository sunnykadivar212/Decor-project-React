import { Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "../screens/Admin/AdminDashboard";
import AdminStockManagement from "../screens/Admin/AdminStockManagement";
import AdminUserManagement from "../screens/Admin/AdminUserManagement";
import AdminSettings from "../screens/Admin/AdminSettings";
import AdminAddProduct from "../screens/Admin/AdminAddProduct";
import Header from "../components/header";
import Footer from "../components/Footer";

const AdminNavigation = () => {
  const location = useLocation();
  const hideFooter = ["/sign-in", "/sign-up"].includes(location.pathname);

  return (
    <>
      <div className="min-h-screen flex flex-col pt-20">
        <Routes>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route
            path="adminstockmanagement"
            element={<AdminStockManagement />}
          />
          <Route path="adminusermanagement" element={<AdminUserManagement />} />
          <Route path="adminsettings" element={<AdminSettings />} />
          <Route path="adminaddproduct" element={<AdminAddProduct />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminNavigation;
