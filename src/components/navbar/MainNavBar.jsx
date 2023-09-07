import React, {useState} from "react";
import { SearchIcon, HeartIcon, UserIcon, CartIcon } from "../icons";
import logo from "../../assets/img/aperture.svg";
import CartOffSet from "../CartOffSet";
const userAction = [
  {
    name: "person",
    elem: <UserIcon width={30} height={30} />,
  },
  {
    name: "wishlist",
    elem: <HeartIcon width={30} height={30} />,
    count: true,
  },
  {
    name: "cart",
    elem: <CartIcon width={30} height={30} />,
    count: true,
  },
];

const MainNavBar = () => {

  const [canvas, setCanvasOpen] = useState(false);
  const toggle = () => setCanvasOpen((prevState) => !prevState);

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
            <span className="count">0</span>
          </button>

          {/* {userAction.map((e, i) => (
            <button className="action-btn" key={e.name}>
              {e.elem}
              {e.count && <span className="count">0</span>}
            </button>
          ))} */}
        </div>
      </div>
      <CartOffSet toggle={toggle} canvas={canvas} />
    </div>
  );
};

export default MainNavBar;
