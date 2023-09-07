import React from "react";
import "../../../assets/css/cart.scss";
import img from "../../../assets/img/jacket-5.jpg";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  HeartIcon,
} from "../../../components/icons";

const Cart = () => {
  return (
    <main>
      <div className="container">
        <div className="cart-wrapper">
          <div className="products-wrapper">
            <div className="showcase">
              <div className="product-showcase">
                <img
                  src={img}
                  alt="Jacket"
                  width="100"
                  className="showcase-img"
                />
              </div>
              <div className="showcase-content">
                <div>
                  <h4 className="showcase-title">This is a brown jacket</h4>
                </div>
                <div className="price-box">
                  <div style={{ display: "flex", gap: "30px" }}>
                    <p className="price">Price : 100$</p>
                    <p className="price">Total : 100$</p>
                  </div>
                </div>
              </div>
              <div className="product-action">
                <div className="product-quantity">
                  <button className="quantity-icon">
                    <MinusIcon width={14} height={14} />
                  </button>
                  1
                  <button className="quantity-icon">
                    <PlusIcon width={14} height={14} />
                  </button>
                </div>
                <div className="other-action">
                  <button>
                    <HeartIcon width={16} height={16} />
                  </button>
                  <button>
                    <TrashIcon width={16} height={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="price-wrapper">
            <h3 className="title">ORDER SUMMARY</h3>
            <div className="price-details">
              <div className="details">
                <span>ITEMS SUBTOTAL (1) :</span>
                <span>$75.00</span>
              </div>
              <div className="details">
                <span>SHIPPING :</span>
                <span>Free</span>
              </div>
              <div className="details">
                <span>ESTIMATED TAX :</span>
                <span>$00.00</span>
              </div>
              <div className="details">
                <span>Total :</span>
                <span>$75.00</span>
              </div>
            </div>
            <hr style={{width:'50%',margin:'15px auto',}} />
            <div className="cart-actions">
              <button className="cart-button">PROCEED TO CHECKOUT</button>
              <button className="blank-button">Continue Shopping</button>
              <p>FREE SHIPPING & RETURNS</p>
              <p>Return Online or any Store we own</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
