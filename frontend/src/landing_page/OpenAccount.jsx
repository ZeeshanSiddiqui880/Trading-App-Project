import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <h1 className="mt-4">Open a Zerodha account</h1>

          <p className="my-3 text-center">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>

          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button
              className="btn btn-primary fs-5 px-4 py-2"
              style={{
                backgroundColor: "#387ed1",
                width: "100%",
                maxWidth: "250px",
              }}
            >
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;