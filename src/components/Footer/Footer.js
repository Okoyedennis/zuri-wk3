import React from "react";
import logo from "../../asset/Group.svg";
import img1 from "../../asset/facebook.png";
import img2 from "../../asset/instagram.png";
import img3 from "../../asset/twitter.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper contain">
        <div className="footer__logo-social-links">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="socials">
            <img src={img1} alt="facebook" />
            <img src={img2} alt="instagram" />
            <img src={img3} alt="twitter" />
          </div>

          <p className="metabnb">&copy; {new Date().getFullYear()} Metabnb</p>
        </div>
        <div className="footer__text-wrapper">
          <p className="lead">Community</p>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="footer__text-wrapper">
          <p className="lead">Places</p>
          <p>Castle</p>
          <p>Farms </p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="footer__text-wrapper">
          <p className="lead">About us</p>
          <p>Road map</p>
          <p>Creators </p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
