import React from "react";

const SiteMap = [
  {
    title: "POPULAR CATEGORIES",
    elem: [
      {
        name: "Fashion",
        path: "/",
      },
      {
        name: "Electronic",
        path: "/",
      },
      {
        name: "Lorem Epsum",
        path: "/",
      },
    ],
  },
  {
    title: "PRODUCTS",
    elem: [
      {
        name: "PRODUCTS",
        path: "/",
      },
      {
        name: "New Products",
        path: "/",
      },
      {
        name: "Best Sales",
        path: "/",
      },
    ],
  },
  {
    title: "OUR COMPANY",
    elem: [
      {
        name: "Delivery",
        path: "/",
      },
      {
        name: "Legal Notice",
        path: "/",
      },
      {
        name: "About Us",
        path: "/",
      },
    ],
  },
  {
    title: "SERVICES",
    elem: [
      {
        name: "Lorem Epsum",
        path: "/",
      },
      {
        name: "Lorem Eploc",
        path: "/",
      },
      {
        name: "About Us",
        path: "/",
      },
    ],
  },
	{
    title: "SERVICES",
    elem: [
      {
        name: "Lorem Epsum",
        path: "/",
      },
      {
        name: "Lorem Eploc",
        path: "/",
      },
      {
        name: "About Us",
        path: "/",
      },
    ],
  },
	{
    title: "SERVICES",
    elem: [
      {
        name: "Lorem Epsum",
        path: "/",
      },
      {
        name: "Lorem Eploc",
        path: "/",
      },
      {
        name: "About Us",
        path: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="footer-nav">
        <div className="container">
          {SiteMap.map((el, i) => (
            <ul className="footer-nav-list" key={i}>
              <li className="footer-nav-item">
                <h2 className="nav-title">{el.title}</h2>
              </li>
              {el.elem &&
                el.elem.map((e, i) => (
                  <li className="footer-nav-item" key={i+e.name}>
                    <a href={e.path} className="footer-nav-link">
                      {e.name}
                    </a>
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright all rights lorem epsum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
