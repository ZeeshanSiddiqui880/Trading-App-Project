function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container text-start" style={{ marginTop: "20px" }}>
      <div className="row p-3 p-md-5 align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-4 mt-md-5">
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              fontWeight: 500,
              color: "#424242",
            }}
          >
            {productName}
          </h2>

          <p
            style={{
              margin: "15px 0",
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#424242",
            }}
          >
            {productDescription}
          </p>

          {learnMore && (
            <a href={learnMore} className="text-decoration-none">
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>

        <div className="col-12 col-md-6 text-center text-md-end p-3 p-md-5">
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "560px", height: "420px", maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
