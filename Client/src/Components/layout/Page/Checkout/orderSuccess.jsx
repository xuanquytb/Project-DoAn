import React, { useState, useContext, useEffect } from "react";
import "../../../Style/orderSuccess.css";
import Header from "../Header/Header";
// import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../../Store/Context/CardContext";
import { useLocation } from "react-router-dom";

const orderSuccess = (props) => {
    const location = useLocation();

    Number.prototype.format = function(n, x) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&.');
    };
    return (
        <>
            <Header />
            <div className='main-success'>
                <div className='notify-order-success'>
                    <div className='container'>
                        <div>
                            <img
                                src='../../../../../public/gif/1103-confetti-lineal.gif'
                                alt=''
                                className='img-success'
                            />
                        </div>

                        <div className='content'>
                            <p
                                className='style-font'
                                style={{
                                    fontWeight: "bold",
                                    margin: "0 150px",
                                    marginBottom: 50,
                                }}
                            >
                                Chúc mừng bạn đã đặt hàng thành công
                            </p>
                        </div>
                        <div>
                            <p
                                className='style-font'
                                style={{ margin: "0 129px", color: "green" }}
                            >
                                Xin cảm ơn đã tin tưởng và mua hàng tại Website
                            </p>
                            <p
                                className='style-font'
                                style={{ color: "green" }}
                            >
                                Bạn vui lòng hãy chuẩn bị số tiền{" "}
                                {(location.state.info.sumPayment).format()} đ để thanh toán
                                đơn hàng
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default orderSuccess;
