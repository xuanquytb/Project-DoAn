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
import UserContext from "../../../../Store/Context/UserContext";

const { Option, OptGroup } = Select;

const ShowDrawer = ({ input, visible, onClose }) => {
    // const {
    //     userState: { users },
    //     updateCustomer,
    // } = useContext(UserContext);
    const [valueForm, setValueForm] = useState({
        fullname: "",
        sex: "",
        birthDate: "",
    });
    const onChangeValueForm = (e) =>
        setValueForm({ ...valueForm, [e.target.name]: e.target.value });

    console.log(valueForm);

    function handleChange(value) {
        setValueForm({ ...valueForm, ["sex"]: value });
    }

    function onChange(dateString) {
        setValueForm({ ...valueForm, ["birthDate"]: dateString });
    }
    return (
        <Drawer
            destroyOnClose
            title={input.fullname}
            visible={visible}
            width={500}
            onClose={onClose}
        >
            <Form layout='vertical' hideRequiredMark>
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
                        <Form.Item name='username' label='Tên đăng nhập'>
                            <Input disabled placeholder={input.username} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label='Họ và tên'
                            rules={[
                                {
                                    required: true,
                                    message: "Họ tên không được để trống",
                                },
                            ]}
                        >
                            <Input
                                name='fullname'
                                placeholder={input.fullname}
                                onChange={onChangeValueForm}
                            />
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
                            <Select
                                style={{ width: 200 }}
                                onSelect={handleChange}
                            >
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
                                onChange={onChange}
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
