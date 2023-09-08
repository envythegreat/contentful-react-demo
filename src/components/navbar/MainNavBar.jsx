import React, { useState, useEffect } from "react";
import { SearchIcon, HeartIcon, UserIcon, CartIcon } from "../icons";
import logo from "../../assets/img/aperture.svg";
import CartOffSet from "../CartOffSet";

import { useDispatch, useSelector } from "react-redux";
import { homeSelector, initCardAdd } from "../../views/app/store";
import { getSavedCart } from "../../utility";

const MainNavBar = () => {
  const [canvas, setCanvasOpen] = useState(false);
  const toggle = () => setCanvasOpen((prevState) => !prevState);

  const dispatch = useDispatch();
  const { shopingCart } = useSelector(homeSelector);

  useEffect(() => {
    const cartData = getSavedCart();
    return () =>
      cartData.forEach((element) => {
        dispatch(initCardAdd(element));
      });
  }, [dispatch, initCardAdd, getSavedCart]);

  return (
    <div className="header-main">
      <div className="container">
        <a href="#" className="header-logo">
          <img src={logo} alt="Anon's logo" width="120" height="36" />
        </a>

        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />

          <button className="search-btn">
            <SearchIcon width={16} height={16} />
          </button>
        </div>

        <div className="header-user-actions">
          <button className="action-btn">
            <UserIcon width={30} height={30} />
          </button>
          <button className="action-btn">
            <HeartIcon width={30} height={30} />
            <span className="count">0</span>
          </button>
          <button className="action-btn" onClick={toggle}>
            <CartIcon width={30} height={30} />
            <span className="count">
              {shopingCart && shopingCart.products.length}
            </span>
          </button>
        </div>
      </div>
      <CartOffSet toggle={toggle} canvas={canvas} cart={shopingCart} />
    </div>
  );
};

export default MainNavBar;
