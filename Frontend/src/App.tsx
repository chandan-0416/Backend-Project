import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>} />
        <Route path="/setting" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>} />

      </Routes>
    </BrowserRouter>

  )
}
export default App;