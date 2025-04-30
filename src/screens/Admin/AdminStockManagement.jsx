import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase/Firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { auth } from "../../firebase/Firebase";

const AdminStockManagement = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [toast, setToast] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [categories, setCategories] = useState([]);

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const updateStock = async (productId, newStock) => {
    const parsedStock = parseInt(newStock);
    if (isNaN(parsedStock) || parsedStock < 0) {
      setToast({ message: "Invalid stock value", type: "error" });
      return;
    }
    try {
      await setDoc(
        doc(db, "products", productId),
        { stock: parsedStock },
        { merge: true }
      );
      setProducts((prev) =>
        prev.map((product) =>
          product.id === productId
            ? { ...product, stock: parsedStock }
            : product
        )
      );
      const product = products.find((p) => p.id === productId);
      setToast({
        message: `Stock updated for ${product.name} to ${parsedStock}`,
        type: "success",
      });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const startEdit = (product) => {
    setEditProduct({ ...product });
  };

  const saveEdit = async (e) => {
    e.preventDefault();
    if (!editProduct.id || !editProduct.name || !editProduct.price) {
      setToast({ message: "ID, Name, and Price are required", type: "error" });
      return;
    }
    try {
      await setDoc(doc(db, "products", editProduct.id), editProduct);
      setProducts((prev) =>
        prev.map((p) => (p.id === editProduct.id ? editProduct : p))
      );
      setToast({ message: `Updated ${editProduct.name}`, type: "success" });
      setEditProduct(null);
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const deleteProduct = async (productId, productName) => {
    if (window.confirm(`Delete ${productName}?`)) {
      try {
        await deleteDoc(doc(db, "products", productId));
        setProducts((prev) => prev.filter((p) => p.id !== productId));
        setToast({ message: `Deleted ${productName}`, type: "success" });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    }
  };

  const handleEditProductChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditProductImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProduct((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) return null;

  return (
    <div className="p-6 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Product Management
        </h1>

        <button
          onClick={() => navigate("/Admin/adminaddproduct")}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add New Product
        </button>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      min="0"
                      value={product.stock}
                      onChange={(e) => updateStock(product.id, e.target.value)}
                      className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          updateStock(product.id, product.stock + 1)
                        }
                        className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-green-400"
                        title="Increase Stock"
                      >
                        <span className="text-lg font-bold">+1</span>
                      </button>
                      <button
                        onClick={() =>
                          updateStock(product.id, product.stock - 1)
                        }
                        className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                        title="Decrease Stock"
                      >
                        <span className="text-lg font-bold">-1</span>
                      </button>
                      <button
                        onClick={() => startEdit(product)}
                        className="inline-flex items-center justify-center px-4 py-1 rounded-md bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        title="Edit Product"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 17H7v-2a2 2 0 01.586-1.414z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id, product.name)}
                        className="inline-flex items-center justify-center px-4 py-1 rounded-md bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                        title="Delete Product"
                      >
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <form
              onSubmit={saveEdit}
              className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"
            >
              <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="id"
                  value={editProduct.id}
                  disabled
                  className="px-4 py-2 border rounded-lg bg-gray-100"
                />
                <input
                  type="text"
                  name="name"
                  value={editProduct.name}
                  onChange={handleEditProductChange}
                  placeholder="Product Name"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="category"
                  value={editProduct.category}
                  onChange={handleEditProductChange}
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  name="price"
                  value={editProduct.price}
                  onChange={handleEditProductChange}
                  placeholder="Price (INR)"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="description"
                  value={editProduct.description}
                  onChange={handleEditProductChange}
                  placeholder="Description"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="stock"
                  value={editProduct.stock}
                  onChange={handleEditProductChange}
                  placeholder="Stock"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="rating"
                  value={editProduct.rating}
                  onChange={handleEditProductChange}
                  placeholder="Rating (0-5)"
                  step="0.1"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="dimensions"
                  value={editProduct.dimensions}
                  onChange={handleEditProductChange}
                  placeholder="Dimensions"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="material"
                  value={editProduct.material}
                  onChange={handleEditProductChange}
                  placeholder="Material"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="discount"
                  value={editProduct.discount}
                  onChange={handleEditProductChange}
                  placeholder="Discount (%)"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Product Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditProductImageChange}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {editProduct.image &&
                    editProduct.image.startsWith("data:") && (
                      <img
                        src={editProduct.image}
                        alt="Preview"
                        className="mt-2 h-20 w-20 object-cover rounded"
                      />
                    )}
                  {editProduct.image &&
                    !editProduct.image.startsWith("data:") &&
                    editProduct.image !== "placeholder://product-image-7" && (
                      <img
                        src={editProduct.image}
                        alt="Preview"
                        className="mt-2 h-20 w-20 object-cover rounded"
                      />
                    )}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

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

export default AdminStockManagement;
