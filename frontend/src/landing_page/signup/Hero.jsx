import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Hero() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
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
      console.log(response.data);
    } catch (error) {
      console.error("signup error", error);
    }
  };
  return (
    <div className="container ">
      <div
        className="row text-center"
        style={{ padding: "90px", paddingBottom: "40px" }}
      >
        <h1 style={{ fontSize: "30px" }}>
          Open a free demat and trading account online
        </h1>
        <p style={{ fontSize: "1.3rem" }} className="text-muted mt-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div
        className="row"
        style={{
          padding: "20px 40px 0 40px",
          marginRight: "70px",
          marginLeft: "70px",
        }}
      >
        <div className="col-6 p-5">
          <img
            src=" media\images\account_open.svg"
            style={{ width: "500px" }}
          />
        </div>
        <div className="col-6 p-5 " style={{ marginTop: "10px" }}>
          <form >
            <h1 style={{ fontSize: "1.5rem" }}>Signup now</h1>
            <p
              style={{ fontSize: "16px", color: "#9b9b9b", fontWeight: "400" }}
              className="text-muted mt-3"
            >
              Or track your existing application
            </p>
            <div className="row">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setUsername(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="email">Enter valid Email:</label>
              </div>

              <div className="form-floating">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <label htmlFor="password">Password:</label>
              </div>
            </div>
            <button
              className="p-2 btn btn-primary fs-5 mb-5 mt-3"
              style={{
                width: "50%",
                margin: "0 auto",
                backgroundColor: "#387ed1",
              }}
              onSubmit={handleSubmit}
            >
              Signup
            </button>
          </form>
          <p style={{ color: "gray", fontSize: "0.75rem" }}>
            By proceeding, you agree to the Zerodha <Link> terms</Link> &{" "}
            <Link>privacy policy</Link> <Link to="/login">privacy policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
