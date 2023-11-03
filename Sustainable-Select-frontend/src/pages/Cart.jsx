import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { userRequest } from "../requestMethods";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { ReactComponent as CarbonSenseLogo } from "./CarbonSenseLogo.png";
import "./Cart.css";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [product, setProduct] = useState({});
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        // Show error toast notification
        toast.error("Payment error. Please try again.");
        
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch (error) {
        // Show success toast notification
        toast.success("Payment successful! Congratulations!");
        toast.success("Green credits will be updated in your dashboard");
      }
    };
  
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  
  return (
    <div>
      <Navbar />
      <div>
        <div className="cart-buttons">
          <button className="cart-button">CONTINUE SHOPPING</button>
        </div>
        <div className="product-summary">


          <div className="product-container">
            {cart.products.map((product) => (
              <div key={product._id} className="product-details">
                <img src={product.img} className="product-image" alt={product.title} />
                <div className="product-info">
                  <span>
                    <b>Product:</b> {product.title}
                  </span>
                  <span>
                    <b>ID:</b> {product._id}
                  </span>
                  <div className="color-indicator" style={{ backgroundColor: product.color }} />
                  <span>
                    <b>Size:</b> {product.size}
                  </span>
                </div>
                <div className="product-quantity">
                  <div className="quantity-controls">
                  </div>
                  <div className="product-price">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}
            <hr className="product-divider" />
          </div>
          <div className="order-summary">
            <h1 className="order-summary-title">ORDER SUMMARY</h1>
            <div className="summary-item">
              <span>Subtotal</span>
              <span>$ {cart.total}</span>
            </div>
            <div className="summary-item">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="summary-item">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="summary-item">
              <span>Total</span>
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="Carbon Sense"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey="pk_test_51NQN1ySJlhbriFqHZaun9AcTWbAwbCZMEqKhdIn2jM0U4dorLcfiM6kIh8B56VYkJuuhK4TggPrHjtDgTdXasSGS00yK22YQAS"
            >
              <button className="checkout-button">CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
