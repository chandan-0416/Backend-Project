import React from "react";
import {
  FiUser,
  FiMail,
  FiAtSign,
} from "react-icons/fi";

interface User {
  fullName?: string;
  username?: string;
  email?: string;
}

const Profile: React.FC = () => {
  const user: User = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-100 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Cover Section */}
        <div className="h-40 bg-linear-to-r from-blue-600 to-indigo-600 relative">

          {/* Avatar */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
              <FiUser size={40} className="text-blue-600" />
            </div>
          </div>

        </div>

        {/* Content */}
        <div className="pt-16 pb-8 px-8">

          <h1 className="text-3xl font-bold text-center">
            {user.fullName || "User"}
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Welcome to your profile
          </p>

          <div className="mt-8 grid gap-5">

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <FiUser
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <p className="font-semibold">
                  {user.fullName || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <FiAtSign
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Username
                </p>

                <p className="font-semibold">
                  {user.username || "Not Available"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border rounded-xl">
              <FiMail
                size={22}
                className="text-blue-600"
              />

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="font-semibold">
                  {user.email || "Not Available"}
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition">
              Edit Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;