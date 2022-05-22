import React, { useContext } from "react";
import { AuthContext } from "../../../../Store/Context/AuthContext";
import { Image } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthInfoCustomer from "../../../view/AuthInfoCustomer";
import Header from "../../../layout/Page/Header";

import "./style.css";

const MyInfo = () => {
  const { authState } = useContext(AuthContext);

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
    <>
      <Header />
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
                <div className="phone">Phone: {authState.user[0].phone}</div>
                <div className="phone">
                  Ngày sinh: {authState.user[0].dateOfBirth.split("T")[0]}
                </div>
              </div>
            </div>
          </div>
          <Router>
            <Layout
              className="contain-body"
              style={{ background: "transparent" }}
            >
              <ul id="nav" className="contain">
                <Link to={"/info"} class="nav-item">
                  <div className="title">Thông tin cá nhân</div>
                </Link>
                <Link to="/info/order" className="nav-item">
                  <div className="title">Đơn hàng</div>
                </Link>
              </ul>
              <Layout
                style={{
                  maxWidth: 1000,
                  borderRadius: 24,
                  marginLeft: 15,
                  minHeight: 280,
                  background: "transparent",
                }}
              >
                <Content
                  style={{
                    padding: 0,
                    background: "#b6ccee",
                    minHeight: 280,
                    borderRadius: 24,
                  }}
                >
                  <Route
                    exact
                    path="/info"
                    render={(props) => (
                      <AuthInfoCustomer {...props} authRoute="info" />
                    )}
                  />
                  <Route
                    exact
                    path="/info/order"
                    render={(props) => (
                      <AuthInfoCustomer {...props} authRoute="order" />
                    )}
                  />
                </Content>
              </Layout>
            </Layout>
          </Router>
        </div>

        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape star"></div>
        <div className="shape heart"></div>
      </div>
    </>
  );
};

export default MyInfo;
