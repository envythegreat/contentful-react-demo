import React from "react";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import "../assets/css/offset.scss";
import img1 from "../assets/img/jacket-5.jpg";
import { TrashIcon } from "./icons";

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
        <div class="product-minimal">
          <div class="product-showcase">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={img1}
                  alt="relaxed short full sleeve t-shirt"
                  width="70"
                  className="showcase-img"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Relaxed Short full Sleeve T-Shirt
                  </h4>
                </a>
                <div className="price-box">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <p className="price">$45.00</p>
                    <p className="price">QTY: 1</p>
                  </div>
                  <button>
                    <TrashIcon width={14} height={14} color={"#ff8f9c"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default CartOffSet;
