import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { auth, db } from "../firebase/Firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Loader from "./loader";
import Dropdown from "./DropDown";
import { FaCog } from "react-icons/fa";

const adminNavLinks = [
  { label: "Dashboard", path: "/Admin/admindashboard" },
  { label: "Stock Management", path: "/Admin/adminstockmanagement" },
  { label: "Add Product", path: "/Admin/adminaddproduct" },
  { label: "User Management", path: "/Admin/adminusermanagement" },
  { label: "Category Management", path: "/Admin/admincategorymanagement" },
  { label: "Settings", path: "/Admin/adminsettings" },
];

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading, true/false = known
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const isAdminRoute = location.pathname.startsWith("/Admin");

  // Fetch categories and products from Firestore, filter for categories-1
  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        let fetchedCategories = [];
        if (
          settingsDoc.exists() &&
          Array.isArray(settingsDoc.data().categories)
        ) {
          fetchedCategories = settingsDoc
            .data()
            .categories.filter((cat) => cat.type === "categories-1")
            .map((cat) => cat.label);
        }
        setCategories(fetchedCategories);

        const productsSnapshot = await getDocs(collection(db, "products"));
        const products = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const grouped = {};
        fetchedCategories.forEach((cat) => {
          grouped[cat] = products
            .filter((p) => p.category === cat)
            .map((p) => ({ ...p }));
        });
        setCategoryProducts(grouped);
      } catch (error) {
        console.error("Error fetching categories/products:", error);
      }
    };

    fetchCategoriesAndProducts();
  }, []);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          console.log(
            "Header: User doc:",
            userDoc.exists() ? userDoc.data() : "Not found"
          );
          if (userDoc.exists()) {
            const isAdmin = !!userDoc.data().isAdmin;
            console.log("Header: Is admin:", isAdmin);
            setIsAdmin(isAdmin);
          } else {
            console.log("Header: User doc does not exist");
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Header: Error fetching user doc:", error);
          setIsAdmin(false);
        }
      } else {
        console.log("Header: No user is logged in");
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Header: Cleaning up onAuthStateChanged listener");
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogin = () => {
    setMenuOpen(false);
    navigation("/sign-in");
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      console.log("Header: Logout successful");
      setIsLoggedIn(false);
      setIsAdmin(false);
      navigation("/");
    } catch (error) {
      console.error("Header: Logout error:", error);
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

  const dropdowns = categories.map((cat) => ({
    triggerText: cat,
    items: categoryProducts[cat] || [],
  }));

  if (isLoggedIn === null) {
    return <Loader isLoading={true} />;
  }

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
                className={`
                  px-4 py-2 text-left md:text-center w-full md:w-auto rounded
                  flex items-center gap-2
                  transition-all duration-200
                  ${
                    link.label === "Settings"
                      ? `bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700
                           shadow-md`
                      : `hover:bg-blue-100 ${
                          location.pathname === link.path
                            ? "font-bold text-blue-600"
                            : "text-gray-700"
                        }`
                  }
                `}
              >
                {link.label === "Settings" && <FaCog className="w-4 h-4" />}
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
              {!isAdminRoute && isAdmin && (
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
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded text-blue-700 w-full"
            >
              Login
            </button>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center">
        {isLoggedIn ? (
          <>
            {!isAdminRoute && isAdmin && (
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
            onClick={handleLogin}
            className="ml-6 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded text-blue-700"
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
