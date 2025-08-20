import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container py-5 mb-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-8">
            <img
              src="media/images/homeHero.png"
              alt="Hero"
              className="img-fluid mb-4"
            />

            <h1 className="mt-4">Invest in everything</h1>

            <p className="mt-3 text-center">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
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
      </div>
    </>
  );
}

export default Hero;
