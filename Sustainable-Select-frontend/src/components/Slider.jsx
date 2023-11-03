import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import "./slider.css"; // Import the CSS file


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, []);


  return (
    <div className="container">
    <div className="arrow left" onClick={() => handleClick("left")}>
      <ArrowLeftOutlined />
    </div>
    <div className="wrapper" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
      {sliderItems.map((item) => (
        <div className={`slide ${item.className}`} key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
          <div className="imgContainer">
            <img className={`image ${item.className}`} src={item.img} alt={item.title} />
       
          </div>

          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
