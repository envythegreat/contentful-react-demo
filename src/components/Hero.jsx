import React from "react";
import BannerImg from "../assets/img/banner-1.jpg";
const heroItem = [
  {
    img: BannerImg,
    subtitle: "Trending item",
    title: "Women's latest fashion sale",
    text: "starting at $20.00",
    btn: "Shop now",
    id: 1,
  },
  {
    img: BannerImg,
    subtitle: "Trending item",
    title: "Women's latest fashion sale",
    text: "starting at $20.00",
    btn: "Shop now",
    id: 2,
  },
  {
    img: BannerImg,
    subtitle: "Trending item",
    title: "Women's latest fashion sale",
    text: "starting at $20.00",
    btn: "Shop now",
    id: 3,
  },
];

const Hero = () => {
  return (
    <div className="banner" style={{marginTop:'20px'}}>
      <div className="container">
        <div className="slider-container has-scrollbar">
          {heroItem.map((e) => (
            <div className="slider-item" key={e.id}>
              <img
                src={e.img}
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">{e.subtitle}</p>

                <h2 className="banner-title">{e.title}</h2>

                <p className="banner-text">{e.text}</p>

                <a href="#" className="banner-btn">
                  {e.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
