import React from "react";
import "./SustainableWorks.css";
import step1Image from "../images/step1.png";
import step2Image from "../images/step2.png";
import step3Image from "../images/step3.png";
import step4Image from "../images/step4.png";
import step5Image from "../images/step5.png";

const SustainableWorks = () => {
  return (
    <div className="sustainable-works-container">
      <h2 className="works-title">How does EcoShop Works</h2>
      <div className="steps-container">
        <div className="step">
          <img src={step1Image} alt="Step 1" className="step-image" />
          <h3>Step 1</h3>
          <p className="step-description">Discover Eco-Friendly Products</p>
        </div>
        <div className="step">
          <img src={step2Image} alt="Step 2" className="step-image" />
          <h3>Step 2</h3>
          <p className="step-description">Choose Your Favorites</p>
        </div>
        <div className="step">
          <img src={step3Image} alt="Step 3" className="step-image" />
          <h3>Step 3</h3>
          <p className="step-description">Place Your Order</p>
        </div>
        <div className="step">
          <img src={step4Image} alt="Step 4" className="step-image" />
          <h3>Step 4</h3>
          <p className="step-description">Make the sustainable choice</p>
        </div>
        <div className="step">
          <img src={step5Image} alt="Step 5" className="step-image" />
          <h3>Step 5</h3>
          <p className="step-description">Earn Green Credits</p>
        </div>
      </div>
    </div>
  );
};

export default SustainableWorks;
