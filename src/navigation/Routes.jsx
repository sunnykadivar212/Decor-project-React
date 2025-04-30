import { Route, Routes, useLocation } from "react-router-dom";
import Signin from "../screens/SignIn";
import Signup from "../screens/SignUp";
import Home from "../screens/Home";
import ForgotPassword from "../screens/forgotPassword";
import Header from "../components/header";
import Footer from "../components/Footer";
import Details from "../screens/Details.";
import Products from "../screens/Product";
import AdminNavigation from "./AdminRoute";

const ScreenNavigation = () => {
  const location = useLocation();
  const hideFooter = ["/sign-in", "/sign-up"].includes(location.pathname);

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Admin/*" element={<AdminNavigation />} />
        </Routes>
        {!hideFooter && <Footer />}
      </div>
    </>
  );
};

export default ScreenNavigation;
