function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 text-start" style={{ marginTop: "20px" }}>
      <div className="row p-3 p-md-5 align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "560px", height: "420px", maxWidth: "100%" }}
          />
        </div>

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
              textAlign: "start",
            }}
          >
            {productDescription}
          </p>

          {tryDemo && (
            <div className="mt-4">
              <a href={tryDemo} className="text-decoration-none">
                {tryDemo} <i className="fa-solid fa-arrow-right"></i>
              </a>

              {learnMore && (
                <a
                  href={learnMore}
                  className="text-decoration-none"
                  style={{ marginLeft: "50px" }}
                >
                  {learnMore} <i className="fa-solid fa-arrow-right"></i>
                </a>
              )}
            </div>
          )}
          <div className="mt-4">
            <a href={googlePlay} className="text-decoration-none">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a
              href={appStore}
              className="text-decoration-none"
              style={{ marginLeft: "50px" }}
            >
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
