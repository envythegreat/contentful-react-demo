import React, { useState, useEffect } from "react";
import { StarIcon } from "../../components/icons";
import { useParams } from "react-router-dom";
import useContentful from "../../utility/useContentful";

const ProductDetails = () => {
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState();
  const { getSingleItem } = useContentful();

  useEffect(() => {
    getSingleItem({ content_type: "sProductSfy", slug }).then(
      (res) => res && setProductDetails(res)
    );
  }, []);
  console.log("ss", productDetails);
  return (
    <>
      <div className="product-featured">
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src={productDetails?.items[0].fields.image.fields.file?.url}
                  alt={productDetails?.items[0].fields.image.fields.title}
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>

                <a href="#">
                  <h3 className="showcase-title">
                    {productDetails?.items[0].fields.title}
                  </h3>
                </a>

                <p className="showcase-desc">
                  {productDetails?.items[0].fields.category}
                </p>

                <div className="price-box">
                  <p className="price">
                    {productDetails?.items[0].fields.price.ProductCurrentPrice}$
                  </p>

                  <del>
                    {productDetails?.items[0].fields.price.ProductOldPrice}$
                  </del>
                </div>

                <button className="add-cart-btn">add to cart</button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>20</b>
                    </p>

                    <p>
                      available: <b>40</b>
                    </p>
                  </div>

                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">360</p>

                      <p className="display-text">Days</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">24</p>
                      <p className="display-text">Hours</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">59</p>
                      <p className="display-text">Min</p>
                    </div>

                    <div className="countdown-content">
                      <p className="display-number">00</p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="title">Details</h2>
        <div className="showcase-content">
          <p
            className="showcase-desc"
            style={{ lineHeight: "30px" }}
            dangerouslySetInnerHTML={{
              __html:
                productDetails?.items[0].fields.description.content[0]
                  .content[0].value,
            }}
          >
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;




