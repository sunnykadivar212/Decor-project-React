import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import Toast from "../components/CustomToast";
import Loader from "../components/loader";

const getFriendlyError = (error) => {
  if (
    error?.message?.includes("auth/api-key-not-valid") ||
    error?.message?.toLowerCase().includes("api key") ||
    error?.message?.toLowerCase().includes("api-key-not-valid")
  ) {
    return "There is a problem with the server configuration. Please contact the administrator.";
  }
  return error.message || "An unknown error occurred. Please try again.";
};

const Signin = () => {
  const navigation = useNavigate();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (toast.show) {
      timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists() && userDoc.data().isAdmin) {
            console.log(
              "SignIn: Admin user, navigating to /Admin/admindashboard"
            );
            setMessage("Admin login successful!", "success");
            navigation("/Admin/admindashboard");
          } else {
            console.log("SignIn: Non-admin user, navigating to /home");
            setMessage("Login successful!", "success");
            navigation("/home");
          }
        } catch (error) {
          console.error("SignIn: Error fetching user doc:", error);
          setMessage("Error verifying user status", "error");
        }
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigation]);

  const setMessage = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    if (!formData.email) {
      setMessage("Please enter email", "error");
      return;
    }
    if (!formData.password) {
      setMessage("Please enter password", "error");
      return;
    }
    setIsLoading(true);

    try {
      console.log("Attempting sign-in with:", formData.email);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Sign-in successful, user:", userCredential.user.uid);

      // Update lastLogin timestamp in Firestore
      await updateDoc(doc(db, "users", userCredential.user.uid), {
        lastLogin: serverTimestamp(),
      });
    } catch (error) {
      console.error("Sign-in error:", error);
      setMessage(getFriendlyError(error), "error");
      setIsLoading(false);
    }
  };

  const handleSignup = () => {
    setMessage("Redirecting to sign up", "info");
    setTimeout(() => {
      navigation("/sign-up");
    }, 1000);
  };

  const handleForgotpassword = () => {
    setMessage("Redirecting to forgot password", "info");
    setTimeout(() => {
      navigation("/forgot-password");
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      {toast.show && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[9999]">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast({ ...toast, show: false })}
          />
        </div>
      )}
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] transform transition-all hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Back
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <button
            onClick={handleForgotpassword}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
        >
          Sign In
        </button>

        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <button
            onClick={handleSignup}
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Signin;
