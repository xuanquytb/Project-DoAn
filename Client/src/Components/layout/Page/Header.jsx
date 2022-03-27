import React from "react";

const Header = () => {
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
                src="../../../../image/header/tiki__logo.png"
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
              src="../../../../image/header/tiki__logo.png"
              alt=""
              width="60"
              height="40"
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
              <div className="search__content">
                <div className="search__historys">
                  <div className="search__history-head">
                    <a href="" className="search__history-heading">
                      Tiki 14.12 - Xả Kho Cực Lớn
                    </a>
                    <a href="">
                      <img
                        src="https://salt.tikicdn.com/cache/140x28/ts/banner/6a/54/58/77afd77b7362423df2b16ac4785bd132.png.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="search__history-body">
                    <ul className="search__history-lists">
                      <li className="search__history-item">
                        <a href="" className="search__history-link">
                          <img
                            src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                            alt=""
                            className="search__history-icon"
                          />
                          tai nghe sony
                          <img
                            src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png"
                            alt=""
                            className="search__remove-icon"
                          />
                        </a>
                      </li>
                      <li className="search__history-item">
                        <a href="" className="search__history-link">
                          <img
                            src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                            alt=""
                            className="search__history-icon"
                          />
                          iphone 13 pro max
                          <img
                            src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png"
                            alt=""
                            className="search__remove-icon"
                          />
                        </a>
                      </li>
                      <li className="search__history-item">
                        <a href="" className="search__history-link">
                          <img
                            src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png"
                            alt=""
                            className="search__history-icon"
                          />
                          macbook pro m1
                          <img
                            src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png"
                            alt=""
                            className="search__remove-icon"
                          />
                        </a>
                      </li>
                      <div className="search__history-footer">
                        <a href="" className="search__history-more">
                          Xem thêm
                        </a>
                        <i className="ti-angle-down search__history-more-icon"></i>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="search__popular">
                  <div className="search__popular-head">
                    <img src="../../../../image/header/search.png" alt="" />
                    <h3>Tìm Kiếm Phổ Biến</h3>
                  </div>
                  <div className="search__popular-body">
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/85/2a/f3/7bbaa65d051ec909aeadffcfc7e2bb30.jpg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Khẩu trang n95</span>
                      </div>
                    </a>
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/81/1d/78/61624a148bc3a6eba57fdc1289c5fc3b.jpg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Chân váy</span>
                      </div>
                    </a>
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/d3/f3/38/f8f149120525b295a3aa46386cf37d96.jpg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Áo nam</span>
                      </div>
                    </a>
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/a1/5e/46/fccbfa71363639cda153d80f34d663fb.jpg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Sữa ensua</span>
                      </div>
                    </a>
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/8f/0a/6b/ce51beae21b5899e803e6553d80e0fa1.jpg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Giày</span>
                      </div>
                    </a>
                    <a className="search__popular-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/83/a6/73/5344c227762b04aaf667309e5587e6de.jpeg"
                        alt=""
                        width="38px"
                        height="38px"
                      />
                      <div className="search__popular-item-info">
                        <span>Thịt heo</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="search__category">
                  <div className="search__category-head">
                    <h3>Danh Mục Nổi Bật</h3>
                  </div>
                  <div className="search__category-body">
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/34/aa/38/f0321de429fd271bc5204d6f31af0603.jpg"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Tai Nghe Nhét Tai Có Dây
                      </span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/cache/280x280/ts/product/70/a5/17/4499a378a821f79703d9e28d7a1fa188.jpg"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">Áo thun nam</span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Đồ Chơi - Mẹ & Bé
                      </span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">TIKINGON</span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Điện Thoại Máy Tính Bảng
                      </span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Làm Đẹp - Sức Khỏe
                      </span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Điện Gia Dụng
                      </span>
                    </a>
                    <a className="search__category-item">
                      <img
                        src="https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png"
                        alt=""
                        width="65px"
                        height="65px"
                      />
                      <span className="search__category-info">
                        Thời Trang Nữ
                      </span>
                    </a>
                  </div>
                </div>
              </div>
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
              <span className="header__user-img">
                <img src="../../../../image/header/user__logo.png" alt="" />
              </span>
              <div className="header__user-login">
                <span className="user__login">
                  <a
                    href="http://localhost:3000/login"
                    style={{ color: "#fff" }}
                  >
                    Đăng nhập / Đăng ký
                  </a>
                </span>
                <span className="user__account">
                  <span className="user__name">Tài khoản</span>
                  <i className="fas fa-sort-down user__account-icon"></i>
                </span>
              </div>
            </div>
            <div className="header__category">
              <div className="header__category-icon">
                <img src="../../../../image/header/category.png" alt="" />
                <div className="category__quantily">
                  <span>0</span>
                </div>
              </div>
              <div className="header__category-info">
                <span>Giỏ hàng</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header__mobile-search">
          <input
            type="text"
            className="header__mobile-input"
            placeholder="Bạn tìm gì hôm nay?"
          />
          <i className="fas fa-search search__logo-mobile"></i>
        </div>
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
              tất cả thịt rau củ
            </a>
            <a href="#" className="header__keyword-link">
              thịt
            </a>
            <a href="#" className="header__keyword-link">
              hàng đông lạnh
            </a>
            <a href="#" className="header__keyword-link">
              trái cây
            </a>
            <a href="#" className="header__keyword-link">
              hải sản
            </a>
            <a href="#" className="header__keyword-link">
              gạo
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
