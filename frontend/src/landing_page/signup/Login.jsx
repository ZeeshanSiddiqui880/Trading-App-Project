import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://trading-app-project.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://dashboard-finverse.netlify.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Login</h1>
          <div style={{ textAlign: "center" }}>
            <img
              src="media/images/logokite.png"
              alt="Kite Logo"
              style={{ width: "60px" }}
            />
          </div>
          <p className="login-subtitle">
            Welcome back! Please login to your account.
          </p>

          <div className="form-floating mb-3">
            <input
              onChange={handleOnChange}
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="name@example.com"
              value={email}
            />
            <label htmlFor="email">Email:</label>
          </div>

          <div className="form-floating">
            <input
              onChange={handleOnChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>

          <p className="login-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
