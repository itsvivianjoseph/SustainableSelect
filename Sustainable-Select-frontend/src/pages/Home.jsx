import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Season from "../components/season";
import OurValues from "../components/OurValues";
import SustainableWorks from "../components/SustainableWorks";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Season/>
      <OurValues/>
      <SustainableWorks/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
