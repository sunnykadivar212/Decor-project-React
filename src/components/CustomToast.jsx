import { useEffect } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Define background and border colors for each type
  const typeStyles = {
    success: "border-l-4 border-green-600 bg-green-50 text-green-800",
    error: "border-l-4 border-red-600 bg-red-50 text-red-800",
    info: "border-l-4 border-blue-600 bg-blue-50 text-blue-800",
    warning: "border-l-4 border-yellow-500 bg-yellow-50 text-yellow-800",
  };

  // Define icon and icon background for each type using react-icons
  const iconMap = {
    success: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mr-3 text-lg">
        <AiOutlineCheckCircle className="w-5 h-5" />
      </span>
    ),
    error: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-3 text-lg">
        <AiOutlineCloseCircle className="w-5 h-5" />
      </span>
    ),
    info: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 text-lg">
        <AiOutlineInfoCircle className="w-5 h-5" />
      </span>
    ),
    warning: (
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 mr-3 text-lg">
        <AiOutlineWarning className="w-5 h-5" />
      </span>
    ),
  };

  return (
    <div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full shadow-xl ${typeStyles[type]} px-5 py-4 rounded-xl flex items-center justify-between transition-all duration-300`}
      style={{ minWidth: "300px" }}
    >
      <div className="flex items-center flex-1">
        {iconMap[type]}
        <span className="font-semibold text-base">{message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-xl font-bold text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
