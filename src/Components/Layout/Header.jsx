import React from "react";

function Header() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="Assets/logo.png" alt="" />
          </div>
          <div className="nav-items">
            <ul className="nav-list">
              <li>
                <a href="#offers">What we Offers</a>
              </li>
              <li>
                <a href="#foot">Contact US</a>
              </li>
            </ul>
          </div>
          <div className="logo-heading">
            Powered by<span className="name"> Waqar Traders</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
