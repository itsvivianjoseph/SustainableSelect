import React, { useRef, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import "./Categories.css";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { categories } from "../data"; // Import the categories data

const Categories = () => {
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const itemsPerPage = 3; // Number of items to show per slide
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalPages - 1));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < totalPages - 1 ? prevIndex + 1 : 0));
    }
  };


  return (
    <div className="categories-container">
      <div className={`slider-button left red-background`} onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined />
      </div>
      <div className="category-slider" ref={containerRef} style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
        <div className="category-items-wrapper" itemsPerPage={itemsPerPage} totalPages={totalPages}>
          {categories.map((category) => (
            <div className="category-item" key={category.id}>
              <CategoryItem item={category} />
            </div>
          ))}
        </div>
      </div>
      <div className={`slider-button right red-background`} onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default Categories;
