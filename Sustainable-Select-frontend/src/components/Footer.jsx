import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import "./Footer.css"; // Import the CSS file
import logo from "./logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-left">
      <div className="logo-and-text">
        <img src={logo} alt="EcoShop Logo" className="logo-image" />
        <div className="title-wrapper">
          <p className="logo-title">EcoShop</p>
          <p className="tagline">by CarbonSense</p>
        </div>
      </div>
        <p className="footer-desc">
          Your destination for sustainable selections.
          Discover a wide range of eco-friendly products that align with your
          values.
        </p>
        <div className="social-container">
          <div className="social-icon facebook">
            <Facebook />
          </div>
          <div className="social-icon instagram">
            <Instagram />
          </div>
          <div className="social-icon twitter">
            <Twitter />
          </div>
          <div className="social-icon pinterest">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title">Explore</h3>
        <ul className="footer-list">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Contact Us</h3>
        <div className="contact-item">
          <Room className="contact-icon" />
          622 Dixie Path, South Tobinchester 98336
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" /> +1 234 56 78
        </div>
        <div className="contact-item">
          <MailOutline className="contact-icon" /> contact@ecoshop.com
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="Payment Methods"
          className="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
