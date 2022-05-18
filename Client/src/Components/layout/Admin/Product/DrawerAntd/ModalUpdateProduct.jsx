import React, { useEffect, useState } from "react";
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

const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ModalUpdateProduct = ({ input, visible, onClose, onUpdate }) => {
    console.log(input);
    const [state, setState] = useState({ value: input.description });
    const [quantityUnit, setQuantityUnit] = useState(1);
    const [disable, setDisable] = useState(true);
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
                                ["nameProduct"]: input.nameProduct,
                                ["warranty"]: input.warranty + " Tháng",
                                ["quantity"]: input.quantity,
                                ["price"]: input.price,
                                ["discount"]: input.promotional,
                                ["state"]: input.status,
                                ["category"]: input.nameCategory,
                                ["uniti"]: input.nameUnit,
                                ["brand"]: input.nameManufacturer,
                                ["origin"]: input.nameOrigin,
                            }}
                        >
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
                                        <Select
                                            onChange={(e) => setCategory(e)}
                                        >
                                            <OptGroup label='Danh mục sản phẩm'>
                                                <Option value='Thiết bị gia dụng'>
                                                    Thiết bị gia dụng
                                                </Option>
                                                <Option value='Nhà cửa đời sống'>
                                                    Nhà cửa đời sống
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
                                        <Select
                                            onChange={(e) => setWarranty(e)}
                                        >
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
                                        <Select onChange={(e) => setBrand(e)}>
                                            <OptGroup label='Thương hiệu sản phẩm'>
                                                <Option value='Sony'>
                                                    Sony
                                                </Option>
                                                <Option value='Xiaomi'>
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
                                        <Select onChange={(e) => setOrigin(e)}>
                                            <OptGroup label='Xuất xứ'>
                                                <Option value='Việt Nam'>
                                                    Việt Nam
                                                </Option>
                                                <Option value='Trung Quốc'>
                                                    Trung Quốc
                                                </Option>
                                            </OptGroup>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Form.Item
                                        name='quantity'
                                        label='Số lượng sản phẩm'
                                    >
                                        <Input
                                            placeholder={quantity}
                                            // onChange={(quantity) =>
                                            //     console.log(quantity)
                                            // }
                                            // disabled
                                            allowClear
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name='state'
                                        label='Trạng thái'
                                        width={600}
                                    >
                                        <Select
                                            style={{ width: 250 }}
                                            onChange={(value) => {
                                                console.log(value);
                                            }}
                                        >
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
                                    Cập nhật
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

export default ModalUpdateProduct;
