import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Items from "../components/Items";

const Products = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.items) {
      setItems(location.state.items);
    }
  }, [location.state]);

  // Determine category from items array
  const category =
    items && items.length > 0 && items[0].category
      ? items[0].category
      : "Products";

  return (
    <div className="flex-1 flex flex-col min-h-screen pt-30 pb-16 box-border bg-white">
      <h2
        className="text-2xl font-bold mb-4 text-gray-800 text-center"
        style={{
          letterSpacing: "0.05em",
          textShadow: "0 2px 8px rgba(0,0,0,0.08)",
          background: "linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%)",
          borderRadius: "0.5rem",
          padding: "0.75rem 0",
          marginBottom: "2rem",
        }}
      >
        {category}
      </h2>
      <Items items={items} />
    </div>
  );
};

export default Products;
