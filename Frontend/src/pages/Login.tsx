import React, { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";

const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
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

      console.log(response.data);

      setMessage("Login Successful");

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
      console.error(error);

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <input
          type="text"
          placeholder="Email or Username"
          value={identifier}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => setIdentifier(e.target.value)}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded"
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        {message && (
          <p className="text-center mt-4">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;