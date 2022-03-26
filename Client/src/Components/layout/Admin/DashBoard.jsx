import React from "react";
import "antd/dist/antd.css";
import "../../Style/style.css"
import "../../Style/base.css";
import { Layout, Menu, Button } from "antd";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

import SlidePage from './Sidel'

import ContentPage from './Content'


const DashBoard = () => {
  return <div>
    <Layout>
        <Header>Header</Header>
        <Layout>
        <Sider><SlidePage/></Sider>
          <Content>
            <ContentPage/>
          </Content>
          
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    
  </div>;
};

export default DashBoard;
