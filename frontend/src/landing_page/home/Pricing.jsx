function Pricing() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <h1 className="mb-3 fs-2 text-start" >Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="d-inline-block mt-3"
            style={{ textDecoration: "none" }}
          >
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="d-none d-lg-block col-lg-2"></div>

        <div className="col-12 col-lg-6">
          <div className="row text-center">
            <div className="col-12 col-md-6 p-3 border mb-3 mb-md-0">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-md-6 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
