import React, { useState } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor/style.css";

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

import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ShowModalProduct = ({ visible, onClose, handleRegister }) => {
    const [state, setState] = useState({ value: "" });
    const [quantity, setQuantity] = useState(0);
    const [quantityUnit, setQuantityUnit] = useState(1);
    const [disable, setDisable] = useState(true);
    const [fileList, setFileList] = useState([]);

    const handleChange = (value) => {
        console.log(value);
        setState({ value });
    };

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    console.log(state.value);
    const onFinish = (values) => {
        console.log(values);
        // const userUpdate = {
        //     username: values.username,
        //     password: values.password,
        //     passwordRe: values.passwordRe,
        //     fullname: values.fullname,
        //     email: values.email,
        //     phone: values.phone,
        //     address: values.address,
        //     sex: values.sex,
        //     dateOfBirth: values.ngaysinh.format("YYYY/MM/DD"),
        // };
        // handleRegister(userUpdate);
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
                <Tabs type='card'>
                    <TabPane tab='Thông tin chính' key='1'>
                        <Form
                            layout='vertical'
                            hideRequiredMark
                            onFinish={onFinish}
                            initialValues={{
                                ["warranty"]: "6 tháng",
                                ["state"]: "Còn hàng",
                                ["category"]: "Hàng tiêu dùng",
                                ["brand"]: "Xiaomi",
                                ["unitSL"]: "1",
                                ["origin"]: "Việt Nam",
                                ["quantityUniti"]: "1",
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
                                        label='Tên sản phẩm'
                                        name='nameProduct'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Tên sản phẩm không được để trống",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Tên sản phẩm'
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label='Giá sản phẩm'
                                        name='price'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Giá sản phẩm không được để trống",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='Giá sản phẩm'
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item name='discount' label='Giảm giá'>
                                        <Input placeholder='0%' allowClear />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Form.Item
                                        name='category'
                                        label='Chọn danh mục sản phẩm'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Bạn chưa chọn danh mục sản phẩm",
                                            },
                                        ]}
                                    >
                                        <Select>
                                            <OptGroup label='Danh mục sản phẩm'>
                                                <Option value='1'>
                                                    Hàng tiêu dùng
                                                </Option>
                                                <Option value='2'>
                                                    Gia dụng nhà bếp
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name='warranty'
                                        label='Thời gian bảo hành'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Bạn chưa chọn danh mục sản phẩm",
                                            },
                                        ]}
                                    >
                                        <Select>
                                            <OptGroup label='Thời gian bảo hành'>
                                                <Option value='1'>
                                                    1 tháng
                                                </Option>
                                                <Option value='6'>
                                                    6 tháng
                                                </Option>
                                                <Option value='12'>
                                                    12 tháng
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name='brand'
                                        label='Chọn thương hiệu sản phẩm'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Bạn chưa chọn thương hiệu sản phẩm",
                                            },
                                        ]}
                                    >
                                        <Select>
                                            <OptGroup label='Thương hiệu sản phẩm'>
                                                <Option value='1'>Sony</Option>
                                                <Option value='2'>
                                                    Xiaomi
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        name='origin'
                                        label='Xuất xứ'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Bạn chưa chọn xuất xứ",
                                            },
                                        ]}
                                    >
                                        <Select>
                                            <OptGroup label='Xuất xứ'>
                                                <Option value='1'>
                                                    Việt Nam
                                                </Option>
                                                <Option value='2'>
                                                    Trung Quốc
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={7}>
                                    <Form.Item
                                        name='uniti'
                                        label='Chọn đơn vị tính'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Bạn chưa chọn đơn vị tính",
                                            },
                                        ]}
                                    >
                                        <Select
                                            style={{ width: 250 }}
                                            onChange={onChangeUnit}
                                        >
                                            <OptGroup label='Đơn vị tính'>
                                                <Option value='1'>Chiếc</Option>
                                                <Option value='2'>Thùng</Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={6}>
                                    <Form.Item
                                        name='quantityUniti'
                                        label='Số lượng'
                                    >
                                        <Input
                                            disabled={disable}
                                            // placeholder='00000000000000000000000000'
                                            allowClear
                                            onChange={handChangeQuantityUniti}
                                        />
                                    </Form.Item>
                                </Col>

                                <Col span={5}>
                                    <Form.Item
                                        name='unitSL'
                                        label='Số lượng / đơn vị'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Số lượng / đơn vị không dược để trống",
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder='00000000000000'
                                            allowClear
                                            onChange={handChangeQuantity}
                                        />
                                    </Form.Item>
                                </Col>

                                <Col span={6}>
                                    <Form.Item
                                        name='quantity'
                                        label='Số lượng sản phẩm'
                                    >
                                        <Input
                                            placeholder={quantity}
                                            disabled
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name='nameImage'
                                        label='Hình ảnh sản phẩm'
                                    >
                                        <Upload
                                            action={`http://localhost:8080/api/upload/image/product`}
                                            listType='picture'
                                            fileList={fileList}
                                            onChange={onChange}
                                            name='photo'
                                        >
                                            {fileList.length < 1 && "+ Upload"}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={19}>
                                <Col span={20}>
                                    <Form.Item
                                        name='state'
                                        label='Trạng thái'
                                        width={600}
                                    >
                                        <Select style={{ width: 250 }}>
                                            <OptGroup label='Trạng thái'>
                                                <Option value='Còn hàng'>
                                                    Còn hàng
                                                </Option>
                                                <Option value='Hết hàng'>
                                                    Hết hàng
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                                <Button type='primary' htmlType='submit'>
                                    Đăng ký
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab='Mô tả sản phẩm' key='2'>
                        <div className='addNew__container'>
                            {/* <EditorToolbar /> */}
                            <ReactQuill
                                style={{ minHeight: 500 }}
                                theme='snow'
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
