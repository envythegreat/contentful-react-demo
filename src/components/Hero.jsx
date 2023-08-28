import React, { useEffect, useState } from "react";
import BannerImg from "../assets/img/banner-1.jpg";
import useContentful from "../utility/useContentful";

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
  const [sliderData, setSliderData] = useState([]);
  const { getData } = useContentful();
  useEffect(() => {
    getData({ contentType: "slider", select: "fields" }).then(
      (res) => res && setSliderData(res)
    );
  }, []);
  return (
    <div className="banner" style={{ marginTop: "20px" }}>
      <div className="container">
        <div className="slider-container has-scrollbar">
          {sliderData.map((item, index) => (
            <div className="slider-item" key={index}>
              <img
                src={item?.fields?.image?.fields?.file?.url}
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                {/* <p className="banner-subtitle">{e.subtitle}</p> */}

                <h2 className="banner-title" style={{color:'snow'}}>{item?.fields?.title}</h2>

                {/* <p className="banner-text">{e.text}</p> */}

                <a href="#" className="banner-btn">
                  {item?.fields?.textButton}
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
