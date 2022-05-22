import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../../../Store/Context/AuthContext";
import { CardContext } from "../../../Store/Context/CardContext";

import "../Page/style/Header.css";

const Header = () => {
  const { authState, logout } = useContext(AuthContext);
  const [countProduct, setCountProduct] = useState(0);
  // const [card, setCard] = useState([]);

  const {
    cardState: { cards },
    getCard,
  } = useContext(CardContext);
  useEffect(() => {
    getCard();
    // setCountProduct(cards[0].length);
  }, []);

  console.log(cards);

  const history = useHistory();
  const logoutHan = async (e) => {
    e.preventDefault();

    try {
      const logoutData = await logout(authState.isAuthenticated);
      if (logoutData === true) {
        history.push("/login");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handClickCheckOut = (e) => {
    history.push("/checkout");
  };
  const handClickReturnHome = (e) => {
    history.push("/");
  };

  return (
    <>
      <header className="header">
        <div className="header__head">
          <div className="header__mobile-logo">
            <div>
              <img
                src="../../../../image/header/tiki__freeship.png"
                alt=""
                className="mobile__logo-fs"
              />
            </div>
            <div>
              {" "}
              <img
                src="../../../../image/header/TN__logo.png"
                alt=""
                className="mobile__logo-tiki"
              />{" "}
            </div>
            <div className="header__icon">
              <i className="far fa-bell header__icon-bell"></i>
              <i className="fas fa-shopping-cart header__icon-cart"></i>
            </div>
          </div>
          <div className="header__logo">
            <img
              src="../../../../image/header/TN__logo.png"
              alt=""
              width="60"
              height="40"
              onClick={handClickReturnHome}
            />
          </div>
          <div className="header__search">
            <div className="form__search">
              <input
                type="text"
                id="search__input"
                className="header__search-input"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
              />
            </div>
            <div className="header__seacrh-block">
              <i className="fas fa-search header__search-icon"></i>
              <a href="" className="header__search-btn">
                Tìm Kiếm
              </a>
            </div>
          </div>
          <div className="header__user">
            <div className="header__user-info">
              <div className="header__category">
                <div className="header__category-icon">
                  <img src="../../../../image/header/category.png" alt="" />
                  <div className="category__quantily">
                    <span>0</span>
                  </div>
                </div>
                <div className="header__category-info"></div>
                <div
                  className="header__category-detail-show"
                  onClick={handClickCheckOut}
                >
                  <div className="Header-cart-show">Sản phẩm mới thêm</div>
                  <div className="Body-cart-show">
                    {countProduct !== 0 ? (
                      <ul class="header__cart-list-item">
                        <li class="header__cart-item">
                          <img
                            src="https://img.abaha.vn/photos/resized/320x/73-1574413855-myohui.png"
                            alt=""
                            class="header__cart-img"
                          />
                          <div class="header__cart-item-info">
                            <div class="header__cart-item-head">
                              <h5 class="header__cart-item-name">
                                Bộ kem đặc trị vùng mắt Bộ kem đặc trị vùng mắt
                                Bộ kem đặc trị vùng mắt Bộ kem đặc trị vùng mắt
                                Bộ kem đặc trị vùng mắt
                              </h5>
                              <div class="header__cart-item-price-wrap">
                                <span class="header__cart-item-price">
                                  2.000.000đ
                                </span>
                                <span class="header__cart-item-multiply">
                                  x
                                </span>
                                <span class="header__cart-item-qnt">2</span>
                              </div>
                            </div>
                            <div class="header__cart-item-body">
                              <span class="header__cart-item-description">
                                Phân loại hàng: Bạc
                              </span>
                              <span class="header__cart-item-remove">Xóa</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <span>
                        <img
                          className="image-cart-empty"
                          style={{ height: "210px" }}
                          src="../../../../image/header/cart_4.png"
                          alt=""
                        />
                        <div
                          style={{
                            margin: "0px 123px",
                            color: "#108ee9",
                            fontSize: "17px",
                          }}
                        >
                          Giỏ hàng còn trống
                        </div>
                      </span>
                    )}
                  </div>
                  <div className="Footer-cart-show">
                    <div className="btn-checkOut">
                      <Button onClick={handClickCheckOut}>Xem giỏ hàng</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infor-user">
                <div className="header__user-login">
                  {/* --------------------------------------------- */}
                  {authState.isAuthenticated === true ? (
                    <span className="user__account">
                      <span className="user__name">
                        {authState.user[0].fullname}
                      </span>
                      <i className="fas fa-sort-down user__account-icon"></i>
                    </span>
                  ) : (
                    <span className="user__login">
                      <a
                        href="http://localhost:3000/login"
                        style={{ color: "#fff" }}
                      >
                        Đăng nhập / Đăng ký
                      </a>
                    </span>
                  )}
                </div>
                <span className="header__user-img">
                  <img src="../../../../image/header/user__logo.png" alt="" />
                </span>
                <div className="Header__mode-list">
                  <ul>
                    <li href="" className="Header__mode-item-link">
                      <Button type="text" block>
                        Đơn hàng của tôi
                      </Button>
                    </li>
                    <li href="" className="Header__mode-item-link">
                      <Button
                        type="text"
                        block
                        onClick={() => history.push("/info")}
                      >
                        Tài khoản của tôi
                      </Button>
                    </li>
                    <li href="" className="Header__mode-item-link">
                      <Button type="text" block>
                        Thông báo
                      </Button>
                    </li>
                    <li href="" className="Header__mode-item-link">
                      <Button type="text" block onClick={logoutHan}>
                        Đăng xuất
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='header__mobile-search'>
                    <input
                        type='text'
                        className='header__mobile-input'
                        placeholder='Bạn tìm gì hôm nay?'
                    />
                    <i className='fas fa-search search__logo-mobile'></i>
                </div> */}
        <div className="header__tail">
          <div className="header__logo-fs">
            <img
              src="../../../../image/header/tiki__freeship.png"
              alt=""
              width="83px"
              height="12px"
            />
          </div>
          <div className="header__keyword">
            <a href="#" className="header__keyword-link">
              tất cả đồ điện tử
            </a>
            <a href="#" className="header__keyword-link">
              gia dụng nhà bếp
            </a>
            <a href="#" className="header__keyword-link">
              máy say sinh tố
            </a>
            <a href="#" className="header__keyword-link">
              bếp điện
            </a>
            <a href="#" className="header__keyword-link">
              ấm điện
            </a>
            <a href="#" className="header__keyword-link">
              đèn học
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
