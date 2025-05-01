import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ triggerText, items, isMobile, isOpen, onToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (isMobile) {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  // Handler for "All product" button
  const handleAllProductsClick = () => {
    navigate("/products", { state: { items: items || [] } });
    if (isMobile && onToggle) {
      setIsDropdownOpen(false);
      onToggle();
    }
  };

  // Handler for clicking an item: navigate to details screen with item data
  const handleItemClick = (item) => {
    navigate("/details", { state: { item } });
    if (isMobile && onToggle) {
      setIsDropdownOpen(false);
      onToggle();
    }
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : "inline-block"} group`}>
      <button
        className={`
          flex justify-between items-center
          w-full md:w-auto
          bg-gradient-to-r from-blue-50 via-white to-blue-50
          hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-blue-100
          text-black font-semibold py-2 px-5
          rounded-xl shadow-md
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-blue-400
          ${isMobile ? "mb-2" : ""}
        `}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        onClick={handleToggle}
      >
        <span className="tracking-wide">{triggerText}</span>
        <FaChevronDown
          className={`w-4 h-4 ml-2 transform transition-transform duration-200 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`
          ${isMobile ? "w-full" : "absolute left-0 mt-2 min-w-[220px]"}
          bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-100
          transition-all duration-200
          ${
            isMobile
              ? isDropdownOpen && isOpen
                ? "block"
                : "hidden"
              : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          }
          z-20
        `}
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 6px 0 rgba(0,0,0,0.04)",
        }}
      >
        <ul className="py-2 px-1 grid gap-1">
          <li>
            <button
              onClick={handleAllProductsClick}
              className={`
                w-full flex items-center gap-3 text-base text-left px-5 py-3
                rounded-lg
                bg-gradient-to-r from-white via-blue-50 to-white
                text-gray-700 font-medium
                hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-blue-100
                hover:text-blue-700 hover:shadow-lg
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-200
                group/item
              `}
            >
              <span className="truncate">All product</span>
            </button>
          </li>
          {items && items.length > 0 ? (
            items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleItemClick(item)}
                  className={`
                    w-full flex items-center gap-3 text-base text-left px-5 py-3
                    rounded-lg
                    bg-gradient-to-r from-white via-blue-50 to-white
                    text-gray-700 font-medium
                    hover:bg-gradient-to-r hover:from-blue-100 hover:via-white hover:to-blue-100
                    hover:text-blue-700 hover:shadow-lg
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-200
                    group/item
                  `}
                >
                  {item.icon && (
                    <span className="text-blue-400 text-lg">{item.icon}</span>
                  )}
                  <span className="truncate">{item.name || item.label}</span>
                  <FaChevronRight className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 w-4 h-4 text-blue-400" />
                </button>
              </li>
            ))
          ) : (
            <li className="px-5 py-3 text-base text-gray-400 text-center select-none">
              No items
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
