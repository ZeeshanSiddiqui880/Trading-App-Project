function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 px-3 px-md-5 py-4">
        <h3 className="">Zerodha Products</h3>
        <h5 className="text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="mt-3 mb-5 text-center">
          Check out our{" "}
          <a
            style={{ textDecoration: "none" }}
            href="#"
            className="text-primary fw-semibold"
          >
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
