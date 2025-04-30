import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/Firebase";
import { db } from "../../firebase/Firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import Toast from "../../components/CustomToast";
import { FaTrash, FaEdit } from "react-icons/fa";

const AdminUserManagement = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState(null);
  const [editUser, setEditUser] = useState(null);

  // useEffect(() => {
  //   const checkAdmin = async () => {
  //     if (user) {
  //       const userDoc = await getDoc(doc(db, "users", user.uid));
  //       if (userDoc.exists() && userDoc.data().isAdmin) {
  //         return;
  //       }
  //       setToast({
  //         message: "Access denied: Admin only",
  //         type: "error",
  //       });
  //       navigate("/home");
  //     } else if (!loading && !user) {
  //       setToast({
  //         message: "Please sign in as admin",
  //         type: "error",
  //       });
  //       navigate("/sign-in");
  //     }
  //   };
  //   if (!loading) checkAdmin();
  // }, [user, loading, navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((u) =>
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (u) => {
    setEditUser({ ...u });
  };

  const saveEdit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "users", editUser.id), {
        email: editUser.email,
        isAdmin: editUser.isAdmin,
        createdAt: editUser.createdAt,
      });
      setUsers((prev) =>
        prev.map((u) => (u.id === editUser.id ? editUser : u))
      );
      setToast({ message: `Updated ${editUser.email}`, type: "success" });
      setEditUser(null);
    } catch (error) {
      setToast({ message: error.message, type: "error" });
    }
  };

  const deleteUser = async (userId, email) => {
    if (window.confirm(`Delete ${email}?`)) {
      try {
        await deleteDoc(doc(db, "users", userId));
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        setToast({ message: `Deleted ${email}`, type: "success" });
      } catch (error) {
        setToast({ message: error.message, type: "error" });
      }
    }
  };

  if (loading) return null;

  return (
    <div className="p-6 pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          User Management
        </h1>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search users by email..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
          <table className="min-w-full divide-y divide-blue-200">
            <thead className="bg-gradient-to-r from-blue-200 via-purple-200 to-blue-100">
              <tr>
                <th className="px-8 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-widest">
                  Email
                </th>
                <th className="px-8 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-widest">
                  Admin Status
                </th>
                <th className="px-8 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-widest">
                  Created At
                </th>
                <th className="px-8 py-4 text-left text-sm font-bold text-blue-800 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-blue-100">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center py-10 text-lg text-blue-400 font-semibold"
                  >
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((u) => (
                  <tr
                    key={u.id}
                    className="transition-all duration-200 hover:bg-blue-50 hover:shadow-md"
                  >
                    <td className="px-8 py-4 whitespace-nowrap text-base text-blue-900 font-medium">
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                        {u.email}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-base">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          u.isAdmin
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-gray-100 text-gray-600 border border-gray-300"
                        }`}
                      >
                        {u.isAdmin ? "Admin" : "User"}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-base text-blue-700">
                      <span className="bg-blue-100 px-2 py-1 rounded-md">
                        {u.createdAt && u.createdAt.seconds
                          ? new Date(
                              u.createdAt.seconds * 1000
                            ).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </td>
                    <td className="px-8 py-4 whitespace-nowrap text-base">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleEdit(u)}
                          className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          title="Edit User"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => deleteUser(u.id, u.email)}
                          className="flex items-center justify-center bg-red-500 hover:bg-red-700 text-white rounded-full p-2 shadow transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-400"
                          title="Delete User"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {editUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <form
              onSubmit={saveEdit}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            >
              <h2 className="text-xl font-semibold mb-4">Edit User</h2>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={editUser.email}
                  disabled
                  className="px-4 py-2 border rounded-lg bg-gray-100 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editUser.isAdmin}
                    onChange={(e) =>
                      setEditUser((prev) => ({
                        ...prev,
                        isAdmin: e.target.checked,
                      }))
                    }
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-700 text-sm font-semibold">
                    Admin
                  </span>
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditUser(null)}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

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

export default AdminUserManagement;
