import React, { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

interface LoginProps {
  switchToRegister?: () => void;
}

const Login: React.FC<LoginProps> = ({switchToRegister}) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const payload = identifier.includes("@")
        ? {
            email: identifier,
            password,
          }
        : {
            username: identifier,
            password,
          };

      const response = await api.post(
        "/users/login",
        payload
      );

      setMessage("✅ Login Successful");

      if (response.data?.data?.accessToken) {
        localStorage.setItem(
          "accessToken",
          response.data.data.accessToken
        );
      }

      if (response.data?.data?.refreshToken) {
        localStorage.setItem(
          "refreshToken",
          response.data.data.refreshToken
        );
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(
          error.response?.data?.message ??
            "Login Failed"
        );
      } else {
        setMessage("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to Max-Q
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email / Username */}
          <div className="relative">
            <FiMail
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Email or Username"
              value={identifier}
              onChange={(e) =>
                setIdentifier(e.target.value)
              }
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
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
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

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Social Login UI */}
          <div className="">
            <button
              type="button"
              className="border px-10 py-3 rounded-xl hover:bg-gray-50 ml-25"
            >
              Google
            </button>

          </div>

          {/* Register Link */}
          <div className="text-center mt-4">
            <span className="text-gray-600">
              Need an account?
            </span>

            <button
              type="button"
              onClick={switchToRegister}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              Register
            </button>
          </div>

          {/* Message */}
          {message && (
            <div className="text-center text-sm mt-2">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;