import React from "react";
import { HeartIcon, CartIcon, EyeIcon, StarIcon } from "../icons";
const productAction = [
  {
    name: "wish",
    elem: <HeartIcon width={20} height={20} />,
  },
  {
    name: "eye",
    elem: <CartIcon width={20} height={20} />,
  },
  {
    name: "cart",
    elem: <EyeIcon width={20} height={20} />,
  },
];

const CardProduct = ({ item }) => {
  const RATE_LIMIT = 5;

  return (
    <div className="showcase">
      <div className="showcase-banner">
        <img
          src={item.ProductImages}
          alt="Mens Winter Leathers Jackets"
          width="300"
          className="product-img"
        />

        <p className="showcase-badge">15%</p>

        <div className="showcase-actions">
          {productAction.map((item) => (
            <button className="btn-action" key={item.name}>
              {item.elem}
            </button>
          ))}
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {item.ProductCategory}
        </a>

        <a href="#">
          <h3 className="showcase-title">{item.ProductItemNameEN}</h3>
        </a>
        {
          //rgb(246 163 85)
        }
        <div className="showcase-rating">
          {[...Array(RATE_LIMIT)].map((x, i) => {
            if (item.ProductRating <= i) {
              return (
                <StarIcon width={16} height={16} />
              );
            } else {
              return (
                <StarIcon fill={"rgb(246 163 85)"} width={16} height={16} />
              );
            }
          })}
        </div>

        <div className="price-box">
          <p className="price">${item.ProductCurrentPrice}</p>
          <del>${item.ProductOldPrice}</del>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
