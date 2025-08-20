import "./HeroAboutPage.css";

function Hero() {
  return (
    <div className="container">
      <div className="row px-3 py-5 mb-5 mt-5">
        <div className="col-12">
          <h1 className="fs-2 text-center text-md-center">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <div
        className="row px-3 py-5 mt-5 border-top text-muted fs-6"
        style={{ margin: "110px" }}
      >
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-start">
          <p className="text-start">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="text-start">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="text-start">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-12 col-md-6 text-start">
          <p className="text-start">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <br />
          <p className="text-start">
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="text-start">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
