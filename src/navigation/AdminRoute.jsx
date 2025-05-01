import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/Firebase";
import AdminDashboard from "../screens/Admin/AdminDashboard";
import AdminStockManagement from "../screens/Admin/AdminStockManagement";
import AdminUserManagement from "../screens/Admin/AdminUserManagement";
import AdminSettings from "../screens/Admin/AdminSettings";
import AdminAddProduct from "../screens/Admin/AdminAddProduct";
import AdminCategoryManagement from "../screens/Admin/AdminCategoryManagement";
import Loader from "../components/loader";

const AdminNavigation = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true/false = known
  const [isAdmin, setIsAdmin] = useState(null); // null = loading, true/false = known

  // Use a ref to avoid race conditions with async setState
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          // Defensive: check for existence and isAdmin property
          if (userDoc.exists()) {
            const adminFlag = !!userDoc.data().isAdmin;
            if (isMounted.current) setIsAdmin(adminFlag);
            console.log("AdminRoute: userDoc.exists, isAdmin:", adminFlag);
          } else {
            if (isMounted.current) setIsAdmin(false);
            console.log("AdminRoute: userDoc does not exist, isAdmin: false");
          }
        } catch (error) {
          console.error("AdminRoute: Error fetching user doc:", error);
          if (isMounted.current) setIsAdmin(false);
        }
      } else {
        if (isMounted.current) {
          setIsAuthenticated(false);
          setIsAdmin(false);
        }
      }
    });
    return () => {
      isMounted.current = false;
      unsubscribe();
    };
  }, []);

  if (isAuthenticated === null || isAdmin === null) {
    return <Loader isLoading={true} />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Routes>
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="adminstockmanagement" element={<AdminStockManagement />} />
        <Route path="adminusermanagement" element={<AdminUserManagement />} />
        <Route path="adminsettings" element={<AdminSettings />} />
        <Route path="adminaddproduct" element={<AdminAddProduct />} />
        <Route
          path="admincategorymanagement"
          element={<AdminCategoryManagement />}
        />
      </Routes>
    </div>
  );
};

export default AdminNavigation;
