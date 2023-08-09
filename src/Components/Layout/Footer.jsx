import React from "react";
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs"

function Footer() {
  return (
    <div className="footer" id="foot">
      <div className="container">
        <div className="row footer-content">
            <div className="col-6 footer-right">
                <span><img src="Assets/logo2.jpeg" alt="" /></span>
                <span className="social-icons">
                    <a href="https://instagram.com/alitechltd?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" className="instagram"><BsInstagram/></a>
                    <a href="https://www.facebook.com/profile.php?id=100078671025436&mibextid=ZbWKwL" target="_blank" className="facebook"><BsFacebook/></a>
                </span>
            </div>
            <div className="col-6 footer-left">
                <div className="phone">Phone no: <br /> +92 323-6455425</div>
                <div className="address">Address: <br /> Umair center, 6th Road, Rawalpindi.</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
