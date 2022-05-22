import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import "../../../Style/checkout.css";
import Header from "../Header";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  DollarCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const { Step } = Steps;

const Cart = () => {
  const [state, setState] = useState("process");
  return (
    <>
      <Header />
      <Steps>
        <Step status={state} title="Giỏ hàng" icon={<UserOutlined />} />
        <Step status={state} title="Thông tin" icon={<SolutionOutlined />} />
        <Step
          status={state}
          title="Thanh toán"
          icon={<DollarCircleOutlined />}
        />
        <Step
          status={state}
          title="Đặt hàng thành công"
          icon={<SmileOutlined />}
        />
      </Steps>
      <div className="steps-content" style={{ margin: "0, 10px" }}>
        Content
      </div>
      <div className="steps-action">
        <div className="btn-action">
          <Button type="primary" onClick={() => next()}>
            Tiếp theo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
