import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logo from "./logo.png";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
      <img src={logo} alt="EcoShop Logo" className="nav-logo-image" />

        <div className="header-text-wrapper">
          <h1 className="header-text">EcoShop</h1>
          <p className="sub-header-text">by carbonsense</p>
        </div>
      </div>
      <div className="nav-links">
        <div className="nav-link">Shop</div>
        <div className="nav-link">Shop by Values</div>
        <div className="nav-link">Rewards</div>
        <div className="nav-link">Corporate Gifting</div>
        <div className="nav-link">Learn</div>
        <div className="nav-link">Who We Are</div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search.." className="search-input" />
        <Link to="/cart">
          <Badge badgeContent={quantity} color="primary" overlap="rectangular">
            <ShoppingCartOutlined style={{ color: "white", fontSize: 32, marginLeft: "30px" }} />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
