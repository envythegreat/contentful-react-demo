import React, { useEffect, useState } from "react";
import useContentful from "../utility/useContentful";

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
  const [footerData, setSliderData] = useState([]);
  const { getData } = useContentful();
  useEffect(() => {
    getData({ contentType: "footer", select: "fields" }).then(
      (res) => res && setSliderData(res)
    );
  }, []);
  console.log('footer', footerData)
  return (
    <>
      <div className="footer-nav">
        <div className="container">
          {footerData.map((el, i) => (
            <ul className="footer-nav-list" key={i}>
              <li className="footer-nav-item">
                <h2 className="nav-title">{el.fields.title}</h2>
              </li>
              {el.fields.items &&
                el.fields.items.data.map((e, i) => (
                  <li className="footer-nav-item" key={i + e.title}>
                    <a href={e.slug} className="footer-nav-link">
                      {e.title}
                    </a>
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">Copyright all rights lorem epsum.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
