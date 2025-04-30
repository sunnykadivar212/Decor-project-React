import { useEffect, useState, useRef } from "react";
import decor from "../assets/Decor.jpeg";
import { ProductList, TypeList } from "../common/Data";
import Items from "../components/Items";

const HEADER_HEIGHT_PX = 96; // 24 * 4 (pt-24 = 6rem = 96px)

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle category click (including All Products)
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      if (productsRef.current) {
        const rect = productsRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        // Adjust scroll position by header height (pt-24 = 6rem = 96px)
        const offset = HEADER_HEIGHT_PX + 16; // add a little extra for spacing
        window.scrollTo({
          top: rect.top + scrollTop - offset,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const filteredItems = selectedCategory
    ? ProductList.filter((item) => item.category === selectedCategory)
    : ProductList;

  return (
    <div className="flex-1 flex flex-col min-h-screen pt-24 pb-16 box-border bg-white">
      {/* Header image section */}
      <div
        className={`relative w-full h-[32vh] md:h-[40vh] lg:h-[55vh] transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <img src={decor} alt="decor" className="w-full h-full object-cover" />
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isScrolled
              ? "bg-black/50 backdrop-blur-md"
              : "bg-black/30 backdrop-blur-sm"
          }`}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-full px-4">
          <div className="flex items-center gap-2 w-full justify-center">
            <input
              type="search"
              className={`px-4 py-2 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500 transition-all duration-300 ${
                isScrolled ? "w-48 md:w-64 scale-95" : "w-64 md:w-80"
              }`}
              placeholder="Search products..."
            />
            <button
              className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 scale-95"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Search
            </button>
          </div>
          <div
            className={`text-white text-center transition-all duration-300 ${
              isScrolled ? "opacity-80 scale-95" : "opacity-100"
            }`}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Aangan Home
            </h1>
            <h3 className="text-sm mt-2 md:text-base lg:text-xl">
              decor your home, buy your choice
            </h3>
          </div>
        </div>
      </div>
      {/* Category grid */}
      <div className="mx-2 md:mx-10 lg:mx-40 my-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {/* All Products option */}
          <div
            onClick={() => handleCategoryClick(null)}
            className={`flex gap-2 sm:gap-4 p-2 rounded-md items-center hover:bg-gray-50 transition-all duration-300 border-b-4 border-transparent hover:border-blue-500 shadow-sm cursor-pointer ${
              isScrolled ? "bg-gray-100" : ""
            } ${selectedCategory === null ? "border-blue-500 bg-blue-50" : ""}`}
          >
            <div className="h-12 w-12 sm:h-20 sm:w-20 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-xs sm:text-sm text-gray-600">All</span>
            </div>
            <span className="text-zinc-600 text-xs sm:text-lg md:text-xl font-medium">
              All Products
            </span>
          </div>
          {/* Category items */}
          {TypeList.map((items, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(items.label)}
              className={`flex gap-2 sm:gap-4 p-2 rounded-md items-center hover:bg-gray-50 transition-all duration-300 border-b-4 border-transparent hover:border-blue-500 shadow-sm cursor-pointer ${
                isScrolled ? "bg-gray-100" : ""
              } ${
                selectedCategory === items.label
                  ? "border-blue-500 bg-blue-50"
                  : ""
              }`}
            >
              <img
                src={items.Image}
                className="h-12 w-12 sm:h-20 sm:w-20 object-cover rounded-md"
                alt="Decor Type Image"
              />
              <span className="text-zinc-600 text-xs sm:text-lg md:text-xl font-medium">
                {items.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Products section */}
      <div
        ref={productsRef}
        className={`flex-1 overflow-y-auto mb-8 px-2 sm:px-6 transition-all duration-300 ${
          isScrolled ? "bg-gray-50" : "bg-white"
        }`}
      >
        <h2
          className="text-lg font-medium mt-4 px-2 py-1 text-gray-800 text-center"
          style={{
            letterSpacing: "0.05em",
            textShadow: "0 2px 8px rgba(0,0,0,0.08)",
            background: "linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%)",
            borderRadius: "0.5rem",
            padding: "0.75rem 0",
            marginBottom: "2rem",
          }}
        >
          {selectedCategory || "All Products"}
        </h2>
        <Items items={filteredItems} />
      </div>
    </div>
  );
};

export default Home;
