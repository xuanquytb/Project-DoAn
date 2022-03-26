import React from "react";
import "antd/dist/antd.css";
import "../../Style/base.css";
import "../../Style/style-Box.css";
import "../../Style/icons.css";
import "../../Style/uikit.css";
import { SearchOutlined } from "@ant-design/icons";

const Content = () => {
  return (
    <>
      <div className="main_content">
        <div id="main_header">
          <header>
            <div className="header-innr">
              <div
                className="header-btn-traiger is-hidden"
                uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible"
              ></div>
              <div id="logo">
                <a href="feeds.html">
                  <img src="" alt="" />
                </a>
                <a href="feeds.html">
                  <img src="" className="logo-inverse" alt="" />
                </a>
              </div>
              <div className="head_search">
                <form>
                  <div className="head_search_cont">
                    <SearchOutlined
                      style={{ color: "#08c", marginLeft: "20px" }}
                    />
                    <input
                      value=""
                      type="text"
                      className="form-control"
                      placeholder="Nội dung tìm kiếm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Content;
