import React from "react";
import { FiUser, FiMail, FiAtSign } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface User {
  fullName?: string;
  username?: string;
  email?: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const user: User = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Top Section */}
          <div className="p-8 border-b">

            <div className="flex flex-col items-center">

              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
                <FiUser
                  size={36}
                  className="text-blue-600"
                />
              </div>

              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                {user.fullName || "User"}
              </h2>

              <p className="text-gray-500">
                @{user.username || "username"}
              </p>

            </div>

          </div>

          {/* Information Section */}
          <div className="p-8 space-y-6">

            <div className="flex items-center gap-4 border-b pb-4">

              <FiUser
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-medium text-gray-800">
                  {user.fullName || "Not Available"}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 border-b pb-4">

              <FiAtSign
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Username
                </p>

                <p className="font-medium text-gray-800">
                  {user.username || "Not Available"}
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <FiMail
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Email Address
                </p>

                <p className="font-medium text-gray-800">
                  {user.email || "Not Available"}
                </p>
              </div>

            </div>

          </div>

          {/* Buttons */}
          <div className="p-8 border-t flex gap-4">

            <button
              onClick={() =>
                navigate("/settings")
              }
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Account Settings
            </button>

            <button
              className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;