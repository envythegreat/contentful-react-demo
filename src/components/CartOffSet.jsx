import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import "../assets/css/offset.scss";
import img1 from "../assets/img/jacket-5.jpg";
import girl from "../assets/img/girls.jpg";
import ProductCart from "./product/ProductCart";

const items = [
  {
    img: img1,
    title: "Relaxed Short Full Sleeve T-Shirt",
    price: "25$",
    quantity: 2,
    id: 1231234,
  },
  {
    img: girl,
    title: "girls pink embro design top",
    price: "40$",
    quantity: 5,
    id: 7687344,
  },
];

const CartOffSet = ({ toggle, canvas }) => {
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
            {items.map((item) => (
              <ProductCart item={item} key={item.id} />
            ))}
          </div>

          <div className="offset-footer">
            <button className="cart-button">
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
