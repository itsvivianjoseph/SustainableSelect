import React from "react";
import { summerProducts } from "../data";
import "./Season.css";

const Season = () => {
  return (
    <div className="season-container">
      <h3>Sustainable Summer - upto 50% Offer</h3>
      <div className="atagline">Discover eco-friendly styles for your sunny adventures.</div>
      <div className="product-list">
        {summerProducts.map((product) => (
          <div className={`product-item ${product.className}`} key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className={`product-image ${product.className}-image`} // Add class here
            />
            <div className="product-title">{product.title}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
      <button className="shop-button">SHOP NOW</button>
    </div>
  );
};

export default Season;
