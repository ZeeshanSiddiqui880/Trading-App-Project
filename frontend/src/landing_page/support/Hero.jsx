function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="  p-5" id="supportWrapper">
        <h1>Support Portal</h1>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a Tickets
          </h1>
          <input placeholder="Eg. how do I activate F&O, why is my order getting rejected." />
          <a href="">Track account opening </a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>Current Takeovers and Delisting - January 2024</li>
            <li>Latest Intraday leverages - MIS & CO</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
