import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase/Firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminCategoryManagement = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [newCategory, setNewCategory] = useState({
    label: "",
    type: "categories-1",
    image: null,
  });
  const [editCategory, setEditCategory] = useState(null);
  const [toast, setToast] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const settingsDoc = await getDocs(collection(db, "settings"));
        const settingsData = settingsDoc.docs.find(
          (doc) => doc.id === "general"
        );
        if (settingsData && settingsData.exists()) {
          setCategories(settingsData.data().categories || []);
        }
        // Fetch products
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };
    fetchData();
  }, []);

  const handleImageChange = (e, setCategory) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCategory((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.label) {
      setToast({ message: "Category name is required", type: "error" });
      return;
    }
    if (categories.some((cat) => cat.label === newCategory.label)) {
      setToast({ message: "Category already exists", type: "error" });
      return;
    }
    if (newCategory.type === "categories-2" && !newCategory.image) {
      setToast({
        message: "Image is required for categories-2",
        type: "error",
      });
      return;
    }
    try {
      let categoryData = {
        label: newCategory.label,
        type: newCategory.type,
        image: newCategory.type === "categories-1" ? null : newCategory.image,
      };
      const updatedCategories = [...categories, categoryData];
      await setDoc(
        doc(db, "settings", "general"),
        { categories: updatedCategories },
        { merge: true }
      );
      setCategories(updatedCategories);
      setNewCategory({ label: "", type: "categories-1", image: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
      setToast({ message: `Added ${newCategory.label}`, type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const updateCategory = async (e) => {
    e.preventDefault();
    if (!editCategory.label) {
      setToast({ message: "Category name is required", type: "error" });
      return;
    }
    if (editCategory.type === "categories-2" && !editCategory.image) {
      setToast({
        message: "Image is required for categories-2",
        type: "error",
      });
      return;
    }
    try {
      let categoryData = {
        label: editCategory.label,
        type: editCategory.type,
        image: editCategory.type === "categories-1" ? null : editCategory.image,
      };
      const updatedCategories = categories.map((cat) =>
        cat.label === editCategory.originalLabel ? categoryData : cat
      );
      await setDoc(
        doc(db, "settings", "general"),
        { categories: updatedCategories },
        { merge: true }
      );
      setCategories(updatedCategories);
      setEditCategory(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setToast({ message: `Updated ${editCategory.label}`, type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const deleteCategory = async (label) => {
    if (window.confirm(`Delete ${label}?`)) {
      try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const hasProducts = productsSnapshot.docs.some(
          (doc) => doc.data().category === label
        );
        if (hasProducts) {
          setToast({
            message: "Cannot delete category with associated products",
            type: "error",
          });
          return;
        }
        const updatedCategories = categories.filter(
          (cat) => cat.label !== label
        );
        await setDoc(
          doc(db, "settings", "general"),
          { categories: updatedCategories },
          { merge: true }
        );
        setCategories(updatedCategories);
        setToast({ message: `Deleted ${label}`, type: "success" });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    }
  };

  if (loading) return null;

  return (
    <div
      className="p-6 pt-20 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #f9fafb 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl font-extrabold mb-8 text-blue-800 tracking-tight text-center drop-shadow"
          style={{
            letterSpacing: "0.03em",
            textShadow: "0 2px 8px rgba(30, 64, 175, 0.08)",
          }}
        >
          Category Management
        </h1>

        {/* Add Category Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Add New Category
          </h2>
          <form
            onSubmit={addCategory}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory.label}
              onChange={(e) =>
                setNewCategory({ ...newCategory, label: e.target.value })
              }
              className="px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 font-medium"
              style={{ minWidth: 0 }}
            />
            <select
              value={newCategory.type}
              onChange={(e) =>
                setNewCategory({
                  ...newCategory,
                  type: e.target.value,
                  image: null,
                })
              }
              className="px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 font-medium"
            >
              <option value="categories-1">Categories-1 (No Image)</option>
              <option value="categories-2">Categories-2 (With Image)</option>
            </select>
            {newCategory.type === "categories-2" && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setNewCategory)}
                ref={fileInputRef}
                className="block w-full text-sm text-blue-900 file:mr-4 file:py-3 file:px-4 file:rounded-xl file:border-0 file:text-base file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                style={{ minWidth: 0 }}
              />
            )}
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 text-lg md:col-span-3"
              style={{ letterSpacing: "0.02em" }}
            >
              Add Category
            </button>
          </form>
          {newCategory.type === "categories-2" && newCategory.image && (
            <div className="mt-4 flex items-center gap-2">
              <img
                src={newCategory.image}
                alt="Preview"
                className="h-20 w-20 object-cover rounded-xl border-2 border-blue-200 shadow"
              />
              <span className="text-xs text-blue-500">Preview</span>
            </div>
          )}
        </div>

        {/* Category List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
          <table className="min-w-full divide-y divide-blue-100">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-50">
              {categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((category) => {
                  // Calculate the number of products for this category
                  const productCount = products.filter(
                    (p) => p.category === category.label
                  ).length;
                  return (
                    <tr
                      key={category.label}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {category.image ? (
                          <img
                            src={category.image}
                            alt={category.label}
                            className="h-12 w-12 object-cover rounded-lg border border-blue-100 shadow"
                          />
                        ) : (
                          <span className="text-gray-400 italic">No Image</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-blue-900">
                        {category.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        {category.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        {productCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              setEditCategory({
                                ...category,
                                originalLabel: category.label,
                              })
                            }
                            className="inline-flex items-center justify-center px-4 py-1 rounded-xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all duration-150"
                            title="Edit Category"
                          >
                            <FaEdit className="w-4 h-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => deleteCategory(category.label)}
                            className="inline-flex items-center justify-center px-4 py-1 rounded-xl bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all duration-150"
                            title="Delete Category"
                          >
                            <FaTrash className="w-4 h-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Edit Category Modal */}
        {editCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <form
              onSubmit={updateCategory}
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-blue-100"
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-700">
                Edit Category
              </h2>
              <div className="grid gap-5">
                <input
                  type="text"
                  placeholder="Category Name"
                  value={editCategory.label}
                  onChange={(e) =>
                    setEditCategory({ ...editCategory, label: e.target.value })
                  }
                  className="px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 font-medium"
                />
                <select
                  value={editCategory.type}
                  onChange={(e) =>
                    setEditCategory({
                      ...editCategory,
                      type: e.target.value,
                      image:
                        e.target.value === "categories-1"
                          ? null
                          : editCategory.image,
                    })
                  }
                  className="px-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-900 font-medium"
                >
                  <option value="categories-1">Categories-1 (No Image)</option>
                  <option value="categories-2">
                    Categories-2 (With Image)
                  </option>
                </select>
                {editCategory.type === "categories-2" && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setEditCategory)}
                      ref={fileInputRef}
                      className="block w-full text-sm text-blue-900 file:mr-4 file:py-3 file:px-4 file:rounded-xl file:border-0 file:text-base file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                    />
                  </>
                )}
                {editCategory.image && editCategory.type === "categories-2" && (
                  <div className="flex items-center gap-2">
                    <img
                      src={editCategory.image}
                      alt="Preview"
                      className="h-20 w-20 object-cover rounded-xl border-2 border-blue-200 shadow"
                    />
                    <span className="text-xs text-blue-500">Preview</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex gap-3 justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditCategory(null)}
                  className="bg-gradient-to-r from-gray-500 to-gray-400 hover:from-gray-700 hover:to-gray-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {toast && (
          <div className="mt-6">
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCategoryManagement;
