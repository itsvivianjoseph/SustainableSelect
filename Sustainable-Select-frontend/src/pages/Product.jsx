import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import "./Product.css"; 

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [educativeContent, setEducativeContent] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        console.log(res.data);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const fetchEducativeContent = async () => {
      try {
        const res = await publicRequest.get("/educativecontent/textile");
        setEducativeContent(res.data[0].content);
      } catch (error) {
        console.error("Error fetching educative content:", error);
      }
    };
    fetchEducativeContent();
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="product-container">
      <Navbar />
      <div className="product-wrapper">
        <div className="product-img-container">
          <img className="product-image" src={product.img} alt={product.title} />
        </div>
        <div className="product-info-container">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-desc">{product.desc}</p>
          <p className="product-desc educative-content">{educativeContent}</p>
          <p className="product-desc weight-text">Weight: <span className="green-text">{product.weight} grams</span></p>
          <p className="product-desc">
            Carbon Emission: <span className="carbon-percentage">{product.carbonEmissionPercentage}%</span>
          </p>
          <div className="product-price"> <p>${product.price}</p></div>
          <div className="product-filter-container">
            <div className="product-filter">
              <span className="product-filterTitle">Select Color</span>
              <div className="product-colors">
                {product.color?.map((c) => (
                  <div
                    className="product-color"
                    style={{ backgroundColor: c }}
                    key={c}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
            <div className="product-filter">
              <span className="product-filterTitle">Select Size</span>
              <select className="product-size" onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <option className="product-sizeOption" key={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="product-add-container">
            <div className="product-amountContainer">
              <Remove onClick={() => handleQuantity("dec")} />
              <span className="product-amount">{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button className="product-button" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
