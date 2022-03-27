import React from "react";
import "antd/dist/antd.css";
import "../../Style/Category.css";
import "../../Style/base.css";
import { Menu} from "antd";
import {
  AlignCenterOutlined,
  LaptopOutlined,
  EditOutlined,
  MessageOutlined,
  UserOutlined
} from "@ant-design/icons";
const { SubMenu } = Menu;

const Category = () => {
  return (
    <>
      <Menu
        style={{ width: 230 }}
        mode="vertical"
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="Quản lí người dùng">
          <Menu.Item key="1">Quản lý bài đăng</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AlignCenterOutlined />} title="Quản lý đơn hàng">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<LaptopOutlined />} title="Quản lý sản phẩm">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<EditOutlined />} title="Quản lý bài đăng">
          <Menu.Item key="13">Option 9</Menu.Item>
          <Menu.Item key="14">Option 10</Menu.Item>
          <Menu.Item key="15">Option 11</Menu.Item>
          <Menu.Item key="16">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" icon={<MessageOutlined />} title="Quản lý bình luận">
          <Menu.Item key="17">Option 9</Menu.Item>
          <Menu.Item key="18">Option 10</Menu.Item>
          <Menu.Item key="19">Option 11</Menu.Item>
          <Menu.Item key="20">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default Category;