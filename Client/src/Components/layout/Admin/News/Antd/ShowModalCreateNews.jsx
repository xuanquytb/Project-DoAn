import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor/style.css";
import { CategoryContext } from "../../../../../Store/Context/CategoryContext";
import { AuthContext } from "../../../../../Store/Context/AuthContext";

import {
  Modal,
  Tabs,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Upload,
} from "antd";

const { TextArea } = Input;

import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ShowModalCreateNews = ({ visible, onClose, handleCreate }) => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  const {
    categoryState: { categorys },
    getCategory,
  } = useContext(CategoryContext);
  useEffect(() => getCategory(), []);

  const [state, setState] = useState({ value: "" });

  const [quantityUnit, setQuantityUnit] = useState(1);
  const [disable, setDisable] = useState(true);
  const [fileList, setFileList] = useState([]);

  //////////////////////////////////////////////////////////
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [warranty, setWarranty] = useState("");
  const [origin, setOrigin] = useState("");
  const [unit, setUnit] = useState("");
  //////////////////////////////////////////////////////////

  const handleChange = (value) => {
    setState({ value });
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = (values) => {
    const newsCreate = {
      nameNews: values.nameNews,
      brief: values.brief,
      content: state.value,
      nameImage: "default.png",
      author: user[0].fullname,
      state: values.state,
      idNewsCategory: "1",
      idUser: user[0].id,
    };
    handleCreate(newsCreate);
  };

  // const onChange = ({ fileList: newFileList }) => {
  //     setFileList(newFileList);
  // };

  const ModalProduct = ({ visible, onClose }) => {
    function onChange(value) {
      console.log(value);
    }
  };

  const handChangeQuantityUniti = (e) => {
    setQuantityUnit(e.target.value);
  };

  const handChangeQuantity = (e) => {
    if (disable == true) {
      setQuantity(e.target.value * 1);
    }
    if (disable == false) {
      setQuantity(e.target.value * quantityUnit);
    }
  };

  const onChangeUnit = (e) => {
    setUnit(e);
    if (e === "1") {
      setDisable(true);
    }
    if (e === "2") {
      setDisable(false);
    }
  };
  return (
    <>
      <Modal
        centered
        visible={visible}
        onCancel={onClose}
        width={1000}
        footer={[]}
      >
        <Tabs type="card">
          <TabPane tab="Thông tin chính" key="1">
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              initialValues={{
                ["quantityUniti"]: "1",
                ["unitSL"]: "1",
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
                    <Select onChange={(e) => setCategory(e)}>
                      {categorys.map((item, index) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.nameCategory}
                          </Select.Option>
                        );
                      })}
                    </Select>
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
              <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="Mô tả sản phẩm" key="2">
            <div className="addNew__container">
              {/* <EditorToolbar /> */}
              <ReactQuill
                style={{ minHeight: 500 }}
                theme="snow"
                value={state.value}
                onChange={handleChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
              />
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default ShowModalCreateNews;
