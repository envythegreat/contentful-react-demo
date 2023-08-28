import React, { useEffect, useState } from "react";
import useContentful from "../utility/useContentful";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
        <Carousel className="slider-container" showThumbs={false}>
          {sliderData.map((item, index) => (
            <div className="slider-item" key={index}>
              <img
                src={item?.fields?.image?.fields?.file?.url}
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                {/* <p className="banner-subtitle">{e.subtitle}</p> */}

                <h2 className="banner-title" style={{ color: "snow" }}>
                  {item?.fields?.title}
                </h2>

                {/* <p className="banner-text">{e.text}</p> */}

                <a href="#" className="banner-btn">
                  {item?.fields?.textButton}
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
