import React, { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

interface FormDataState {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

interface RegisterProps {
  switchToLogin?: () => void;
}

const Register: React.FC<RegisterProps> = ({
  switchToLogin,
}) => {
  const [formData, setFormData] =
    useState<FormDataState>({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await api.post(
        "/users/register",
        formData
      );

      setMessage(
        response.data?.message ??
          "Registration Successful"
      );

      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(
          error.response?.data?.message ??
            "Registration Failed"
        );
      } else {
        setMessage(
          "Something went wrong"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Join Max-Q and start your journey
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Full Name */}
          <div className="relative">
            <FiUser
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Username */}
          <div className="relative">
            <FiUser
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-12 pr-12 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4 text-gray-500"
            >
              {showPassword ? (
                <FiEyeOff />
              ) : (
                <FiEye />
              )}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-gray-600">
              Already have an account?
            </span>

            <button
              type="button"
              onClick={switchToLogin}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className="text-center text-sm">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;