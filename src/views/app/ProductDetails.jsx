import React, { useState, useEffect } from "react";
import { StarIcon } from "../../components/icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, homeSelector, getAbstractProduct } from "./store";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


const ProductDetails = () => {


  const { slug } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(homeSelector);
  const { selectedProduct } = products;
  
  useEffect(() => {
    dispatch(getSingleProduct(slug));
    // dispatch(getAbstractProduct({params:{
    //   include:'abstract-product-prices,concrete-products,product-labels'
    // }, productid:slug}));
  }, [dispatch, slug]);

  return (
    <>
      <div className="product-featured">
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner" style={{
                  // display:'flex',
                 
                }}>
                <Carousel showIndicators={false} transitionTime={0}>
                  {selectedProduct?.images?.map((e, i) => (
                    <img
                      key={i}
                      src={e.externalUrlLarge}
                      alt={selectedProduct?.abstractName}
                      className="showcase-img"
                    />
                  ))}
                </Carousel>
                {/* <img
                  src={selectedProduct?.images?.[0].externalUrlLarge}
                  alt={selectedProduct?.abstractName}
                  className="showcase-img"
                /> */}
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
                    {selectedProduct?.abstractName}
                  </h3>
                </a>

                <p className="showcase-desc">{selectedProduct?.abstractSku}</p>

                <div className="price-box">
                  <p className="price">
                    {selectedProduct?.prices?.currency?.symbol}{" "}
                    {selectedProduct?.price}
                  </p>

                  {/* <del>
                    {productDetails?.items[0].fields.price.ProductOldPrice}$
                  </del> */}
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
              __html: selectedProduct?.abstractName,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
