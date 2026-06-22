const Dashboard = () => {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold">
          Welcome {user.fullName || "User"} 👋
        </h2>

        <p className="text-gray-600 mt-2">
          Successfully logged in.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;