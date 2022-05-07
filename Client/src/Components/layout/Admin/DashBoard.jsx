import React, { useContext, useRef } from "react";
import "antd/dist/antd.css";
import "../../Style/style.css";
import "../../Style/base.css";
import "../../Style/style-Content.css";
import { Layout, Menu, Input } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AuthDashboard from "../../view/AuthDashboard";
import Category from "../Admin/Category/Category";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const DashBoard = () => {
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
        {
            key: 2,
            title: "Quản lí nhân viên",
            icon: "<UserOutlined />",
            link: "/employee",
        },
        {
            key: 3,
            title: "Quản lí khách hàng",
            icon: "<UserOutlined />",
            link: "/user",
        },
        {
            key: 4,
            title: "Quản lý đơn hàng",
            icon: "<AlignCenterOutlined />",
            link: "/order",
        },
        {
            key: 5,
            title: "Quản lý ngành hàng",
            icon: "<LaptopOutlined />",
            link: "/category",
        },
        {
            key: 6,
            title: "Quản lý sản phẩm",
            icon: "<LaptopOutlined />",
            link: "/product",
        },
        {
            key: 7,
            title: "Quản lý bài đăng",
            icon: "<EditOutlined />",
            link: "/new",
        },
        {
            key: 8,
            title: "Quản lý bình luận",
            icon: "<MessageOutlined />",
            link: "/comment",
        },
    ];

    return (
        <div>
            <Router>
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider>
                        <img
                            src='../../../../image/header/tiki__logo.png'
                            alt=''
                            style={{ height: "60px", margin: "24px" }}
                        />
                        <Menu
                            theme='light'
                            defaultSelectedKeys={["0"]}
                            mode='inline'
                        >
                            {menuitem.map((item) => (
                                <Menu.Item key={item.link}>
                                    <span>{item.title}</span>
                                    <Link to={item.link} />
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header
                            style={{
                                background: "#fff",
                                padding: 0,
                                paddingLeft: 16,
                            }}
                        ></Header>
                        <div className='head_search'>
                            <form>
                                <div className='head_search_cont'>
                                    <Input
                                        className='form-control'
                                        placeholder='Nội dung tìm kiếm'
                                    />
                                </div>
                            </form>
                        </div>
                        <Content
                            style={{
                                margin: "24px 16px",
                                padding: 0,
                                background: "#fff",
                                minHeight: 280,
                            }}
                        >
                            <Route
                                path='/user'
                                render={(props) => (
                                    <AuthDashboard
                                        {...props}
                                        authRoute='customer'
                                    />
                                )}
                            />
                            <Route
                                path='/employee'
                                render={(props) => (
                                    <AuthDashboard
                                        {...props}
                                        authRoute='employee'
                                    />
                                )}
                            />
                            <Route
                                path='/admin'
                                render={(props) => (
                                    <AuthDashboard
                                        {...props}
                                        authRoute='admin'
                                    />
                                )}
                            />
                            <Route
                                path='/product'
                                render={(props) => (
                                    <AuthDashboard
                                        {...props}
                                        authRoute='product'
                                    />
                                )}
                            />
                            <Route path='/category' component={Category} />
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
