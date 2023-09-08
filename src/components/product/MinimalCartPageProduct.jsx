import React from "react";
import {
  MinusIcon,
  PlusIcon,
  TrashIcon,
  HeartIcon,
} from "../icons";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../views/app/store";

const MinimalCartPageProduct = ({item}) => {

  const dispatch = useDispatch();

  return (
    <div className="showcase">
      <div className="product-showcase">
        <img src={item.image} alt="Jacket" width="100" className="showcase-img" />
      </div>
      <div className="showcase-content">
        <div>
          <h4 className="showcase-title">{item.abstractName}</h4>
        </div>
        <div className="price-box">
          <div style={{ display: "flex", gap: "30px" }}>
            <p className="price">Price : {item.price} {item.currency}</p>
            <p className="price">Total : {item.price * item.quantity} {item.currency}</p>
          </div>
        </div>
      </div>
      <div className="product-action">
        <div className="product-quantity">
          <button className="quantity-icon" onClick={() => dispatch(changeQuantity({id:item.abstractSku, action:'minus'}))}>
            <MinusIcon width={14} height={14} />
          </button>
            {item.quantity}
          <button className="quantity-icon" onClick={() => dispatch(changeQuantity({id:item.abstractSku, action:'plus'}))}>
            <PlusIcon width={14} height={14} />
          </button>
        </div>
        <div className="other-action">
          <button>
            <HeartIcon width={16} height={16} />
          </button>
          <button onClick={() => dispatch(removeFromCart(item.abstractSku))}>
            <TrashIcon width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinimalCartPageProduct;
