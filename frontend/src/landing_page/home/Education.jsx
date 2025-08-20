function Education() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>

        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="mb-3 fs-2 text-start">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="d-inline-block mb-3"
            style={{ textDecoration: "none" }}
          >
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="d-inline-block"
            style={{ textDecoration: "none" }}
          >
            Trading Q&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
