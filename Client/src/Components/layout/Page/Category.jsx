import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, InputNumber, Radio, Descriptions } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import { Image } from "antd";
import "../../Style/Category.css";
import "../../Style/base.css";
import "../../Style/grid.css";
import "../../Style/responsive.css"
import ModalProduct from "./viewAntd/modalProduct";

const Container = () => {
    const [visible, setVisible] = useState(false);

    const showModal = (e) => {
        setVisible(true);
    };
    return (
        <>
            <div class="app__container">
                <div class="grid wide">
                    <div class="row sm-gutter app__content">
                        <div class="col l-2 m-0 c-0">
                            <nav class="category">
                                <h3 class="category__heading">Danh mục</h3>
            
                                <ul class="category-list">
                                    <li class="category-item category-item--active">
                                        <a href="#" class="category-item__link">Đồ điện tử</a>
                                    </li>
                                    <li class="category-item">
                                        <a href="#" class="category-item__link">Đồ gia dụng</a>
                                    </li>
                                    <li class="category-item">
                                        <a href="#" class="category-item__link">Đồ cổ</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
    
                        <div class="col l-10 m-12 c-12">
                            <div class="home-filter hide-on-mobile-tablet">
                                <span class="home-filter__label">Sắp xếp theo</span>
                                <button class="home-filter__btn btn">Phổ biến</button>
                                <button class="home-filter__btn btn btn--primary">Mới nhất</button>
                                <button class="home-filter__btn btn">Bán chạy</button>

                                <div class="select-input">
                                    <span class="select-input__label">Giá</span>
                                    <i class="select-input__icon fas fa-angle-down"></i>
                                    
                                    <ul class="select-input__list">
                                        <li class="select-input__item">
                                            <a href="#" class="select-input__link">Giá: Thấp đến cao</a>
                                        </li>
                                        <li class="select-input__item">
                                            <a href="#" class="select-input__link">Giá: Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="home-filter__page">
                                    <span class="home-filter__page-num">
                                        <span class="home-filter__page-current">1</span>/14
                                    </span>

                                    <div class="home-filter__page-control">
                                        <a href="#" class="home-filter__page-btn home-filter__page-btn--disabled">
                                            <i class="home-filter__page-icon fas fa-angle-left"></i>
                                        </a>
                                        <a href="#" class="home-filter__page-btn">
                                            <i class="home-filter__page-icon fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <nav class="mobile-category">
                                <ul class="mobile-category__list">
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li><li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                    <li class="mobile-category__item">
                                        <a href="#" class="mobile-category__link">Dụng cụ & Thiết bị tiện ích</a>
                                    </li>
                                </ul>
                            </nav>

                            <div class="home-product">
                                <div class="row sm-gutter">
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">HuyLQ</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col l-2-4 m-4 c-6">
                                        <a class="home-product-item" href="#">
                                            <div class="home-product-item__img" style="background-image: url(./assets/img/product.jpg);"></div>
                                            <h4 class="home-product-item__name">Thiết bị văn phòng phẩm công nghệ cao</h4>
                                            <div class="home-product-item__price">
                                                <span class="home-product-item__price-old">1.200.000đ</span>
                                                <span class="home-product-item__price-current">999.000đ</span>
                                            </div>
                                            <div class="home-product-item__action">
                                                <span class="home-product-item__like home-product-item__like--liked">
                                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                                </span>
                                                <div class="home-product-item__rating">
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="home-product-item__star--gold fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <span class="home-product-item__sold">88 đã bán</span>
                                            </div>
                                            <div class="home-product-item__origin">
                                                <span class="home-product-item__brand">huy</span>
                                                <span class="home-product-item__origin-name">Nhật Bản</span>
                                            </div>
                                            <div class="home-product-item__favourite">
                                                <i class="fas fa-check"></i>
                                                <span>Yêu thích</span>
                                            </div>
                                            <div class="home-product-item__sale-off">
                                                <span class="home-product-item__sale-off-percent">43%</span>
                                                <span class="home-product-item__sale-off-label">GIẢM</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <ul class="pagination home-product__pagination">
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-angle-left"></i>
                                    </a>
                                </li>
                                <li class="pagination-item pagination-item--active">
                                    <a href="#" class="pagination-item__link">1</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">2</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">3</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">4</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">5</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">...</a>
                                </li>
                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">14</a>
                                </li>

                                <li class="pagination-item">
                                    <a href="#" class="pagination-item__link">
                                        <i class="pagination-item__icon fas fa-angle-right"></i>
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

export default Container;
