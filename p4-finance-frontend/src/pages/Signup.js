import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";  // Check if file is correctly named

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // Success/Error message
  const navigate = useNavigate(); // Redirect after signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage("✅ Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      setMessage("❌ Signup failed! Try again.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {message && <p>{message}</p>} {/* Show success/error message */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
