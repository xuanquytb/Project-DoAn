import React from "react";
import "antd/dist/antd.css";
import "../../Style/style.css";
import "../../Style/base.css";
import "../../Style/style-Content.css";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Input } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;
import User from "../Admin/User/UserContent.jsx";
import Product from "../Admin/Product/Product";
import Category from "../Admin/Category/Category";

const DashBoard = () => {
  const location = useLocation();
  const menuitem = [
    {
      key: 0,
      title: "Bảng điều khiển",
      link: "/dashboard",
    },
    {
      key: 1,
      title: "Quản lí người dùng",
      icon: "<UserOutlined />",
      link: "/user",
    },
    {
      key: 2,
      title: "Quản lý đơn hàng",
      icon: "<AlignCenterOutlined />",
      link: "/order",
    },
    {
      key: 3,
      title: "Quản lý ngành hàng",
      icon: "<LaptopOutlined />",
      link: "/category",
    },
    {
      key: 4,
      title: "Quản lý sản phẩm",
      icon: "<LaptopOutlined />",
      link: "/product",
    },
    {
      key: 5,
      title: "Quản lý bài đăng",
      icon: "<EditOutlined />",
      link: "/new",
    },
    {
      key: 6,
      title: "Quản lý bình luận",
      icon: "<MessageOutlined />",
      link: "/comment",
    },
  ];
  return (
    <div>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          
          <Sider
          // collapsible
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
          >
            <img src="../../../../image/header/tiki__logo.png" alt="" style={{height:"60px" , margin:"24px"}}/>
            <Menu theme="light" defaultSelectedKeys={["0"]} mode="inline">
              {menuitem.map((item) => (
                <Menu.Item key={item.key}>
                  <span>{item.title}</span>
                  <Link to={item.link} />
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
              {/* <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer" }}
                onClick={this.toggle}
              /> */}
            </Header>
            <div className="head_search">
              <form>
                <div className="head_search_cont">
                  <Input
                    className="form-control"
                    placeholder="Nội dung tìm kiếm"
                  />

                  {/* <SearchOutlined
                    style={{
                      color: "#08c",
                      marginLeft: "20px",
                    }}
                  /> */}
                </div>
              </form>
            </div>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
              }}
            >
              <Route exact path= "/user" component={User}/>
              <Route exact path= "/product" component={Product}/>
              <Route exact path= "/category" component={Category}/>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              VMU ©2022 Created by XUÂN QUÝ
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default DashBoard;
