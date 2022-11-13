import React from "react";
import brand from "../Images/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="brand">
          <img src={brand} alt="logo" width="50px" height="50px" />
          <h6>Powered by newsapp</h6>
        </div>
        <div className="address">
          <div className="sub-address">
            <h4>Work</h4>
            <p>StayTune</p>
            <p>Portfolio</p>
            <p>WeatherApp</p>
            <p>TodoApp</p>
            <p>MovieApp</p>
          </div>
          <div className="sub-address">
            <h4>Company</h4>
            <p>Services</p>
            <p>Team</p>
          </div>
          <div className="sub-address">
            <h4>Address</h4>
            <p>25f, Sriganganagar</p>
            <p>Rajasthan 335027</p>
          </div>
          <div className="sub-address">
            <h4>Social</h4>
            <a href="#">
              <i className="bi bi-twitter icon"></i>
              Twitter
            </a>

            <a href="#">
              <i className="bi bi-facebook icon"></i>
              Facebook
            </a>

            <a href="#">
              <i className="bi bi-linkedin icon"></i>
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="copy">
        Copyright ©2022 <strong>NewsApp.</strong> All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
