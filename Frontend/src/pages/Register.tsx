import React, { useState } from "react";
import api from "../api/axios";
import { AxiosError } from "axios";

interface FormDataState {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
      if (!avatar) {
        setMessage("Avatar is required");
        return;
      }

      setLoading(true);

      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("password", formData.password);

      data.append("avatar", avatar);

      if (coverImage) {
        data.append("coverImage", coverImage);
      }

      const response = await api.post(
        "/users/register",
        data
      );

      setMessage(
        response.data?.message ||
          "Registration Successful"
      );

      console.log(response.data);

      setFormData({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });

      setAvatar(null);
      setCoverImage(null);
    } catch (error) {
      console.error(error);

      if (error instanceof AxiosError) {
        setMessage(
          error.response?.data?.message ||
            "Registration Failed"
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
          Register
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">
          Avatar *
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            setAvatar(
              e.target.files?.[0] || null
            )
          }
          className="mb-4"
          required
        />

        <label className="block mb-2 font-medium">
          Cover Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) =>
            setCoverImage(
              e.target.files?.[0] || null
            )
          }
          className="mb-6"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded"
        >
          {loading
            ? "Registering..."
            : "Register"}
        </button>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;