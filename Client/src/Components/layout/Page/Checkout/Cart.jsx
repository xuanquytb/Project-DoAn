import React, { useState, useContext, useEffect } from "react";
import "../../../Style/checkout.css";
import Header from "../Header";
import { InputNumber, Button } from "antd";
// import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../../Store/Context/CardContext";

const Cart = () => {
  const [state, setState] = useState("process");

  const onChange = (value) => {
    console.log("changed", value);
  };
  const {
    cardState: { cards },
    getCard,
    deleteCard,
  } = useContext(CardContext);

  // useEffect(() => {
  //   getCard();
  // }, []);

  const handDelete = (id) => {
    console.log(id);
  };

  console.log(cards);
  return (
    <>
      <Header />
      <div className="main-checkout">
        <div className="body-checkout">
          <div className="body-checkout-Content">
            <h1 className="Title-checkout">Sản phẩm trong giỏ hàng</h1>
            {cards.map((item, index) => {
              return (
                <div className="cartItem" key={index}>
                  <img
                    className="img-product"
                    src="https://hinhgaixinh.com/wp-content/uploads/2021/12/bo-anh-girl-xinh-cap-2.jpg"
                    alt=""
                  />
                  <div className="infoProduct">
                    <p className="text-info name-Product">{item.nameProduct}</p>
                    <p className="text-info price-Product">{item.price} đ</p>
                    <p className="text-info warehouseCount-Product">Kho: 27</p>
                  </div>
                  <div className="btn-action">
                    <div className="btn-action-block">
                      <InputNumber
                        min={1}
                        max={10}
                        defaultValue={item.quantity}
                        onChange={onChange}
                        style={{
                          width: 50,
                          height: 36,
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      />
                    </div>
                    <div
                      className="btn-bin"
                      onClick={(e) => handDelete(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="35"
                        height="35"
                        style={{ marginLeft: 10, paddingTop: 5 }}
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                          fill="rgba(149,164,166,1)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="btn-checkout">
          <div className="sumMoney">
            <h2>
              <strong>Tạm tính : </strong>
              <span style={{ color: "red" }}>5000000đ</span>
            </h2>
          </div>
          <div className="btn-action-block">
            <Button type="primary" className="btn-pay">
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
