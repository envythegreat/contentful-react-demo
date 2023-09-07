import React from "react";
import { TrashIcon } from "../icons";

const ProductCart = ({ item }) => {
  return (
    <div class="product-minimal">
      <div class="product-showcase">
        <div className="showcase">
          <a href="#" className="showcase-img-box">
            <img
              src={item.img}
              alt={item.title}
              width="70"
              className="showcase-img"
            />
          </a>

          <div className="showcase-content">
            <a href="#">
              <h4 className="showcase-title">{item.title}</h4>
            </a>
            <div className="price-box">
              <div style={{ display: "flex", gap: "10px" }}>
                <p className="price">Price : {item.price}</p>
                <p className="price">QTY: {item.quantity}</p>
              </div>
              <button>
                <TrashIcon width={14} height={14} color={"#ff8f9c"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
