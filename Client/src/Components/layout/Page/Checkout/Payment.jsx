import React, { useState, useContext, useEffect } from "react";
import "../../../Style/payment.css";
import Header from "../Header";
import { InputNumber, Button } from "antd";
// import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../../Store/Context/CardContext";
import axios from "axios";

const Payment = () => {
  const {
    cardState: { cards, sumMoney },
    getCard,
    getSumMoneyCard,
  } = useContext(CardContext);

  const handDelete = async (id) => {
    const result = await axios.delete(
      `http://localhost:8080/api/card/cardDetail/${id}`
    );
    getCard();
    await getSumMoneyCard();
  };

  useEffect(async () => {
    getSumMoneyCard();
  }, []);

  console.log(sumMoney);

  return (
    <>
      <Header />
      <div className="main-Payment">
        <div className="box-left">
          <div className="flex-left"></div>
          <div className="flex-right"></div>
        </div>
        <div className="box-right">
          <div className="TitlePayment">
            <h3>Đơn hàng</h3>
          </div>
          {cards.map((item, index) => {
            return (
              <>
                <div className="itemBuy" key={index} style={{ margin: 10 }}>
                  <div className="itemBuy-detail">
                    <div className="imgProduct">
                      <img
                        src="https://toigingiuvedep.vn/wp-content/uploads/2021/09/hinh-anh-anime-nam-dep-trai-soai-ca-cute-nhat.jpg"
                        alt=""
                        style={{ width: 60, height: 60, borderRadius: 24 }}
                      />
                    </div>
                    <div className="infomation">
                      <div className="infomation-left">
                        <h3>{item.nameProduct}</h3>
                        <div style={{ color: "gray" }}>
                          {item.quantity} Sản phẩm
                        </div>
                      </div>
                      <div className="infomation-right">
                        <h3>5000000 đ</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="detail-Order">
            <div className="sumMoney">
              <h2>
                <strong>Tạm tính : </strong>
                <span style={{ color: "red" }}>
                  {sumMoney !== null ? sumMoney : "0"}đ
                </span>
              </h2>
            </div>
            <div className="btn-action-block">
              <Button type="primary" className="btn-buy">
                Đặt hàng
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
