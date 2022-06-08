import React, { useContext, useEffect, useState } from "react";
import ModalProduct from "./modalProduct";

import { Card } from "antd";

const ListCategory = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const [product, setProduct] = useState();

    const showModal = (e, id) => {
        e.preventDefault();
        setProduct(id);
        setVisible(true);
    };

    Number.prototype.format = function(n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
    };

    return (
        <div className='row no-gutters content__active'>
            {data !== undefined ? (
                data.map((item) => {
                    return (
                        <Card
                            style={{ padding: 0 }}
                            className='col l-2 c-6 m-4'
                            type='text'
                            key={item.id}
                            onClick={(event) => showModal(event, item.id)}
                        >
                            <div className='content__body-item'>
                                <img
                                    src={`http://localhost:8080/image/procuct/${item.image}`}
                                    alt=''
                                    className='content__body-img'
                                />
                                <div className='content__body-info'>
                                    <span className='info__name'>
                                        {item.nameProduct}
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
                                            {item.sold} đã bán
                                        </span>
                                    </div>
                                    <div className='slider__content-price'>
                                        <span className='item__price'>
                                            {(item.price.format())} đ
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
                        </Card>
                    );
                })
            ) : (
                <></>
            )}

            <ModalProduct
                visible={visible}
                onClose={() => setVisible(false)}
                product={product}
            />
        </div>
    );
};

export default ListCategory;
