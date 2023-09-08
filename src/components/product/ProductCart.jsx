import React from "react";
import { TrashIcon } from "../icons";
import { removeFromCart } from "../../views/app/store";
import { useDispatch } from "react-redux";


const ProductCart = ({ item }) => {

  const dispatch = useDispatch()

  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <div className="showcase">
          <a href="#" className="showcase-img-box">
            <img
              src={item?.image}
              alt={item.abstractName}
              width="70"
              height="70"
              className="showcase-img"
            />
          </a>

          <div className="showcase-content">
            <a href="#">
              <h4 className="showcase-title">{item.abstractName}</h4>
            </a>
            <div className="price-box">
              <div style={{ display: "flex", gap: "10px" }}>
                <p className="price">Price : {item.price}</p>
                <p className="price">QTY: {item.quantity}</p>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.abstractSku))}>
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
