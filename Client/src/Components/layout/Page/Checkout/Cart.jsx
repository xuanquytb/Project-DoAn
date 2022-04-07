import React from "react";
import { Button, Alert, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "../../../Style/checkout.css";
import Header from "../Header";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="app-cart">
        <div className="modal-body modal-info">
          <h2>Thông Tin Người Nhận</h2>
          <ul className="ulpr">
            <li className="lipr">
              {/* <span class="spanpr">1</span> */}
              <strong>
                Họ và tên:
                <br />
                <input className="input-value"
                  type="text"
                  placeholder="Vui lòng nhập đầy đủ họ tên của bạn:"
                />
              </strong>{" "}
            </li>

            <li className="lipr">
              {/* <span class="spanpr">2</span> */}
              <strong>
                Phone:
                <br />
                <input className="input-value" type="text" placeholder="Vui lòng nhập số điện thoại:" />
              </strong>{" "}
            </li>

            <li className="lipr">
              {/* <span class="spanpr">3</span> */}
              <strong>
                Email:
                <br />
                <input className="input-value" type="text" placeholder="Vui lòng nhập email:" />
              </strong>{" "}
            </li>
            <li className="lipr">
              {/* <span class="spanpr">4</span> */}
              <strong>
                Địa chỉ:
                <br />
                <input className="input-value"
                  type="text"
                  placeholder="Vui lòng nhập đầy đủ địa chỉ của bạn:"
                />
              </strong>{" "}
            </li>
          </ul>
        </div>
        <div className="modal-body">
          <div className="cart-row">
            <span className="cart-item cart-header cart-column">Sản Phẩm</span>
            <span className="cart-price cart-header cart-column">Giá</span>
            <span className="cart-quantity cart-header cart-column">Số Lượng</span>
          </div>
          <div className="cart-items">
            <div className="cart-row">
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src="https://bizweb.dktcdn.net/thumb/large/100/228/168/products/sualai.jpg?v=1573720306000"
                  width="100"
                  height="100"
                />
                <span className="cart-item-title">Mũi Hàn 500</span>
              </div>
              <span className="cart-price cart-column">25000đ</span>
              <div className="cart-quantity cart-column">
                <input className="cart-quantity-input" type="number" value="1"/>
                <button className="btn btn-danger" type="button" style={{Padding: "4px",width: "61px"}}>
                  Xóa
                </button>
              </div>
            </div>
            <div className="cart-row">
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src="data:image/jpeg;base64,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"
                  width="100"
                  height="100"
                />
                <span className="cart-item-title">
                  Máy Bơm Chìm Hộ Gia Đình QDX 1500W 220VAC 40L/1min H=8m
                </span>
              </div>
              <span className="cart-price cart-column">1599000đ</span>
              <div className="cart-quantity cart-column">
                <input  className="cart-quantity-input" type="number" value="2"/>
                <button className="btn btn-danger" type="button" style={{Padding: "4px",width: "61px"}}>
                  Xóa
                </button>
              </div>
            </div>
            <div className="cart-total">
              <strong className="cart-total-title">Tổng Cộng:</strong>
              <span className="cart-total-price">3223000VNĐ</span>
              {/* <Space></Space> */}
              <br />
              <Button style={{marginTop: "10px" }}>
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
