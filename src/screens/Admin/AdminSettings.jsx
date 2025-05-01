import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase/Firebase";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { FaSave, FaUserShield, FaBell, FaCog } from "react-icons/fa";

const AdminSettings = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    siteName: "Aangan Home",
    shippingRate: 100,
    lowStockThreshold: 10,
    enableOrderNotifications: true,
    enableLowStockNotifications: true,
  });
  const [userRoles, setUserRoles] = useState([]);
  const [newUserRole, setNewUserRole] = useState({ email: "", role: "editor" });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!user || !user.email.endsWith("@gmail.com")) {
      navigate("/Admin");
      return;
    }

    const fetchSettings = async () => {
      try {
        // Fetch general settings
        const settingsDoc = await getDoc(doc(db, "settings", "general"));
        if (settingsDoc.exists()) {
          const data = settingsDoc.data();
          setSettings({
            siteName: data.siteName || "Aangan Home",
            shippingRate: data.shippingRate || 100,
            lowStockThreshold: data.lowStockThreshold || 10,
            enableOrderNotifications: data.enableOrderNotifications !== false,
            enableLowStockNotifications:
              data.enableLowStockNotifications !== false,
          });
        }

        // Fetch user roles
        const rolesSnapshot = await getDocs(
          collection(db, "settings", "userRoles", "roles")
        );
        const roles = rolesSnapshot.docs.map((doc) => ({
          userId: doc.id,
          ...doc.data(),
        }));
        setUserRoles(roles);
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    };

    fetchSettings();
  }, [user, navigate]);

  const handleSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const saveSettings = async (e) => {
    e.preventDefault();
    const parsedShippingRate = parseFloat(settings.shippingRate);
    const parsedLowStockThreshold = parseInt(settings.lowStockThreshold);

    if (isNaN(parsedShippingRate) || parsedShippingRate < 0) {
      setToast({ message: "Invalid shipping rate", type: "error" });
      return;
    }
    if (isNaN(parsedLowStockThreshold) || parsedLowStockThreshold < 0) {
      setToast({ message: "Invalid low stock threshold", type: "error" });
      return;
    }
    if (!settings.siteName.trim()) {
      setToast({ message: "Site name is required", type: "error" });
      return;
    }

    try {
      await setDoc(
        doc(db, "settings", "general"),
        {
          siteName: settings.siteName.trim(),
          shippingRate: parsedShippingRate,
          lowStockThreshold: parsedLowStockThreshold,
          enableOrderNotifications: settings.enableOrderNotifications,
          enableLowStockNotifications: settings.enableLowStockNotifications,
        },
        { merge: true }
      );
      setToast({ message: "Settings saved successfully", type: "success" });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const handleNewUserRoleChange = (e) => {
    const { name, value } = e.target;
    setNewUserRole((prev) => ({ ...prev, [name]: value }));
  };

  const addUserRole = async (e) => {
    e.preventDefault();
    if (!newUserRole.email.trim()) {
      setToast({ message: "Email is required", type: "error" });
      return;
    }
    if (!newUserRole.email.includes("@")) {
      setToast({ message: "Invalid email format", type: "error" });
      return;
    }
    if (userRoles.some((role) => role.email === newUserRole.email)) {
      setToast({ message: "User already has a role", type: "error" });
      return;
    }

    try {
      const userDoc = await getDocs(collection(db, "users"));
      const user = userDoc.docs.find(
        (doc) => doc.data().email === newUserRole.email
      );
      if (!user) {
        setToast({ message: "User not found", type: "error" });
        return;
      }

      const userId = user.id;
      await setDoc(doc(db, "settings", "userRoles", "roles", userId), {
        email: newUserRole.email,
        role: newUserRole.role,
      });
      setUserRoles((prev) => [
        ...prev,
        { userId, email: newUserRole.email, role: newUserRole.role },
      ]);
      setNewUserRole({ email: "", role: "editor" });
      setToast({
        message: `Added role for ${newUserRole.email}`,
        type: "success",
      });
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const removeUserRole = async (userId, email) => {
    if (window.confirm(`Remove role for ${email}?`)) {
      try {
        await deleteDoc(doc(db, "settings", "userRoles", "roles", userId));
        setUserRoles((prev) => prev.filter((role) => role.userId !== userId));
        setToast({ message: `Removed role for ${email}`, type: "success" });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    }
  };

  if (loading) return null;

  return (
    <div className="p-6 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          <FaCog className="text-blue-600" />
          System Settings
        </h1>

        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaCog className="text-blue-500" />
            General Settings
          </h2>
          <form onSubmit={saveSettings} className="grid gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Site Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleSettingsChange}
                placeholder="e.g., Aangan Home"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Shipping Rate (INR) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="shippingRate"
                value={settings.shippingRate}
                onChange={handleSettingsChange}
                placeholder="e.g., 100"
                step="0.01"
                min="0"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Low Stock Threshold <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="lowStockThreshold"
                value={settings.lowStockThreshold}
                onChange={handleSettingsChange}
                placeholder="e.g., 10"
                min="0"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save General Settings
            </button>
          </form>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaBell className="text-yellow-500" />
            Notification Preferences
          </h2>
          <form onSubmit={saveSettings} className="grid gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="enableOrderNotifications"
                checked={settings.enableOrderNotifications}
                onChange={handleSettingsChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-gray-700 text-sm font-semibold">
                Enable Order Notifications
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="enableLowStockNotifications"
                checked={settings.enableLowStockNotifications}
                onChange={handleSettingsChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="text-gray-700 text-sm font-semibold">
                Enable Low Stock Notifications
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
            >
              <FaSave />
              Save Notification Preferences
            </button>
          </form>
        </div>

        {/* User Role Management */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FaUserShield className="text-green-500" />
            User Role Management
          </h2>
          <form
            onSubmit={addUserRole}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
          >
            <input
              type="email"
              name="email"
              value={newUserRole.email}
              onChange={handleNewUserRoleChange}
              placeholder="User Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="role"
              value={newUserRole.role}
              onChange={handleNewUserRoleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Add Role
            </button>
          </form>

          <div className="overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userRoles.length === 0 ? (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No user roles assigned.
                    </td>
                  </tr>
                ) : (
                  userRoles.map((role) => (
                    <tr key={role.userId} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {role.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {role.role.charAt(0).toUpperCase() + role.role.slice(1)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() =>
                            removeUserRole(role.userId, role.email)
                          }
                          className="inline-flex items-center justify-center px-4 py-1 rounded-md bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-all duration-150"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminSettings;
