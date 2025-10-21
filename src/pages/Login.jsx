import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { toast } from "react-toastify";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { backendUrl, setToken } = useContext(ShopContext);
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!email || !password || (isSignUp && (!name || !confirmPassword))) {
      toast.error("Please fill all required fields");
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const endpoint = isSignUp ? "register" : "login";
      const payload = isSignUp
        ? { name, email, password }
        : { email, password };

      const response = await axios.post(
        `${backendUrl}/api/user/${endpoint}`,
        payload
      );

      if (response.data.success) {
        setToken(response.data.token); // ✅ set token
        toast.success(
          isSignUp ? "Account created successfully!" : "Logged in successfully!"
        );
        navigate("/");
      } else {
        toast.error(response.data.message || "Authentication failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-10 pt-14 border-t">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-xl">
        <div className="text-2xl mb-6 text-center">
          <Title text1={isSignUp ? "Create" : "Login"} text2="Account" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border p-2 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border p-2 rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="border p-2 rounded-md"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          <button
            type="submit"
            className="bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            {isSignUp ? "SIGN UP" : "LOGIN"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="text-blue-600 cursor-pointer" onClick={toggleMode}>
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
