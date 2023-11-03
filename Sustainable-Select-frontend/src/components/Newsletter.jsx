// Newsletter.jsx
import React from "react";
import { Send } from "@material-ui/icons";
import "./Newsletter.css"; // Import the CSS file

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Stay Informed</h1>
      <div className="newsletter-desc">
        Join our sustainable community for the latest updates and eco-friendly tips.
      </div>
      <div className="input-container">
        <input className="newsletter-input" type="text" placeholder="Enter your email" />
        <button className="newsletter-button">
          Subscribe <Send className="newsletter-icon" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
