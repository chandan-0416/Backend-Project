import { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("accessToken");

      await api.post(
        "/users/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(
        "Password changed successfully ✅"
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
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        Change Password
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) =>
            setOldPassword(e.target.value)
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Update Password
        </button>

      </form>

      {message && (
        <p className="mt-4 text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default ChangePassword;