import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase/Firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { auth } from "../../firebase/Firebase";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminStockManagement = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showLowStock, setShowLowStock] = useState(false);
  const [toast, setToast] = useState(null);
  const [editProduct, setEditProduct] = useState(null);
  const [stockUpdate, setStockUpdate] = useState(null);
  const [categories, setCategories] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          setCategories(settingsDoc.data().categories || []);
        }
        // Fetch products
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);

        // Check for low stock items and show toast
        const lowStockCount = productList.filter(
          (p) => p.stock <= 10 && p.stock > 0
        ).length;
        if (lowStockCount > 0) {
          setToast({
            message: `${lowStockCount} products are low on stock!`,
            type: "warning",
          });
        }

        // If navigated from dashboard low stock card, enable low stock filter
        if (location.state?.showLowStock) {
          setShowLowStock(true);
        }
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };
    fetchData();
  }, [location.state]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesLowStock =
      !showLowStock || (product.stock <= 10 && product.stock > 0);
    return matchesSearch && matchesCategory && matchesLowStock;
  });

  const updateStock = async (productId, newStock, productName) => {
    const parsedStock = parseInt(newStock);
    if (isNaN(parsedStock) || parsedStock < 0) {
      setToast({ message: "Invalid stock value", type: "error" });
      return;
    }
    if (
      parsedStock === 0 &&
      !window.confirm(`Set ${productName} stock to 0?`)
    ) {
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
      setToast({
        message: `Stock updated for ${productName} to ${parsedStock}`,
        type: "success",
      });
      setStockUpdate(null);
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
      if (fileInputRef.current) fileInputRef.current.value = "";
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

  const bulkUpdateStock = async (updates) => {
    try {
      const batch = [];
      for (const { id, stock, name } of updates) {
        const parsedStock = parseInt(stock);
        if (!isNaN(parsedStock) && parsedStock >= 0) {
          if (parsedStock === 0 && !window.confirm(`Set ${name} stock to 0?`)) {
            continue;
          }
          batch.push(
            setDoc(
              doc(db, "products", id),
              { stock: parsedStock },
              { merge: true }
            )
          );
        }
      }
      await Promise.all(batch);
      setProducts((prev) =>
        prev.map((product) => {
          const update = updates.find((u) => u.id === product.id);
          return update
            ? { ...product, stock: parseInt(update.stock) }
            : product;
        })
      );
      setToast({
        message: `Updated stock for ${batch.length} products`,
        type: "success",
      });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  if (loading) return null;

  return (
    <div
      className="p-6 pt-20 min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f0f4f8 0%, #e0e7ef 100%)",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          borderRadius: "18px",
          boxShadow: "0 6px 32px 0 rgba(31, 38, 135, 0.13)",
          background: "#fff",
          padding: "2rem 2rem 3rem 2rem",
        }}
      >
        <h1
          className="text-3xl font-bold mb-6"
          style={{
            color: "#1e293b",
            letterSpacing: "0.02em",
            textShadow: "0 2px 8px rgba(30,41,59,0.04)",
          }}
        >
          Admin Product Management
        </h1>

        <button
          onClick={() => navigate("/Admin/adminaddproduct")}
          className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
          style={{
            boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)",
            transition: "box-shadow 0.2s",
          }}
        >
          Add New Product
        </button>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              background: "#f8fafc",
              borderColor: "#cbd5e1",
              color: "#334155",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              background: "#f8fafc",
              borderColor: "#cbd5e1",
              color: "#334155",
            }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.label} value={category.label}>
                {category.label} ({category.type})
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowLowStock(!showLowStock)}
            className={`px-4 py-2 rounded-lg font-semibold shadow ${
              showLowStock
                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            style={{
              minWidth: "160px",
              boxShadow: "0 1px 4px 0 rgba(251,191,36,0.08)",
              transition: "box-shadow 0.2s",
            }}
          >
            {showLowStock ? "Show All Products" : "Show Low Stock"}
          </button>
        </div>

        <div
          className="bg-white rounded-lg shadow overflow-hidden"
          style={{
            border: "1px solid #e2e8f0",
            marginBottom: "2rem",
          }}
        >
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
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr
                    key={product.id}
                    className={`hover:bg-blue-50 transition ${
                      product.stock <= 10 && product.stock > 0
                        ? "bg-yellow-50"
                        : ""
                    }`}
                    style={{
                      borderLeft:
                        product.stock === 0
                          ? "4px solid #ef4444"
                          : product.stock <= 10 && product.stock > 0
                          ? "4px solid #facc15"
                          : "4px solid transparent",
                    }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {product.stock}
                      <button
                        onClick={() =>
                          setStockUpdate({
                            id: product.id,
                            name: product.name,
                            stock: product.stock,
                          })
                        }
                        className="ml-2 inline-flex items-center justify-center px-2 py-1 rounded-md bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        style={{
                          fontSize: "0.85rem",
                          marginLeft: "0.75rem",
                        }}
                        title="Update Stock"
                      >
                        Update
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(product)}
                          className="inline-flex items-center justify-center px-4 py-1 rounded-md bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          style={{
                            fontSize: "0.95rem",
                          }}
                          title="Edit Product"
                        >
                          <FaEdit className="w-4 h-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            deleteProduct(product.id, product.name)
                          }
                          className="inline-flex items-center justify-center px-4 py-1 rounded-md bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                          style={{
                            fontSize: "0.95rem",
                          }}
                          title="Delete Product"
                        >
                          <FaTrash className="w-4 h-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {showLowStock && filteredProducts.length > 0 && (
          <div
            className="mt-6 bg-white rounded-lg shadow p-6"
            style={{
              border: "1px solid #fde68a",
              background: "linear-gradient(90deg, #fef9c3 0%, #fef08a 100%)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">
              Bulk Update Low Stock
            </h2>
            <button
              onClick={() =>
                setStockUpdate({
                  bulk: filteredProducts.map((p) => ({
                    id: p.id,
                    name: p.name,
                    stock: p.stock,
                  })),
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
              style={{
                boxShadow: "0 2px 8px 0 rgba(59,130,246,0.08)",
              }}
            >
              Update All Low Stock
            </button>
          </div>
        )}

        {stockUpdate && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            style={{
              backdropFilter: "blur(3px)",
            }}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
              style={{
                border: "1.5px solid #cbd5e1",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
              }}
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-700">
                {stockUpdate.bulk
                  ? "Bulk Update Low Stock"
                  : `Update Stock for ${stockUpdate.name}`}
              </h2>
              {stockUpdate.bulk ? (
                <div className="grid gap-4 max-h-96 overflow-y-auto">
                  {stockUpdate.bulk.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <span className="text-gray-700 font-medium flex-1">
                        {item.name}
                      </span>
                      <input
                        type="number"
                        min="0"
                        value={item.stock}
                        onChange={(e) =>
                          setStockUpdate((prev) => ({
                            ...prev,
                            bulk: prev.bulk.map((b) =>
                              b.id === item.id
                                ? { ...b, stock: e.target.value }
                                : b
                            ),
                          }))
                        }
                        className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{
                          background: "#f8fafc",
                          borderColor: "#cbd5e1",
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    New Stock
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      value={stockUpdate.stock}
                      onChange={(e) =>
                        setStockUpdate((prev) => ({
                          ...prev,
                          stock: e.target.value,
                        }))
                      }
                      className="w-20 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#cbd5e1",
                      }}
                    />
                    <button
                      onClick={() =>
                        setStockUpdate((prev) => ({
                          ...prev,
                          stock: parseInt(prev.stock) + 1 || 1,
                        }))
                      }
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      style={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      +1
                    </button>
                    <button
                      onClick={() =>
                        setStockUpdate((prev) => ({
                          ...prev,
                          stock:
                            parseInt(prev.stock) > 0
                              ? parseInt(prev.stock) - 1
                              : 0,
                        }))
                      }
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      style={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      -1
                    </button>
                  </div>
                </div>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                    stockUpdate.bulk
                      ? bulkUpdateStock(stockUpdate.bulk)
                      : updateStock(
                          stockUpdate.id,
                          stockUpdate.stock,
                          stockUpdate.name
                        )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                  style={{
                    minWidth: "90px",
                  }}
                >
                  Save
                </button>
                <button
                  onClick={() => setStockUpdate(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                  style={{
                    minWidth: "90px",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {editProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(2px)",
            }}
          >
            <form
              onSubmit={saveEdit}
              className="bg-white p-6 rounded-lg shadow-2xl max-w-2xl w-full border border-gray-200"
              style={{
                minWidth: "320px",
                maxWidth: "90vw",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
                border: "1.5px solid #cbd5e1",
              }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 tracking-wide">
                Edit Product
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Product ID
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={editProduct.id}
                    disabled
                    className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editProduct.name}
                    onChange={handleEditProductChange}
                    placeholder="Product Name"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={editProduct.category}
                    onChange={handleEditProductChange}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {categories.map((category) => (
                      <option key={category.label} value={category.label}>
                        {category.label} ({category.type})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Price (INR) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={editProduct.price}
                    onChange={handleEditProductChange}
                    placeholder="Price (INR)"
                    step="0.01"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={editProduct.description}
                    onChange={handleEditProductChange}
                    placeholder="Description"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    value={editProduct.stock}
                    onChange={handleEditProductChange}
                    placeholder="Stock"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Rating (0-5)
                  </label>
                  <input
                    type="number"
                    name="rating"
                    value={editProduct.rating}
                    onChange={handleEditProductChange}
                    placeholder="Rating (0-5)"
                    step="0.1"
                    max="5"
                    min="0"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    name="dimensions"
                    value={editProduct.dimensions}
                    onChange={handleEditProductChange}
                    placeholder="Dimensions"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Material
                  </label>
                  <input
                    type="text"
                    name="material"
                    value={editProduct.material}
                    onChange={handleEditProductChange}
                    placeholder="Material"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    name="discount"
                    value={editProduct.discount}
                    onChange={handleEditProductChange}
                    placeholder="Discount (%)"
                    max="100"
                    min="0"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium text-gray-700">
                    Product Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditProductImageChange}
                    ref={fileInputRef}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <div className="flex items-center gap-4 mt-2">
                    {editProduct.image &&
                      editProduct.image.startsWith("data:") && (
                        <img
                          src={editProduct.image}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded border border-gray-300 shadow"
                          style={{ background: "#f3f4f6" }}
                        />
                      )}
                    {editProduct.image &&
                      !editProduct.image.startsWith("data:") &&
                      editProduct.image !== "placeholder://product-image-7" && (
                        <img
                          src={editProduct.image}
                          alt="Preview"
                          className="h-20 w-20 object-cover rounded border border-gray-300 shadow"
                          style={{ background: "#f3f4f6" }}
                        />
                      )}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-4 justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-150"
                  style={{ minWidth: "100px" }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-150"
                  style={{ minWidth: "100px" }}
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
