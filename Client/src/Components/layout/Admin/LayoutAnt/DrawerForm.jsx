import React, { useState, useContext } from "react";
import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
    Space,
    Image,
} from "antd";

const { Option, OptGroup } = Select;

const ShowDrawer = ({ input, visible, onClose, onUpdate }) => {
    const onFinish = (values) => {
        const userUpdate = {
            id: input.id,
            fullname: values.fullname,
            email: values.email,
            phone: values.phone,
            address: values.address,
            nameAvata: "Defau.jpg",
            sex: values.sex,
            dateOfBirth: values.ngaysinh.format("YYYY/MM/DD"),
        };
        onUpdate(userUpdate);
    };
    return (
        <Drawer
            destroyOnClose
            title={input.fullname}
            visible={visible}
            width={500}
            onClose={onClose}
        >
            <Form layout='vertical' hideRequiredMark onFinish={onFinish}>
                <Row gutter={16}>
                    <Col span={9}></Col>
                    <Col span={9}>
                        <Image
                            width={100}
                            style={{ borderRadius: "50%" }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                    </Col>
                    <Col span={9}></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label='Tên đăng nhập'>
                            <Input disabled placeholder={input.username} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Họ và tên'
                            name='fullname'
                            rules={[
                                {
                                    required: true,
                                    message: "Họ tên không được để trống",
                                },
                            ]}
                        >
                            <Input placeholder={input.fullname} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name='sex'
                            label='Giới tính'
                            rules={[
                                {
                                    required: true,
                                    message: "Bạn chưa chọn giới tính",
                                },
                            ]}
                        >
                            <Select style={{ width: 200 }}>
                                <OptGroup label='Giới tính'>
                                    <Option value='Nam'>Nam</Option>
                                    <Option value='Nữ'>Nữ</Option>
                                </OptGroup>
                                <OptGroup label='Khác'>
                                    <Option value='Khác'>Khác</Option>
                                </OptGroup>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name='ngaysinh' label='Ngày sinh'>
                            <DatePicker
                                format='DD-MM-YYYY'
                                placeholder='DD-MM-YYYY'
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name='email'
                            label='Email'
                            rules={[
                                {
                                    required: true,
                                    message: "Email không được để trống",
                                },
                            ]}
                        >
                            <Input placeholder='Please enter user name' />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name='phone'
                            label='Số điện thoại'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Số điện thoại không được để trống",
                                },
                            ]}
                        >
                            <Input placeholder='Please enter user name' />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={19}>
                    <Col span={20}>
                        <Form.Item
                            name='address'
                            label='Địa chỉ nhận hàng'
                            width={600}
                        >
                            <Input placeholder='Please enter user name' />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default ShowDrawer;
