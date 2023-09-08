import React from "react";
import "../../../assets/css/cart.scss";
import img from "../../../assets/img/jacket-5.jpg";

import { homeSelector } from "../store";
import { useSelector } from "react-redux";

import MinimalCartPageProduct from "../../../components/product/MinimalCartPageProduct";

const Cart = () => {
  const { shopingCart } = useSelector(homeSelector);
  const total = shopingCart.products.reduce((accumulator, currentObject) => {
    return accumulator + (currentObject.price * currentObject.quantity);
  }, 0)

  return (
    <main>
      <div className="container">
        <div className="cart-wrapper">
          <div className="products-wrapper">
            {shopingCart.products.map((item) => (
              <MinimalCartPageProduct item={item} key={item.abstractSku} />
            ))}
          </div>
          <div className="price-wrapper">
            <h3 className="title">ORDER SUMMARY</h3>
            <div className="price-details">
              <div className="details">
                <span>ITEMS SUBTOTAL ({shopingCart.products.length}) :</span>
                <span>
                  $
                  {total}
                </span>
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
                <span>${total}</span>
              </div>
            </div>
            <hr style={{ width: "50%", margin: "15px auto" }} />
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
