import React, { useEffect, useState, useContext } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor/style.css";
// import { CategoryContext } from "../../../../../Store/Context/CategoryContext";
import axios from "axios";

import { Drawer, Tabs, Form, Col, Row, Input, Select, Button } from "antd";
const { TextArea } = Input;
const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ModalUpdateNews = ({ input, visible, onClose, onUpdate }) => {
  console.log(input);
  const [state, setState] = useState({ value: input.content });
  const handleChange = (value) => {
    setState({ value });
  };

  useEffect(() => {
    setState({ value: input.content });
  }, [input]);

  // const {
  //   brandState: { brands },
  //   getBrand,
  // } = useContext(BrandContext);
  // useEffect(() => getBrand(), []);

  const onFinish = (values) => {
    const productUpdate = {
      id: input.id,
      nameProduct: values.nameProduct,
      description: state.value,
      warranty: values.warranty,
      quantity: values.quantity,
      promotional: values.discount,
      price: values.price,
      status: values.state,
      nameCategory: values.category,
      nameBrand: values.brand,
      nameOrigin: values.origin,
    };
    onUpdate(productUpdate);
  };
  return (
    <>
      <Drawer
        destroyOnClose
        title={input.fullname}
        visible={visible}
        width={1100}
        onClose={onClose}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          initialValues={{
            ["nameNews"]: input.nameNews,
            ["brief"]: input.brief,
            ["state"]: input.state,
          }}
        >
          <Row gutter={16}>
            <Col span={9}></Col>
            <Col span={9}></Col>
            <Col span={9}></Col>
          </Row>
          <Row gutter={16}>
            <Col span={23}>
              <Form.Item
                label="Chủ đề tin tức"
                name="nameNews"
                rules={[
                  {
                    required: true,
                    message: "Chủ đề tin tức không được để trống",
                  },
                ]}
              >
                <Input placeholder="Chủ đề tin tức" allowClear />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="categoryNews"
                label="Chọn danh mục tin tức"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa chọn danh mục tin tức",
                  },
                ]}
              >
                {/* <Select onChange={(e) => setCategory(e)}>
                  {categorys.map((item, index) => {
                    return (
                      <Select.Option key={item.id} value={item.id}>
                        {item.nameCategory}
                      </Select.Option>
                    );
                  })}
                </Select> */}
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={23}>
              <Form.Item
                name="brief"
                label="Tóm tắt"
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa chọn danh mục tin tức",
                  },
                ]}
              >
                <TextArea rows={6} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={19}>
            <Col span={20}>
              <Form.Item name="state" label="Trạng thái" width={600}>
                <Select
                  style={{ width: 250 }}
                  onChange={(value) => {
                    console.log(value);
                  }}
                >
                  <OptGroup label="Trạng thái">
                    <Option value="1">Đang hiển thị</Option>
                    <Option value="0">Ẩn tin</Option>
                  </OptGroup>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Form.Item
              style={{ marginLeft: "8px" }}
              name="description"
              label="Mô tả"
            >
              <div className="addNew__container">
                <ReactQuill
                  style={{ minHeight: 500 }}
                  theme="snow"
                  value={state.value}
                  onChange={handleChange}
                  placeholder={"Nhập nội dung sản phẩm tại đây..."}
                  modules={modules}
                  formats={formats}
                />
              </div>
            </Form.Item>
          </Row>

          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default ModalUpdateNews;
