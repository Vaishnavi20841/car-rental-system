import { useState } from "react";
import { FaEnvelope, FaLock, FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(`${API}/api/admin/login`, formData);

      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);

        alert("Login Successful");

        navigate("/");
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Login Failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl p-8 border border-orange-500">

        <div className="flex justify-center mb-6">
          <div className="bg-orange-500 p-4 rounded-full">
            <FaCar className="text-white text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl text-center font-bold text-white">
          Admin Login
        </h2>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-gray-300">Email</label>

            <div className="flex items-center mt-2 bg-gray-800 rounded-lg px-3">
              <FaEnvelope className="text-orange-400" />

              <input
                type="email"
                name="email"
                placeholder="admin@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent p-3 outline-none text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-300">Password</label>

            <div className="flex items-center mt-2 bg-gray-800 rounded-lg px-3">
              <FaLock className="text-orange-400" />

              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent p-3 outline-none text-white"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition rounded-lg py-3 text-white font-bold"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;