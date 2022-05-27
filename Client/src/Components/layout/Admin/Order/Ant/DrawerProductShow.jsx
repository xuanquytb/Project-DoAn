import React from "react";
import { Drawer, Descriptions, Badge, Image } from "antd";

import HTMLReactParser from "html-react-parser";
import Item from "antd/lib/list/Item";

const ShowDrawer = ({ input, visible, onClose }) => {
  return (
    <Drawer
      destroyOnClose
      title={input.fullname}
      visible={visible}
      width={600}
      onClose={onClose}
    >
      <Descriptions title="Thông tin sản phẩm" layout="vertical" bordered>
        <Descriptions.Item label="Trạng thái" span={5}>
          <Badge status="processing" text={input.state} />
        </Descriptions.Item>
        <Descriptions.Item label="Tên khách hàng">
          {input.fullname}
        </Descriptions.Item>

        <Descriptions.Item label="Số điện thoại" span={2}>
          {input.phone}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Email">
          {HTMLReactParser(`${input.email}`)}
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="" layout="vertical" bordered>
        <Descriptions.Item label="Địa chỉ">
          {HTMLReactParser(`${input.address}`)}
        </Descriptions.Item>
      </Descriptions>
      <div style={{ padding: 10 }}></div>
    </Drawer>
  );
};

export default ShowDrawer;
