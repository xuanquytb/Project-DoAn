import React, { useState, useContext, useEffect } from "react";
import "../../../Style/payment.css";
import Header from "../Header";
// import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../../Store/Context/CardContext";
import axios from "axios";
import { Form, Button, Row, Input, Select, Radio, Space } from "antd";
import { useHistory } from "react-router-dom";

const { Option, OptGroup } = Select;

const Payment = () => {
  const history = useHistory();
  const {
    cardState: { cards, sumMoney },
    getCard,
    getSumMoneyCard,
  } = useContext(CardContext);

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

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

  const onFinish = (values) => {
    // const productCreate = {
    //     nameProduct: values.nameProduct,
    //     description: state.value,
    //     warranty: warranty,
    //     quantity: quantity,
    //     price: values.price,
    //     promotional: values.discount,
    //     status: values.state,
    //     image: values.nameImage.file.name,
    //     idCategory: category,
    //     idUnit: unit,
    //     idManufacturer: brand,
    //     idOrigin: origin,
    // };
    // handleRegister(productCreate);
  };

  return (
    <>
      <Header />
      <div className="main-Payment">
        <div className="box-left">
          <div className="flex-left">
            <h2 className="title">Thông tin thanh toán</h2>
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              // initialValues={{
              //   ["quantityUniti"]: "1",
              //   ["unitSL"]: "1",
              // }}
            >
              <Row gutter={16}>
                <Form.Item
                  label="Họ và tên"
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    style={{ width: 505 }}
                    placeholder="Họ và tên"
                    allowClear
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    style={{ width: 505 }}
                    placeholder="Số điện thoại"
                    allowClear
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    style={{ width: 505 }}
                    placeholder="Email"
                    allowClear
                  />
                </Form.Item>
              </Row>
              <Row gutter={16}>
                <Form.Item
                  label="Địa chỉ nhận hàng"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Trường này không được để trống",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    style={{ width: 505 }}
                    placeholder="Địa chỉ"
                    allowClear
                  />
                </Form.Item>
              </Row>
            </Form>
          </div>
          <div className="flex-right">
            <h2 className="title">Vận chuyển</h2>
            <div
              className="delivery"
              style={{
                width: 388,
                height: 58,
                border: "1px solid gray",
                borderRadius: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="img-tic-xanh"
                  style={{ width: 20, height: 20, marginRight: 15 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: "green" }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <strong style={{ marginLeft: 20, marginRight: 72 }}>
                  Giao hàng tận nơi
                </strong>
                <div className="price-delivery" style={{ color: "red" }}>
                  200000 đ
                </div>
              </div>
            </div>
            <h2 className="title">Phương thức thanh toán</h2>
            <div className="choice-payment">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio
                    style={{
                      height: 58,
                      width: 388,
                      border: "1px solid gray",
                      borderRadius: 15,
                      display: "flex",
                      paddingLeft: 20,
                      alignItems: "center",
                    }}
                    value={1}
                  >
                    Thanh toán khi nhân hàng
                  </Radio>
                  <Radio
                    style={{
                      height: 58,
                      width: 388,
                      border: "1px solid gray",
                      borderRadius: 15,
                      display: "flex",
                      paddingLeft: 20,
                      alignItems: "center",
                    }}
                    value={2}
                  >
                    Chuyển khoản
                  </Radio>
                  <Radio
                    style={{
                      height: 58,
                      width: 388,
                      border: "1px solid gray",
                      borderRadius: 15,
                      display: "flex",
                      paddingLeft: 20,
                      alignItems: "center",
                    }}
                    value={3}
                  >
                    Thanh toán qua Momo
                  </Radio>
                  <Radio
                    style={{
                      height: 58,
                      width: 388,
                      border: "1px solid gray",
                      borderRadius: 15,
                      display: "flex",
                      paddingLeft: 20,
                      alignItems: "center",
                    }}
                    value={4}
                  >
                    PayPal
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
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
                        src={`http://localhost:8080/image/procuct/${item.image}`}
                        alt=""
                        style={{ width: 60, height: 60, borderRadius: 10 }}
                      />
                    </div>
                    <div className="infomation">
                      <div className="infomation-left">
                        <h3>{item.nameProduct}</h3>
                        <div style={{ color: "gray", marginTop: 8 }}>
                          {item.quantity} Sản phẩm
                        </div>
                      </div>
                      <div
                        className="infomation-right"
                        style={{ position: "relative" }}
                      >
                        <h3> {item.quantity * item.price} đ</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="coupon" style={{ display: "flex" }}>
            <div>
              <Input
                size="large"
                style={{ marginLeft: 20, marginTop: 5, width: 235 }}
                placeholder="Nhập mã giảm giá"
                allowClear
              />
            </div>
            <div>
              <Button
                type="primary"
                style={{ margin: 5, height: 35, width: 100 }}
              >
                Áp dụng
              </Button>
            </div>
          </div>

          <div className="detail-Order">
            <div className="sumMoney">
              <h2
                className="title-money"
                style={{ margin: 0, position: "relative" }}
              >
                <strong>Tạm tính : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {sumMoney !== null ? sumMoney : "0"} đ
                </span>
              </h2>
              <h2 style={{ margin: 0, position: "relative" }}>
                <strong>Phí vận chuyển : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  35000 đ
                </span>
              </h2>
              <h2 style={{ margin: 0, position: "relative" }}>
                <strong>Mã giảm giá : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  35000 đ
                </span>
              </h2>
              <h2 style={{ margin: 0, position: "relative" }}>
                <strong>Tổng thanh toán : </strong>
                <span
                  style={{
                    color: "red",
                    marginLeft: 90,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  {35000 + sumMoney - 35000} đ
                </span>
              </h2>
            </div>
            <div className="btn-action-block">
              <Button
                style={{ marginBottom: 20 }}
                type="primary"
                className="btn-buy"
                onClick={(e) => history.push("/success")}
              >
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
