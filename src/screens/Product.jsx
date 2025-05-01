import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Items from "../components/Items";
import Loader from "../components/loader";
import { FaArrowLeft } from "react-icons/fa";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log("items", items);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (location.state && location.state.items) {
      setItems(location.state.items);
    }

    return () => clearTimeout(timer);
  }, [location.state]);

  // Determine category from items array
  const category =
    items && items.length > 0 && items[0].category
      ? items[0].category
      : "Products";

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen pt-30 pb-16 box-border bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
        Back
      </button>

      {/* Category header */}
      <div className="w-full bg-white/80 backdrop-blur-lg shadow-md mb-8">
        <h2
          className="text-2xl font-bold py-4 text-gray-800 text-center"
          style={{
            letterSpacing: "0.05em",
            textShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {category}
        </h2>
      </div>

      {/* Products grid */}
      <div className="container mx-auto px-4">
        {items.length > 0 ? (
          <Items items={items} />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
            <p className="text-gray-600 text-xl font-medium">
              No products found in this category
            </p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <FaArrowLeft />
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
