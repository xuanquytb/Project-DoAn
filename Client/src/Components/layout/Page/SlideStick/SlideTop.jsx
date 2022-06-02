import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function slideTop(data) {
  const renderSlides = () =>
    data !== undefined ? (
      data.map((item, index) => (
        <div class="featured__container">
          <div class="featured__header">Danh Mục Nổi Bật</div>
          <div class="featured__body">
            <a href="#" class="featured__body-item">
              <img
                class="featured__img"
                src="http://localhost:8080/image/image-1652503330139.jpeg"
                alt=""
              />
              <span>Thực Phẩm Tươi Sống</span>
            </a>
          </div>
        </div>
      ))
    ) : (
      <></>
    );

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
