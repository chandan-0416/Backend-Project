import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Max-Q
        </h1>

        <span className="font-medium">
          {user.fullName}
        </span>

      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-10">

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-3">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600">
            Glad to see you again,
            <span className="font-semibold ml-1">
              {user.fullName}
            </span>
          </p>

        </div>

        {/* User Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">

          <h3 className="text-2xl font-semibold mb-5">
            User Information
          </h3>

          <div className="space-y-3">

            <p>
              <strong>Name:</strong>{" "}
              {user.fullName}
            </p>

            <p>
              <strong>Username:</strong>{" "}
              {user.username}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

          </div>

        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">

          <button
            onClick={() => navigate("/profile")}
            className="bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;