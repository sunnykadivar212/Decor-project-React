import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/Firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Toast from "../components/CustomToast";
import Loader from "../components/loader";

const Signup = () => {
  const navigation = useNavigate();
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSignup = async () => {
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Store user data in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: formData.email,
        isAdmin: false,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      });

      setMessage("Registration successful!", "success");
      navigation("/");
    } catch (error) {
      setMessage(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px] transform transition-all hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Create Account
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
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
        >
          Sign Up
        </button>

        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={() => navigation("/sign-in")}
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default Signup;
