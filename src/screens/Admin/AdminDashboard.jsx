import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase/Firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { FaBox, FaUsers, FaExclamationTriangle } from "react-icons/fa";
import { auth } from "../../firebase/Firebase";

const AdminDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [metrics, setMetrics] = useState({
    totalProducts: 0,
    totalUsers: 0,
    lowStockItems: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const usersSnapshot = await getDocs(collection(db, "users"));
        const products = productsSnapshot.docs.map((doc) => doc.data());
        setMetrics({
          totalProducts: products.length,
          totalUsers: usersSnapshot.size,
          lowStockItems: products.filter((p) => p.stock <= 10 && p.stock > 0)
            .length,
        });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };
    fetchMetrics();
  }, []);

  if (loading) return null;

  return (
    <div className="p-6 bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/Admin/adminstockmanagement")}
            className="bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-blue-100 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <FaBox className="text-blue-600 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Total Products
                </h2>
                <p className="text-2xl font-bold text-blue-600">
                  {metrics.totalProducts}
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/Admin/adminusermanagement")}
            className="bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-blue-100 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <FaUsers className="text-blue-600 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Total Users
                </h2>
                <p className="text-2xl font-bold text-blue-600">
                  {metrics.totalUsers}
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/Admin/adminstockmanagement")}
            className="bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-blue-100 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <FaExclamationTriangle className="text-yellow-500 text-3xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Low Stock Items
                </h2>
                <p className="text-2xl font-bold text-yellow-500">
                  {metrics.lowStockItems}
                </p>
              </div>
            </div>
          </div>
        </div>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
