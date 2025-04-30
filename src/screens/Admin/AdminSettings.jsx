import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase";
import { db } from "../../firebase/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { FaTrash } from "react-icons/fa";

const AdminSettings = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [settings, setSettings] = useState(null);
  const [newCategory, setNewCategory] = useState("");

  // useEffect(() => {
  //   const checkAdmin = async () => {
  //     if (user) {
  //       const userDoc = await getDoc(doc(db, "users", user.uid));
  //       if (userDoc.exists() && userDoc.data().isAdmin) {
  //         return;
  //       }
  //       setToast({
  //         message: "Access denied: Admin only",
  //         type: "error",
  //       });
  //       navigate("/home");
  //     } else if (!loading && !user) {
  //       setToast({
  //         message: "Please sign in as admin",
  //         type: "error",
  //       });
  //       navigate("/sign-in");
  //     }
  //   };
  //   if (!loading) checkAdmin();
  // }, [user, loading, navigate]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setSettings(settingsDoc.data());
        } else {
          // If no settings exist, initialize with empty categories and default shippingRate
          setSettings({
            categories: [],
            shippingRate: 100,
          });
        }
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };
    fetchSettings();
  }, []);

  const addCategory = async () => {
    if (!newCategory) {
      setToast({ message: "Category name is required", type: "error" });
      return;
    }
    if (settings.categories.includes(newCategory)) {
      setToast({ message: "Category already exists", type: "error" });
      return;
    }
    try {
      const updatedCategories = [...settings.categories, newCategory];
      await setDoc(doc(db, "settings", "general"), {
        ...settings,
        categories: updatedCategories,
      });
      setSettings((prev) => ({ ...prev, categories: updatedCategories }));
      setNewCategory("");
      setToast({ message: `Added category ${newCategory}`, type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const deleteCategory = async (category) => {
    if (window.confirm(`Delete category ${category}?`)) {
      try {
        const updatedCategories = settings.categories.filter(
          (c) => c !== category
        );
        await setDoc(doc(db, "settings", "general"), {
          ...settings,
          categories: updatedCategories,
        });
        setSettings((prev) => ({ ...prev, categories: updatedCategories }));
        setToast({ message: `Deleted category ${category}`, type: "success" });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    }
  };

  const updateShippingRate = async () => {
    if (settings.shippingRate < 0) {
      setToast({ message: "Shipping rate cannot be negative", type: "error" });
      return;
    }
    try {
      await setDoc(doc(db, "settings", "general"), settings);
      setToast({ message: "Shipping rate updated", type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  if (loading || !settings) return null;

  return (
    <div className="p-6 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Site Settings</h1>
        <div className="bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-blue-100 mb-6">
          <h2 className="text-xl font-semibold mb-4">Manage Categories</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter new category"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
            />
            <button
              onClick={addCategory}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Add Category
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {settings.categories.length === 0 ? (
              <div className="col-span-full text-gray-500">
                No categories found.
              </div>
            ) : (
              settings.categories.map((category) => (
                <div
                  key={category}
                  className="flex items-center justify-between bg-blue-50/80 p-3 rounded-lg border border-blue-100"
                >
                  <span className="text-gray-700 font-medium">{category}</span>
                  <button
                    onClick={() => deleteCategory(category)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-xl border border-blue-100">
          <h2 className="text-xl font-semibold mb-4">Shipping Settings</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              value={settings.shippingRate}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  shippingRate: parseFloat(e.target.value) || 0,
                }))
              }
              placeholder="Shipping rate (INR)"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/4"
              min="0"
            />
            <button
              onClick={updateShippingRate}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Update Shipping Rate
            </button>
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

export default AdminSettings;
