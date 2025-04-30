import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../../firebase/Firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";
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

  // Ref for file input to reset it after submit
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const settingsDoc = await getDocs(collection(db, "settings"));
        const settingsData = settingsDoc.docs.find(
          (doc) => doc.id === "general"
        );
        if (settingsData && settingsData.exists()) {
          setCategories(settingsData.data().categories || []);
          setNewProduct((prev) => ({
            ...prev,
            category: settingsData.data().categories[0] || "",
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

  // Helper to check required fields and set toast for each missing one
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
        category: categories[0] || "",
        name: "",
        price: "",
        description: "",
        stock: "",
        rating: "",
        dimensions: "",
        material: "",
        discount: "",
      });
      // Reset file input value so image preview is cleared
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  if (loading) return null;

  return (
    <div className="p-6 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Add New Product
        </h1>
        <form
          onSubmit={addProduct}
          className="bg-white p-6 rounded-lg shadow-xl border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Product ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="id"
                value={newProduct.id}
                onChange={handleNewProductChange}
                placeholder="e.g., DL08"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleNewProductChange}
                placeholder="Product Name"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={newProduct.category}
                onChange={handleNewProductChange}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
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
                value={newProduct.price}
                onChange={handleNewProductChange}
                placeholder="Price"
                step="0.01"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleNewProductChange}
                placeholder="Description"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Stock <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleNewProductChange}
                placeholder="Stock"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
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
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Dimensions <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="dimensions"
                value={newProduct.dimensions}
                onChange={handleNewProductChange}
                placeholder="e.g., 12 x 12 inches"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Material
              </label>
              <input
                type="text"
                name="material"
                value={newProduct.material}
                onChange={handleNewProductChange}
                placeholder="Material"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
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
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Product Image <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                // required is not used for file input, validation is handled in JS
              />
              {newProduct.image && newProduct.image.startsWith("data:") && (
                <img
                  src={newProduct.image}
                  alt="Preview"
                  className="mt-2 h-20 w-20 object-cover rounded"
                />
              )}
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Add Product
            </button>
            <button
              type="button"
              onClick={() => navigate("/Admin/adminstockmanagement")}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
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

export default AdminAddProduct;
