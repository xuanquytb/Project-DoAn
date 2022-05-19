import React, { useState } from "react";
import { Layout } from "antd";

import "../../Style/Category.css";
import "../../Style/base.css";
import "../../Style/grid.css";
import "../../Style/responsive.css";

const Category_User = () => {
  return (
    <>
      <div className="app__container">
        <div className="grid wide">
          <div className="row sm-gutter app__content">
            <div className="col l-2 m-0 c-0">
              <nav className="category">
                <h3 className="category__heading">Danh mục</h3>

                <ul className="category-list">
                  <li className="category-item category-item--active">
                    <a href="#" className="category-item__link">
                      Đồ điện tử
                    </a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">
                      Đồ gia dụng
                    </a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-item__link">
                      Đồ cổ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col l-10 m-12 c-12">
              <div className="home-filter hide-on-mobile-tablet">
                <span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter__btn btn">Phổ biến</button>
                <button className="home-filter__btn btn btn--primary">
                  Mới nhất
                </button>
                <button className="home-filter__btn btn">Bán chạy</button>

                <div className="select-input">
                  <span className="select-input__label">Giá</span>
                  <i className="select-input__icon fas fa-angle-down"></i>

                  <ul className="select-input__list">
                    <li className="select-input__item">
                      <a href="#" className="select-input__link">
                        Giá: Thấp đến cao
                      </a>
                    </li>
                    <li className="select-input__item">
                      <a href="#" className="select-input__link">
                        Giá: Cao đến thấp
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="home-filter__page">
                  <span className="home-filter__page-num">
                    <span className="home-filter__page-current">1</span>/14
                  </span>

                  <div className="home-filter__page-control">
                    <a
                      href="#"
                      className="home-filter__page-btn home-filter__page-btn--disabled"
                    >
                      <i className="home-filter__page-icon fas fa-angle-left"></i>
                    </a>
                    <a href="#" className="home-filter__page-btn">
                      <i className="home-filter__page-icon fas fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <nav className="mobile-category">
                <ul className="mobile-category__list">
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                  <li className="mobile-category__item">
                    <a href="#" className="mobile-category__link">
                      Dụng cụ & Thiết bị tiện ích
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="home-product">
                <div className="row sm-gutter">
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item__img"></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item__img"></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item__img"></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">HuyLQ</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item__img"></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div className="home-product-item__img"></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        // style="background-image: url(./assets/img/product.jpg);"
                      ></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        // style="background-image: url(./assets/img/product.jpg);"
                      ></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        // style="background-image: url(./assets/img/product.jpg);"
                      ></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        // style="background-image: url(./assets/img/product.jpg);"
                      ></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="col l-2-4 m-4 c-6">
                    <a className="home-product-item" href="#">
                      <div
                        className="home-product-item__img"
                        // style="background-image: url(./assets/img/product.jpg);"
                      ></div>
                      <h4 className="home-product-item__name">
                        Thiết bị văn phòng phẩm công nghệ cao
                      </h4>
                      <div className="home-product-item__price">
                        <span className="home-product-item__price-old">
                          1.200.000đ
                        </span>
                        <span className="home-product-item__price-current">
                          999.000đ
                        </span>
                      </div>
                      <div className="home-product-item__action">
                        <span className="home-product-item__like home-product-item__like--liked">
                          <i className="home-product-item__like-icon-empty far fa-heart"></i>
                          <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div className="home-product-item__rating">
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="home-product-item__star--gold fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span className="home-product-item__sold">
                          88 đã bán
                        </span>
                      </div>
                      <div className="home-product-item__origin">
                        <span className="home-product-item__brand">huy</span>
                        <span className="home-product-item__origin-name">
                          Nhật Bản
                        </span>
                      </div>
                      <div className="home-product-item__favourite">
                        <i className="fas fa-check"></i>
                        <span>Yêu thích</span>
                      </div>
                      <div className="home-product-item__sale-off">
                        <span className="home-product-item__sale-off-percent">
                          43%
                        </span>
                        <span className="home-product-item__sale-off-label">
                          GIẢM
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="pagination home-product__pagination">
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-left"></i>
                  </a>
                </li>
                <li className="pagination-item pagination-item--active">
                  <a href="#" className="pagination-item__link">
                    1
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    2
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    3
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    4
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    5
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    ...
                  </a>
                </li>
                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    14
                  </a>
                </li>

                <li className="pagination-item">
                  <a href="#" className="pagination-item__link">
                    <i className="pagination-item__icon fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category_User;
