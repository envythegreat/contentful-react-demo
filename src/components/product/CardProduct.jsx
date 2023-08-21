import React from "react";
import { HeartIcon, CartIcon, EyeIcon, StarIcon } from "../icons";
import { Link } from "react-router-dom";

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
  // const RATE_LIMIT = 5;
  // const ProductBadge = () => {
  //   if(item?.price?.ProductNew) return <p className="showcase-badge angle pink">New</p>
  //   if(item?.price?.ProductOnSale) return <p className="showcase-badge angle black">Sale</p>
  //   if(item?.price?.ProductDiscount) return <p className="showcase-badge angle">{item?.price?.ProductDiscount} %</p>
  // }

  return (
    <div className="new-product-card">
      <div className="new-product-tumb">
        <img
          src={item?.images?.[0].externalUrlSmall}
          alt={item?.abstractSku}
          className="new-product-img"
        />
        {/* {item?.images?.[1]?.externalUrlLarge && (
          <img
            src={item?.images?.[1].externalUrlSmall}
            alt={item?.abstractSku}
            className="new-product-img hv"
          />
        )} */}
      </div>
      <div className="new-product-details">
        <span className="new-product-catagory">{item?.abstractSku}</span>
        <h4>
          <a href="">{item.abstractName}</a>
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="new-product-bottom-details">
          <div className="new-product-price">
            {item.prices.currency.symbol} {item.price}
          </div>
          <div className="new-product-links">
            {productAction.map((item) => (
              <button className="btn-action" key={item.name}>
                {item.elem}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div className="showcase">
    //   <div className="showcase-banner">
    //     <img
    //       src={item?.images?.[0].externalUrlSmall}
    //       alt={item?.abstractSku}
    //       className="product-img default"
    //       // width="300"
    //     />
    //     {item?.images?.[1]?.externalUrlLarge && (
    //       <img
    //         src={item?.images?.[1].externalUrlSmall}
    //         alt={item?.abstractSku}
    //         class="product-img hover"
    //         // width="300"
    //       />
    //     )}
    //     {/* <ProductBadge /> */}
    //     {/* <p className="showcase-badge">15%</p> */}

    //     <div className="showcase-actions">
    //       {productAction.map((item) => (
    //         <button className="btn-action" key={item.name}>
    //           {item.elem}
    //         </button>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="showcase-content">
    //     <a href="#" className="showcase-category">
    //       {item.abstractSku}
    //     </a>

    //     <Link to={`/product-details/${item.abstractName}`}>
    //       <h3 className="showcase-title">{item.abstractName}</h3>
    //     </Link>
    //     {
    //       //rgb(246 163 85)
    //     }
    //     {/* <div className="showcase-rating">
    //       {[...Array(RATE_LIMIT)].map((x, i) => {
    //         if (item.price.ProductRating <= i) {
    //           return (
    //             <StarIcon width={16} height={16} key={i} />
    //           );
    //         } else {
    //           return (
    //             <StarIcon fill={"rgb(246 163 85)"} width={16} height={16} key={i} />
    //           );
    //         }
    //       })}
    //     </div> */}

    //     <div className="price-box">
    //       <p className="price">
    //         {item.prices.currency.symbol} {item.price}
    //       </p>
    //       {/* <del>${item.price.ProductOldPrice}</del> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardProduct;
