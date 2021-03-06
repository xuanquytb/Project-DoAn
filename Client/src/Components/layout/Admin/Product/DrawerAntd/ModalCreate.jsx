import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor/style.css";
import { CategoryContext } from "../../../../../Store/Context/CategoryContext";
import { BrandContext } from "../../../../../Store/Context/BrandContext";

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
  InputNumber,
} from "antd";

import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ShowModalProduct = ({ visible, onClose, handleRegister }) => {
  const {
    categoryState: { categorys },
    getCategory,
  } = useContext(CategoryContext);
  useEffect(() => getCategory(), []);
  const {
    brandState: { brands },
    getBrand,
  } = useContext(BrandContext);
  useEffect(() => getBrand(), []);

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
    console.log(value);
    setState({ value });
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onFinish = (values) => {
    const productCreate = {
      nameProduct: values.nameProduct,
      description: state.value,
      warranty: warranty,
      quantity: quantity,
      price: values.price,
      promotional: values.discount,
      status: values.state,
      image: values.nameImage.file.name,
      idCategory: category,
      idUnit: unit,
      idManufacturer: brand,
      idOrigin: origin,
    };
    handleRegister(productCreate);
  };

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
          <TabPane tab="Th??ng tin ch??nh" key="1">
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              initialValues={{
                ["quantityUniti"]: "1",
                ["unitSL"]: "1",
                ["discount"]: "1",
              }}
            >
              <Row gutter={16}>
                <Col span={9}></Col>
                <Col span={9}></Col>
                <Col span={9}></Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    label="T??n s???n ph???m"
                    name="nameProduct"
                    rules={[
                      {
                        required: true,
                        message: "T??n s???n ph???m kh??ng ???????c ????? tr???ng",
                      },
                    ]}
                  >
                    <Input placeholder="T??n s???n ph???m" allowClear />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Gi?? s???n ph???m"
                    name="price"
                    rules={[
                      {
                        required: true,
                        message: "Gi?? s???n ph???m kh??ng ???????c ????? tr???ng",
                      },
                    ]}
                  >
                    <Input placeholder="Gi?? s???n ph???m" allowClear />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="discount" label="Gi???m gi?? (%)">
                    <InputNumber min={1} max={100} style={{ height: 39 }} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item
                    name="category"
                    label="Ch???n danh m???c s???n ph???m"
                    rules={[
                      {
                        required: true,
                        message: "B???n ch??a ch???n danh m???c s???n ph???m",
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
                <Col span={6}>
                  <Form.Item
                    name="warranty"
                    label="Th???i gian b???o h??nh"
                    rules={[
                      {
                        required: true,
                        message: "B???n ch??a ch???n danh m???c s???n ph???m",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setWarranty(e)}>
                      <OptGroup label="Th???i gian b???o h??nh">
                        <Option value="1">1 th??ng</Option>
                        <Option value="6">6 th??ng</Option>
                        <Option value="12">12 th??ng</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="brand"
                    label="Ch???n th????ng hi???u s???n ph???m"
                    rules={[
                      {
                        required: true,
                        message: "B???n ch??a ch???n th????ng hi???u s???n ph???m",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setBrand(e)}>
                      {brands.map((item, index) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.nameManufacturer}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    name="origin"
                    label="Xu???t x???"
                    rules={[
                      {
                        required: true,
                        message: "B???n ch??a ch???n xu???t x???",
                      },
                    ]}
                  >
                    <Select onChange={(e) => setOrigin(e)}>
                      <OptGroup label="Xu???t x???">
                        <Option value="1">Vi???t Nam</Option>
                        <Option value="2">Trung Qu???c</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={7}>
                  <Form.Item
                    name="uniti"
                    label="Ch???n ????n v??? t??nh"
                    rules={[
                      {
                        required: true,
                        message: "B???n ch??a ch???n ????n v??? t??nh",
                      },
                    ]}
                  >
                    <Select style={{ width: 250 }} onChange={onChangeUnit}>
                      <OptGroup label="????n v??? t??nh">
                        <Option value="1">Chi???c</Option>
                        <Option value="2">Th??ng</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name="quantityUniti" label="S??? l?????ng">
                    <Input
                      disabled={disable}
                      allowClear
                      onChange={handChangeQuantityUniti}
                    />
                  </Form.Item>
                </Col>

                <Col span={5}>
                  <Form.Item
                    name="unitSL"
                    label="S??? l?????ng / ????n v???"
                    rules={[
                      {
                        required: true,
                        message: "S??? l?????ng / ????n v??? kh??ng d?????c ????? tr???ng",
                      },
                    ]}
                  >
                    <Input
                      placeholder="00000000000000"
                      allowClear
                      onChange={handChangeQuantity}
                    />
                  </Form.Item>
                </Col>

                <Col span={6}>
                  <Form.Item name="quantity" label="S??? l?????ng s???n ph???m">
                    <Input
                      placeholder={quantity}
                      // onChange={(quantity) =>
                      //     console.log(quantity)
                      // }
                      disabled
                      allowClear
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="nameImage" label="H??nh ???nh s???n ph???m">
                    <Upload
                      action={`http://localhost:8080/api/upload/image/product`}
                      listType="picture"
                      fileList={fileList}
                      onChange={onChange}
                      name="photo"
                    >
                      {fileList.length < 1 && "+ Ch???n ???nh"}
                    </Upload>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={19}>
                <Col span={20}>
                  <Form.Item name="state" label="Tr???ng th??i" width={600}>
                    <Select
                      style={{ width: 250 }}
                      onChange={(value) => {
                        console.log(value);
                      }}
                    >
                      <OptGroup label="Tr???ng th??i">
                        <Option value="C??n h??ng">C??n h??ng</Option>
                        <Option value="H???t h??ng">H???t h??ng</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  ????ng k??
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          <TabPane tab="M?? t??? s???n ph???m" key="2">
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

export default ShowModalProduct;
