import React from "react";
import "../Style/Register.css";
const Register = () => {
  const username = "";
  const password = "";
  return (
    <div className="Form-Register">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="Container-Register">
        <div className="box">
          <div className="box-squade" delay="--i:1;"></div>
          <div className="box-squade" delay="--i:2;"></div>
          <div className="box-squade" delay="--i:3;"></div>
          <div className="box-squade" delay="--i:4;"></div>
          <div className="form-Register">
            <h2>Đăng ký</h2>
            <form action="" className="form-input">
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Họ Và Tên"
                />
              </div>
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Email"
                />
              </div>
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Phone"
                />
              </div>
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Username"
                />
              </div>
              <div className="box-input">
                <input
                  type="text"
                  className="input-value"
                  placeholder="Password"
                />
              </div>
              <input type="checkbox" id="register-checkbox" className="btn-checkbox" />
                <label className="more" for="register-checkbox">
                   Đồng ý với điều khoản của chúng tôi?
                </label>
              <div className="box-input">

                <button className="btn-Register">Đăng ký</button>
              </div>
              <div className="box-input">
                
                <p className="more">
                  Bạn đã có tài khoản?
                  <a href="https://" className="link">
                    Sign in?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
