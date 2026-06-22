import {
  FiUser,
  FiLock,
  FiBell,
  FiMoon,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";
import api from "../api/axios";

const Settings = () => {
  const handleLogout = async () => {
    try {
      await api.post("/users/logout");

      localStorage.clear();

      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const settingsItems = [
    {
      icon: <FiUser size={20} />,
      title: "Account Information",
      desc: "Manage your profile details",
    },
    {
      icon: <FiLock size={20} />,
      title: "Security",
      desc: "Change password and login settings",
    },
    {
      icon: <FiBell size={20} />,
      title: "Notifications",
      desc: "Email and app notifications",
    },
    {
      icon: <FiMoon size={20} />,
      title: "Appearance",
      desc: "Theme and display preferences",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-blue-100 p-8">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Settings ⚙️
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account preferences and security
          </p>
        </div>

        {/* Settings Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {settingsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 border-b hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>

              <FiChevronRight
                size={20}
                className="text-gray-400"
              />
            </div>
          ))}

          {/* Logout Section */}
          <div className="p-6">

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              <FiLogOut size={20} />
              Logout
            </button>

          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Max-Q © 2026 • Version 1.0.0
        </div>

      </div>

    </div>
  );
};

export default Settings;