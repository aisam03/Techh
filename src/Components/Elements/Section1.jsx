import React from "react";

function Section1() {
  return (
    <div className="sec1" id="offers">
      <div className="container">
        <div className="offer-heading">What We Offer</div>
        <div className="row bulk">
          <div className="laptops col-md-6 col-12">
            <div>
              <img src="Assets/laptops.jpeg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="b2b">
              <h4>B2B Excellence in Quantity:</h4>
              <p>
                Ali Tech is your trusted partner for B2B deals that cater
                to shops, retailers, and e-commerce startups. Whether you're
                looking to stock up on essentials or scale your offerings, we
                provide competitive pricing and unmatched quality in quantity.
              </p>
            </div>
            <div className="entrepreneur">
              <h4>Support for Entrepreneurs:</h4>
              <p>
                Are you a shopkeeper or launching your e-commerce startup?
                Partner with us to access a wide range of products that will
                impress your customers and keep them coming back for more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
