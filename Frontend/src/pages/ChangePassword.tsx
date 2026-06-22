import { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";
import { FiLock } from "react-icons/fi";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post(
        "/users/change-password",
        {
          oldPassword,
          newPassword,
        }
      );

      setMessage(
        response.data.message
      );

      setOldPassword("");
      setNewPassword("");
    } catch (error) {
      if (error instanceof AxiosError) {
        setMessage(
          error.response?.data?.message ||
            "Failed to change password"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold mb-2">
          Change Password
        </h1>

        <p className="text-gray-500 mb-6">
          Update your account password
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>
            <label className="text-sm font-medium">
              Old Password
            </label>

            <div className="relative mt-2">

              <FiLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                value={oldPassword}
                onChange={(e) =>
                  setOldPassword(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-3 pl-10"
                required
              />

            </div>
          </div>

          <div>
            <label className="text-sm font-medium">
              New Password
            </label>

            <div className="relative mt-2">

              <FiLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-3 pl-10"
                required
              />

            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            {loading
              ? "Updating..."
              : "Update Password"}
          </button>

          {message && (
            <p className="text-center mt-2">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
  );
};

export default ChangePassword;