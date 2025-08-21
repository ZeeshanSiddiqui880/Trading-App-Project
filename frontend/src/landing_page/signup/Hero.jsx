import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./HeroSignup.css";

function Hero() {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = inputValue;

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
      const response = await axios.post(
        "https://trading-app-project.onrender.com/signup",
        {
          email,
          password,
          username,
          createdAt: new Date(),
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      const { success, message } = response.data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://dashboard-finverse.netlify.app/login";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("signup error", error);
    }
    setInputValue({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="container py-5">
        <div className="text-center mb-5 px-3">
          <h1 className="fs-3">Open a free demat and trading account online</h1>
          <p className="text-muted fs-5 mt-3">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6 text-center">
            <img
              src="media/images/account_open.svg"
              alt="Signup Illustration"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="col-12 col-md-6">
            <form onSubmit={handleSubmit}>
              <h2 className="fs-4 mb-3">Signup now</h2>
              <p className="text-muted" style={{ fontSize: "1rem" }}>
                Or track your existing application
              </p>

              <div className="form-floating mb-3">
                <input
                  onChange={handleOnChange}
                  value={username}
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                />
                <label htmlFor="username">Enter a Username:</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  onChange={handleOnChange}
                  value={email}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Enter valid Email:</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  onChange={handleOnChange}
                  value={password}
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password:</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 p-2 fs-5"
                style={{ backgroundColor: "#387ed1" }}
              >
                Signup
              </button>
            </form>

            <p className="mt-3 text-muted" style={{ fontSize: "0.85rem" }}>
              By proceeding, you agree to the Zerodha <Link>terms</Link> &{" "}
              <Link>privacy policy</Link>.{" "}
              <a
                href="https://dashboard-finverse.netlify.app/login"
                className="ms-2 highlight-login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
