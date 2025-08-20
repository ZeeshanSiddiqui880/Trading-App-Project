import "./Investments.css";

function Investments() {
  return (
    <div className="container" style={{ padding: "100px" }}>
      <div className="row p-5">
        <h2
          className="text-center"
          style={{ marginBottom: "50px", fontSize: "24px" }}
        >
          Investment options with Zerodha demat account
        </h2>

        <div
          className="investment-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px 10px",
            paddingTop: "24px",
            paddingBottom: "24px",
            marginLeft: "100px",
            marginRight: "100px",
            marginBottom: "30px",
          }}
        >
          <div className="investment-grid-item" style={{ display: "flex" }}>
            <img
              style={{ width: "112px" }}
              src="media/images/stocks-acop.svg"
            />
            <div style={{ marginLeft: "25px" }}>
              <h3 style={{ fontSize: "20px", lineHeight: "1.6" }}>Stocks</h3>
              <p style={{ fontSize: "16px", marginTop: "5px", color: "#666" }}>
                Invest in all exchange-listed <br /> securities
              </p>
            </div>
          </div>

          <div className="investment-grid-item" style={{ display: "flex" }}>
            <img style={{ width: "112px" }} src="media/images/mf-acop.svg" />
            <div style={{ marginLeft: "25px" }}>
              <h3 style={{ fontSize: "20px", lineHeight: "1.6" }}>
                Mutual funds
              </h3>
              <p style={{ fontSize: "16px", marginTop: "5px", color: "#666" }}>
                Invest in commission-free direct <br /> mutual funds
              </p>
            </div>
          </div>

          <div className="investment-grid-item" style={{ display: "flex" }}>
            <img style={{ width: "112px" }} src="media/images/ipo-acop.svg" />
            <div style={{ marginLeft: "25px" }}>
              <h3 style={{ fontSize: "20px", lineHeight: "1.6" }}>IPO</h3>
              <p style={{ fontSize: "16px", marginTop: "5px", color: "#666" }}>
                Apply to the latest IPOs instantly <br /> via UPI
              </p>
            </div>
          </div>

          <div className="investment-grid-item" style={{ display: "flex" }}>
            <img style={{ width: "112px" }} src="media/images/fo-acop.svg" />
            <div style={{ marginLeft: "25px" }}>
              <h3 style={{ fontSize: "20px", lineHeight: "1.6" }}>
                Futures & options
              </h3>
              <p style={{ fontSize: "16px", marginTop: "5px", color: "#666" }}>
                Hedge and mitigate market risk <br /> through simplified F&O
                trading
              </p>
            </div>
          </div>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3 investment-button"
          style={{
            width: "20%",
            margin: "0 auto",
            padding: "10px 30px",
            borderRadius: "3px",
            backgroundColor: "#387ed1",
          }}
        >
          Explore Investments
        </button>
      </div>
    </div>
  );
}

export default Investments;
