import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        {/* <div className="row">
                <div className="col-6 col-12">
                    <img src="" alt="" />
                </div>
            </div> */}
        <div>
          <div className="hero-heading">
            Empowering IT Companies, <br />
            <span className="bpo">BPOs</span>
            <br /> and Corporates
          </div>
          <p className="hero-description">
            Are you ready to elevate your workspace experience? At Ali Tech, we
            specialize in providing comprehensive solutions tailored to the
            unique demands of IT companies, BPOs, and corporates.From
            cutting-edge work solutions to essential accessories, we've got you
            covered. Our mission is to enhance your productivity and efficiency,
            enabling you to achieve remarkable results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
