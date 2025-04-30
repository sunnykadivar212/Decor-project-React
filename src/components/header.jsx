import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { auth, db } from "../firebase/Firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Loader from "./loader";
import Dropdown from "./DropDown";

const adminNavLinks = [
  { label: "Dashboard", path: "/Admin/admindashboard" },
  { label: "Stock Management", path: "/Admin/adminstockmanagement" },
  { label: "Add Product", path: "/Admin/adminaddproduct" },
  { label: "User Management", path: "/Admin/adminusermanagement" },
  { label: "Settings", path: "/Admin/adminsettings" },
];

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const isAdminRoute = location.pathname.startsWith("/Admin");

  // Fetch categories and products from Firestore
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        // Get categories from settings/general
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        let fetchedCategories = [];
        if (
          settingsDoc.exists() &&
          Array.isArray(settingsDoc.data().categories)
        ) {
          fetchedCategories = settingsDoc.data().categories;
        }
        setCategories(fetchedCategories);

        // Get all products
        const productsSnapshot = await getDocs(collection(db, "products"));
        const products = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group products by category
        const grouped = {};
        fetchedCategories.forEach((cat) => {
          grouped[cat] = products.filter((p) => p.category === cat);
        });
        setCategoryProducts(grouped);
      } catch (error) {
        console.error("Error fetching categories/products:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setIsAdmin(userDoc.data().isAdmin);
        }
      } else {
        setIsAdmin(false);
      }
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      navigation("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const Hamburger = (
    <button
      className="md:hidden flex flex-col justify-center items-center w-10 h-10 mr-2"
      aria-label="Open menu"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
    </button>
  );

  // Build dropdowns from fetched categories and products
  const dropdowns = categories.map((cat) => ({
    triggerText: cat,
    items: categoryProducts[cat] || [],
  }));

  return (
    <div className="flex items-center bg-white shadow-md justify-between fixed top-0 left-0 w-full z-50 px-2 md:px-8 h-20 md:h-28">
      <div
        onClick={() =>
          navigation(isAdminRoute ? "/Admin/admindashboard" : "/home")
        }
        className="flex items-center flex-shrink-0 cursor-pointer"
      >
        <img src={logo} alt="Decor Logo" className="h-12 w-auto md:h-24" />
        <span className="font-bold text-xl md:text-3xl ml-2">
          {isAdminRoute ? "Admin Panel" : "Decor"}
        </span>
      </div>

      {Hamburger}

      <div
        className={`
          flex-col md:flex-row md:flex
          absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none
          transition-all duration-300
          ${menuOpen ? "flex" : "hidden"}
          md:items-center md:gap-4
          z-40
        `}
      >
        {isAdminRoute ? (
          <div className="flex flex-col md:flex-row md:gap-4 w-full md:w-auto">
            {adminNavLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  setMenuOpen(false);
                  navigation(link.path);
                }}
                className={`px-4 py-2 text-left md:text-center w-full md:w-auto rounded hover:bg-blue-100 ${
                  location.pathname === link.path
                    ? "font-bold text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:gap-4 w-full md:w-auto">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.triggerText} className="w-full md:w-auto">
                <Dropdown
                  triggerText={dropdown.triggerText}
                  items={dropdown.items}
                  isMobile={isMobile}
                  isOpen={menuOpen}
                  onToggle={() => setMenuOpen(false)}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex md:hidden flex-col gap-2 w-full px-4 pb-4">
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigation("/Admin/admindashboard");
                  }}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white w-full"
                >
                  Admin Panel
                </button>
              )}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleLogout();
                }}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setMenuOpen(false);
                navigation("/sign-in");
              }}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white w-full"
            >
              Login
            </button>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center">
        {isLoggedIn ? (
          <>
            {isAdmin && !isAdminRoute && (
              <button
                onClick={() => navigation("/Admin/admindashboard")}
                className="ml-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
              >
                Admin Panel
              </button>
            )}
            <button
              onClick={handleLogout}
              className="ml-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigation("/sign-in")}
            className="ml-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Login
          </button>
        )}
      </div>

      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Header;
