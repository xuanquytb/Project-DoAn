import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function slideTop() {
  const data = [
    "image-1-1.png",
    "image-1-2.png",
    "image-1-3.png",
    "image-1-4.png",
    "image-1-5.png",
    "image-1-6.png",
    "image-1-7.png",
    "image-1-8.png",
    "image-1-9.png",
    "image-1-10.png",
    "image-1-11.png",
    "image-1-12.png",
  ];
  const renderSlides = () =>
    data.map((item, index) => (
      <div key={index}>
        <img
          style={{ width: "100%", maxHeight: "150px" }}
          src={`../../../../../public/image/slider__body/slide-Top/${item}`}
        />
      </div>
    ));

  return (
    <div>
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        style={{ width: 735 }}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
