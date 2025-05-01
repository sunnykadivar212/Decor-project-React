import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
  FaStar,
  FaRegStar,
  FaArrowLeft,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Loader from "../components/loader";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState(location.state?.item);

  console.log("item", item);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 p-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-md w-full border border-blue-100">
          <span className="text-red-500 text-xl font-bold flex items-center gap-2">
            <FaTimesCircle className="text-2xl" />
            No item data found.
          </span>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Calculate discounted price
  const discountedPrice = item.discount
    ? (item.price * (100 - item.discount)) / 100
    : item.price;

  // Format rating as stars
  const renderRating = (rating) => {
    const stars = Math.round(rating);
    return (
      <span className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) =>
          i < stars ? (
            <FaStar key={i} className="text-yellow-400 drop-shadow" />
          ) : (
            <FaRegStar key={i} className="text-yellow-200" />
          )
        )}
        <span className="ml-2 text-gray-500 text-sm font-medium">
          {typeof rating === "number" && !isNaN(rating)
            ? rating.toFixed(1)
            : "N/A"}
        </span>
      </span>
    );
  };

  // Stock status
  let stockStatus, stockColor, stockIcon;
  if (item.stock > 10) {
    stockStatus = "In Stock";
    stockColor = "text-green-600";
    stockIcon = <FaCheckCircle className="inline-block mr-1" />;
  } else if (item.stock > 0) {
    stockStatus = "Low Stock";
    stockColor = "text-yellow-500";
    stockIcon = <FaExclamationTriangle className="inline-block mr-1" />;
  } else {
    stockStatus = "Out of Stock";
    stockColor = "text-red-500";
    stockIcon = <FaTimesCircle className="inline-block mr-1" />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-100 p-4">
      <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center max-w-4xl w-full transition-all duration-300 border border-blue-100">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* Product image */}
        <div className="flex-shrink-0 flex flex-col items-center w-full md:w-1/2 mb-8 md:mb-0 md:mr-10">
          <div className="relative group">
            <img
              src={item.image}
              alt={item.name}
              className="h-64 w-64 sm:h-80 sm:w-80 object-cover rounded-2xl shadow-xl border-4 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-100 group-hover:scale-105 transition-transform duration-300"
            />
            {item.discount > 0 && (
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                {item.discount}% OFF
              </span>
            )}
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-gray-800 tracking-tight drop-shadow">
            {item.name}
          </h2>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-700 font-bold text-2xl sm:text-3xl drop-shadow">
              ₹
              {typeof discountedPrice === "number"
                ? discountedPrice.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })
                : "N/A"}
            </span>
            {item.discount > 0 && (
              <span className="text-gray-400 line-through text-lg sm:text-xl font-medium">
                ₹
                {item.price.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            )}
          </div>
          <div className="mb-3">{renderRating(item.rating)}</div>
          <div
            className={`font-semibold flex items-center mb-4 text-lg ${stockColor}`}
          >
            {stockIcon}
            {stockStatus}
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base mb-6">
            <div>
              <span className="font-semibold text-blue-700">Category:</span>
              <span className="ml-2">{item.category}</span>
            </div>
            <div>
              <span className="font-semibold text-blue-700">Material:</span>
              <span className="ml-2">{item.material || "N/A"}</span>
            </div>
            <div>
              <span className="font-semibold text-blue-700">Dimensions:</span>
              <span className="ml-2">{item.dimensions || "N/A"}</span>
            </div>
            <div>
              <span className="font-semibold text-blue-700">Stock:</span>
              <span className="ml-2">{item.stock} units</span>
            </div>
          </div>
          <div className="w-full bg-blue-50/80 rounded-xl p-4 shadow-inner border border-blue-100">
            <span className="font-semibold text-blue-700">Description:</span>
            <span className="ml-2 text-gray-700">{item.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
