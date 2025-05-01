import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { auth } from "../../firebase/Firebase";

const AdminAddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: "",
    image: "placeholder://product-image-7",
    category: "",
    name: "",
    price: "",
    description: "",
    stock: "",
    rating: "",
    dimensions: "",
    material: "",
    discount: "",
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          const fetchedCategories = settingsDoc.data().categories || [];
          setCategories(fetchedCategories);
          setNewProduct((prev) => ({
            ...prev,
            category: fetchedCategories[0]?.label || "",
          }));
        }
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };
    fetchCategories();
  }, []);

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const checkRequiredFields = () => {
    if (!newProduct.id) {
      setToast({ message: "Product ID is required", type: "error" });
      return false;
    }
    if (
      !newProduct.image ||
      newProduct.image === "placeholder://product-image-7"
    ) {
      setToast({ message: "Product Image is required", type: "error" });
      return false;
    }
    if (!newProduct.category) {
      setToast({ message: "Category is required", type: "error" });
      return false;
    }
    if (!newProduct.name) {
      setToast({ message: "Product Name is required", type: "error" });
      return false;
    }
    if (!newProduct.price) {
      setToast({ message: "Price is required", type: "error" });
      return false;
    }
    if (!newProduct.stock) {
      setToast({ message: "Stock is required", type: "error" });
      return false;
    }
    if (!newProduct.dimensions) {
      setToast({ message: "Dimensions are required", type: "error" });
      return false;
    }
    return true;
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (!checkRequiredFields()) {
      return;
    }
    const product = {
      ...newProduct,
      price: parseFloat(newProduct.price) || 0,
      stock: parseInt(newProduct.stock) || 0,
      rating: parseFloat(newProduct.rating) || 0,
      discount: parseInt(newProduct.discount) || 0,
    };
    try {
      await setDoc(doc(db, "products", product.id), product);
      setToast({ message: `Added ${product.name}`, type: "success" });
      setNewProduct({
        id: "",
        image: "placeholder://product-image-7",
        category: categories[0]?.label || "",
        name: "",
        price: "",
        description: "",
        stock: "",
        rating: "",
        dimensions: "",
        material: "",
        discount: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  if (loading) return null;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-200 p-10">
          <h1 className="text-4xl font-extrabold mb-8 text-blue-700 tracking-tight text-center drop-shadow">
            Add New Product
          </h1>
          <form onSubmit={addProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Product ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="id"
                  value={newProduct.id}
                  onChange={handleNewProductChange}
                  placeholder="e.g., DL08"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleNewProductChange}
                  placeholder="Product Name"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={newProduct.category}
                  onChange={handleNewProductChange}
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                >
                  {categories.map((category) => (
                    <option key={category.label} value={category.label}>
                      {category.label} ({category.type})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Price (INR) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleNewProductChange}
                  placeholder="Price"
                  step="0.01"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={newProduct.description}
                  onChange={handleNewProductChange}
                  placeholder="Description"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Stock <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handleNewProductChange}
                  placeholder="Stock"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  value={newProduct.rating}
                  onChange={handleNewProductChange}
                  placeholder="Rating"
                  step="0.1"
                  max="5"
                  min="0"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Dimensions <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dimensions"
                  value={newProduct.dimensions}
                  onChange={handleNewProductChange}
                  placeholder="e.g., 12 x 12 inches"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Material
                </label>
                <input
                  type="text"
                  name="material"
                  value={newProduct.material}
                  onChange={handleNewProductChange}
                  placeholder="Material"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={newProduct.discount}
                  onChange={handleNewProductChange}
                  placeholder="Discount"
                  max="100"
                  min="0"
                  className="px-4 py-2 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 w-full bg-blue-50 text-blue-900 font-medium"
                />
              </div>
              <div>
                <label className="block text-blue-900 text-base font-semibold mb-2">
                  Product Image <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="block w-full text-sm text-blue-900 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-base file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                />
                {newProduct.image && newProduct.image.startsWith("data:") && (
                  <div className="mt-2 flex items-center gap-2">
                    <img
                      src={newProduct.image}
                      alt="Preview"
                      className="h-20 w-20 object-cover rounded-xl border-2 border-blue-200 shadow"
                    />
                    <span className="text-xs text-blue-500">Preview</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 text-lg"
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={() => navigate("/Admin/adminstockmanagement")}
                className="bg-gradient-to-r from-gray-500 to-gray-400 hover:from-gray-700 hover:to-gray-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-200 text-lg"
              >
                Cancel
              </button>
            </div>
          </form>
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
    </div>
  );
};

export default AdminAddProduct;
