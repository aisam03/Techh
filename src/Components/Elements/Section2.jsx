import React from "react";

function Section2() {
  return (
    <div className="sec2">
      <div className="container">
        <div className="row maintenance">
          <div className="col-md-6 col-12">
            <div className="cleaning">
              <h4>Comprehensive Maintenance Solutions:</h4>
              <h5>Laptop Cleaning Service:</h5>
              <p>
                Keep your laptops and devices spotless with our professional
                cleaning services. A clean workspace reflects a clean mind,
                leading to enhanced productivity.
              </p>
            </div>
            <div className="boosting">
              <h5>Efficiency-Boosting Maintenance:</h5>
              <p>
                Our maintenance services are designed to tackle any potential
                hiccups before they impact your work. Say goodbye to downtimes
                and hello to uninterrupted efficiency.
              </p>
            </div>
          </div>
          <div className="services col-md-6 col-12">
            <div>
              <img src="Assets/services.jpg" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
