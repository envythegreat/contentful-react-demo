import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import "../assets/css/offset.scss";

import ProductCart from "./product/ProductCart";
import { useNavigate } from "react-router-dom";



const CartOffSet = ({ toggle, canvas, cart}) => {

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/cart');
    toggle()
  }

  return (
    <Offcanvas
      toggle={toggle}
      isOpen={canvas}
      direction="end"
      style={{
        backgroundColor: "#fff",
      }}
    >
      <OffcanvasHeader
        toggle={toggle}
        style={{ justifyContent: "space-between" }}
        tag="h2"
      >
        Shopping Cart
      </OffcanvasHeader>
      <OffcanvasBody>
        <div className="offset-body">
          <div className="offset-products has-scrollbar">
            {cart && cart.products.map((item) => (
              <ProductCart item={item} key={item.abstractSku} />
            ))}
          </div>

          <div className="offset-footer">
            <button className="cart-button" onClick={() => handleNavigate()}>
              Checkout
            </button>
            <button className="cart-button">
              Delete all
            </button>
          </div>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default CartOffSet;
