function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          {learnMore ? (
            <a style={{textDecoration: "none"}} href={learnMore}>
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a>
          ) : null}
        </div>
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
