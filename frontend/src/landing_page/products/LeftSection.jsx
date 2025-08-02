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
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          {tryDemo ? 
          <div>
            <a href={tryDemo} style={{textDecoration: "none"}} >
              {tryDemo} <i className="fa-solid fa-arrow-right"></i>
            </a>
            {learnMore ? 
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none" }}>
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a> : null
            }
          </div> : null
          }
          <div className="mt-3">
            <a href={googlePlay} style={{textDecoration: "none"}} >
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px", textDecoration: "none" }} >
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
