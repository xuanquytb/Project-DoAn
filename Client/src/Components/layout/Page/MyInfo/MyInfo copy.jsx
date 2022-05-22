import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Store/Context/AuthContext";
import { Image } from "antd";
import { Upload } from "antd";
import moment from "moment";
import { Form, Button, Col, Row, Input, Select, DatePicker } from "antd";
import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthInfoCustomer from "../../../view/AuthInfoCustomer";

const { Option, OptGroup } = Select;
import "./style.css";

const MyInfo = () => {
  const { authState } = useContext(AuthContext);

  const menuitem = [
    {
      key: 0,
      title: "Bảng điều khiển",
      link: "/dashboard",
    },
    {
      key: 1,
      title: "Quản trị viên",
      icon: "<UserOutlined />",
      link: "/admin",
    },
  ];

  const onFinish = (values) => {
    const userUpdate = {
      id: values.id,
      fullname: values.fullname,
      email: values.email,
      phone: values.phone,
      address: values.address,
      sex: values.sex,
      dateOfBirth: values.ngaysinh.format("YYYY/MM/DD"),
    };
    onUpdate(userUpdate);
  };

  return (
    <div className="body-myinfo">
      <div id="my-info" className="grid wide" style={{}}>
        <div className="info__header contain">
          <div className="header__left">
            <Image
              className="avatar"
              src={`http://localhost:8080/image/${authState.user[0].nameAvata}`}
            />
            <div className="left">
              <div className="name">
                Họ và tên: {authState.user[0].fullname}
              </div>
              <div className="username">
                Tên đăng nhập: {authState.user[0].username}
              </div>
            </div>
            <div className="right">
              <div className="email">Email: {authState.user[0].email}</div>
              <div className="phone">Phone:{authState.user[0].phone}</div>
              <div className="phone">
                Ngày sinh:{}
                Ngày sinh:{authState.user[0].dateOfBirth.split("T")[0]}
              </div>
            </div>
          </div>
        </div>
        <div className="contain-body">
          <div className="col l-2 m-12 s-12">
            <ul id="nav" className="contain">
              <Link to={"/info"} class="nav-item">
                <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/dxjqoygy.json"
                  trigger="morph"
                  // style="width:50px;height:50px"
                ></lord-icon>
                <div className="title">Thông tin cá nhân</div>
              </Link>
              <Link to="/" className="nav-item">
                <script src="https://cdn.lordicon.com/lusqsztk.js"></script>
                <lord-icon
                  src="https://cdn.lordicon.com/wxnxiano.json"
                  trigger="morph"
                  // style="width:50px;height:50px"
                ></lord-icon>
                <div className="title">Đơn hàng</div>
              </Link>
            </ul>
          </div>
          <div className="body__Container contain">
            <Router>
              <Content>
                <Route
                  path="/info"
                  render={(props) => (
                    <AuthInfoCustomer {...props} authRoute="info" />
                  )}
                />
              </Content>
            </Router>
          </div>
        </div>
      </div>

      <div className="shape circle"></div>
      <div className="shape square"></div>
      <div className="shape star"></div>
      <div className="shape heart"></div>
    </div>
  );
};

export default MyInfo;
