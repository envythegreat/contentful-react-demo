import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "../icons";

const socialLink = [
  {
    name: "logo Facebook",
    element: <FacebookIcon width={18} height={18} />,
  },
  {
    name: "logo twitter",
    element: <TwitterIcon width={18} height={18} />,
  },
  {
    name: "logo instagram",
    element: <InstagramIcon width={18} height={18} />,
  },
  {
    name: "logo linkedin",
    element: <LinkedinIcon width={18} height={18} />,
  },
];

const currency = [
  {
    symbol: "$",
    name: "Dollar",
    value: "usd",
  },
  {
    symbol: "€",
    name: "Euro",
    value: "eur",
  },
];

const language = [
  {
    code: "ar",
    name: "Arabic",
  },
  {
    code: "en-us",
    name: "English",
  },
  {
    code: "es-es",
    name: "Spanish",
  },
];

const TopNabBar = () => {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-social-container">
          {socialLink.map((item, index) => (
            <li key={index}>
              <a href="#" className="social-link">
                {item.element}
              </a>
            </li>
          ))}
        </ul>

        <div className="header-alert-news">
          <p>
            <b>Random Text </b>
            random Title Goes Here
          </p>
        </div>

        <div className="header-top-actions">
          <select name="currency">
            {currency.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name + " " + item.symbol}
              </option>
            ))}
          </select>

          <select name="language">
            {language.map((item) => (
              <option key={item.code} value={item.code}>
                {" "}
                {item.name}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopNabBar;
