
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white shadow-lg rounded-xl p-8 w-96 border"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-3"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* 🔹 Demo credentials */}
        <div className="mt-4 text-center text-sm text-gray-600 bg-gray-50 p-2 rounded border">
          <p>
            <strong>Email:</strong> admin@gmail.com
          </p>
          <p>
            <strong>Password:</strong> 12345
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
