import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, InputNumber, Radio, Descriptions } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import { Image } from "antd";
import "../../Style/detailProduct.css";
import ModalProduct from "./viewAntd/modalProduct";

const Container = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='main'>
                <div className='slider slider__noTop'>
                    <div className='slider__section9'>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-1.png'
                                alt=''
                            />
                        </div>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-2.png'
                                alt=''
                            />
                        </div>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-3.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='content__head' id='content__sticky'>
                        <div className='content__heading'>
                            <h3>Gợi Ý Hôm Nay</h3>
                        </div>
                        <div className='content__lists'>
                            <div className='content__list-item border__active'>
                                <img
                                    src='../../../image/content/icon1.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Dành cho bạn
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon2.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Flash coupon 50K
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon3.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Giảm đến 40%
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon4.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Deal siêu hot
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon5.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Rẻ vô đối
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon6.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Đi chợ siêu sale
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon7.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>Hàng mới</span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon8.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Xu hướng thời trang
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='content__body'>
                        <div className='grid wide'>
                            <div className='row no-gutters content__active'>
                                <div
                                    className='col l-2 c-6 m-4'
                                    onClick={() => setVisible(true)}
                                >
                                    <div className='content__body-item'>
                                        <img
                                            src='../../../image/content/image1.png'
                                            alt=''
                                            className='content__body-img'
                                        />
                                        <div className='content__body-info'>
                                            <span className='info__name'>
                                                Điện thoại Samsung Galaxy Z
                                                Fold2 5G (128GB / 256GB) - Hàng
                                                chính hãng Sam Sung Việt Nam
                                            </span>
                                            <div className='info__vote'>
                                                <div className='info__vote-icon'>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                </div>
                                                <span className='info__vote-quantily'>
                                                    124 đã bán
                                                </span>
                                            </div>
                                            <div className='slider__content-price'>
                                                <span className='item__price'>
                                                    32.743.000 đ
                                                </span>
                                                <span className='item__discount'>
                                                    -35%
                                                </span>
                                            </div>
                                            <img
                                                src='https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png'
                                                alt=''
                                                width='124px'
                                                height='18px'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <ModalProduct
                                    visible={visible}
                                    onClose={() => setVisible(false)}
                                />
                            </div>
                            <div className='content__show'>
                                <a
                                    className='content__show-link'
                                    id='btn__showMore'
                                >
                                    Xem Thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider slider__noTop'></div>
            </div>
        </>
    );
};

export default Container;
