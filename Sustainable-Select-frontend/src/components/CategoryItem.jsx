import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css"; // Import the CSS file
import { categories } from "../data"; // Import the categories data

const CategoryItem = ({ item }) => {
  return (
    <div className="container-prod">
      <Link to={`/products/${item.cat}`}>
        <img className="image-prod" src={item.img} alt={item.title} />
        <div className="info-prod">
          <h1 className="title-prod">{item.title}</h1>
          <div className="product-price-cat">${item.price}</div>
          <button className="button-prod">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
