import {
  FiUser,
  FiLock,
  FiBell,
  FiMoon,
  FiLogOut,
  FiChevronRight,
  FiShield,
  FiSettings,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const handleLogout = async () => {
    try {
      localStorage.clear();

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const settingsItems = [
    {
      icon: <FiUser size={20} />,
      title: "Profile",
      desc: "View and manage profile information",
      action: () => navigate("/profile"),
    },
    {
      icon: <FiLock size={20} />,
      title: "Change Password",
      desc: "Update your account password",
      action: () => navigate("/change-password"),
    },
    {
      icon: <FiShield size={20} />,
      title: "Security",
      desc: "Manage account security",
    },
    {
      icon: <FiBell size={20} />,
      title: "Notifications",
      desc: "Control notification preferences",
    },
    {
      icon: <FiMoon size={20} />,
      title: "Appearance",
      desc: "Theme and display settings",
    },
    {
      icon: <FiSettings size={20} />,
      title: "Preferences",
      desc: "Customize your experience",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your account and preferences
          </p>
        </div>

        {/* User Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">

          <div className="flex items-center gap-5">

            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

              <FiUser
                size={28}
                className="text-blue-600"
              />

            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {user.fullName || "User"}
              </h2>

              <p className="text-slate-500">
                {user.email}
              </p>
            </div>

          </div>

        </div>

        {/* Settings List */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {settingsItems.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className="flex items-center justify-between p-6 border-b hover:bg-slate-50 transition cursor-pointer"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.desc}
                  </p>
                </div>

              </div>

              <FiChevronRight
                size={20}
                className="text-slate-400"
              />

            </div>
          ))}
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mt-6">

          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Danger Zone
          </h2>

          <p className="text-slate-500 mb-5">
            Logout from your account.
          </p>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition"
          >
            <FiLogOut size={20} />
            Logout
          </button>

        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-500 text-sm">
          Max-Q • Authentication Platform
        </div>

      </div>

    </div>
  );
};

export default Settings;