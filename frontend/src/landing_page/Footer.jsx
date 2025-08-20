import "./Footer.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgb(250, 250, 250)",
        paddingLeft: "15px", // Reduced from 200px for mobile-friendliness
        paddingRight: "15px",
      }}
    >
      <div className="container border-top mt-5">
        <div className="row mt-5 gy-4">
          <div className="col-12 col-md-4 col-lg-3 text-start">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Zerodha Logo"
            />
            <p className="mt-2">
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br /> All rights
              reserved.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-start">
            <h5>Account</h5>
            <a href="#" className="text-muted text-decoration-none">
              Open demat account
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Minor demat account
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              NRI demat account
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Commodity
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Dematerialisation
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Fund transfer
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              MTF
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Referral program
            </a>{" "}
            <br />
            <br />
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-start">
            <h5>Support</h5>
            <a href="#" className="text-muted text-decoration-none">
              Contact us
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Support portal
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              How to file a complaint?
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Status of your complaints
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Bulletin
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Circular
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Z-Connect blog
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Downloads
            </a>{" "}
            <br />
            <br />
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-start">
            <h5>Company</h5>
            <a href="#" className="text-muted text-decoration-none">
              About
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Philosophy
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Press & media
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Careers
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Zerodha Cares (CSR)
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Zerodha.tech
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Open sour
            </a>{" "}
            <br />
            <br />
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-start">
            <h5>Quick links</h5>
            <a href="#" className="text-muted text-decoration-none">
              Upcoming IPOs
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Brokerage charges
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Market holidays
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Economic calendar
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Calculators
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Markets
            </a>{" "}
            <br />
            <br />
            <a href="#" className="text-muted text-decoration-none">
              Sectors
            </a>{" "}
            <br />
            <br />
          </div>

          <div
            className="col-12 text-start"
            style={{
              fontSize: "10.4px",
              color: "#9b9b9b",
              lineHeight: "1.6",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through <br />
              Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
              Registration no.: INZ000038238 Registered Address: Zerodha Broking
              Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
              School, J.P Nagar 4th <br /> Phase, Bengaluru - 560078, Karnataka,
              India. For any complaints pertaining to securities broking please
              write to complaints@zerodha.com, for DP related to dp@zerodha.com.
              Please ensure you carefully read the Risk <br /> Disclosure
              Document as prescribed by SEBI | ICF
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy <br /> redressal of the grievances
            </p>
            <p>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / <br /> depository participant and
              receive OTP directly from depository on your e-mail and/or mobile
              number to create pledge. 3) Check your securities / MF / bonds in
              the consolidated account statement issued by NSDL/CDSL <br />{" "}
              every month.
            </p>
            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>
            <p style={{ textAlign: "left" }}>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the <br /> day. Issued in the interest
              of investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same{" "}
              <br /> process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to <br /> authorize your bank to make payment
              in case of allotment. In case of non allotment the funds will
              remain in your bank account. As a business we don't give stock
              tips, and have not authorized anyone to trade on behalf of <br />{" "}
              others. If you find anyone claiming to be part of Zerodha and
              offering such services, please create a ticket here.
            </p>
          </div>

          <div className="col-12 text-center text-muted mt-4">
            <ul
              className="list-inline"
              style={{
                fontWeight: "500",
                fontSize: "0.75rem",
                color: "#9b9b9b",
                listStyleType: "none",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "25px",
                paddingBottom: "20px",
              }}
            >
              <li>NSE</li>
              <li>BSE</li>
              <li>MCX</li>
              <li>Terms & Conditions</li>
              <li>Policies & procedures</li>
              <li>Privacy policy</li>
              <li>Disclosure</li>
              <li>For investor's attention</li>
              <li>Investor charter</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
