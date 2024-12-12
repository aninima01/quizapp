import React, { useState } from "react";

const Login = () => {
  // State to hold form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission (without backend integration)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation (email and password must not be empty)
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Simulating successful login (no backend)
    alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
    // Reset the form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-radial-custom">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>

        {/* Display error message if any */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
