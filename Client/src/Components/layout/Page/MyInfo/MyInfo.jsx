import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Store/Context/AuthContext";
import { Image } from "antd";
import "./style.css";

const MyInfo = () => {
  const { authState } = useContext(AuthContext);
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
          <div className="body__Container"></div>
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
