import React from "react";
import "./OurValues.css";
import valuesImage from "../images/7.jpg"; // Import your image

const OurValues = () => {
  return (
    <div className="our-values-container">
      <div className="our-values-content">
        <div className="values-text">
          <h2 className="values-title">Our Values</h2>
          <p className="values-paragraph">
            At Sustainable Select, we're committed to making a positive impact on the environment
            through our eco-friendly products and sustainable practices. With a focus on quality,
            ethics, and innovation, we strive to bring you the best while preserving our planet for
            future generations. Join us in our journey towards a greener and brighter future.
          </p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="values-image">
          <img src={valuesImage} alt="Our Values" />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
