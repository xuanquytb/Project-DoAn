import React, { useEffect, useState, useContext } from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./Editor/EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./Editor/style.css";
import { CategoryNewsContext } from "../../../../../Store/Context/CategoryNewsContext";
import axios from "axios";

import { Drawer, Tabs, Form, Col, Row, Input, Select, Button } from "antd";
const { TextArea } = Input;
const { TabPane } = Tabs;

const { Option, OptGroup } = Select;

const ModalUpdateNews = ({ input, visible, onClose, onUpdate }) => {
    console.log(input);
    const {
        newsCategoryState: { categoryNews },
        getNewsCategory,
    } = useContext(CategoryNewsContext);
    useEffect(() => getNewsCategory(), []);
    const [state, setState] = useState({ value: input.content });
    const handleChange = (value) => {
        setState({ value });
    };

    useEffect(() => {
        setState({ value: input.content });
    }, [input]);

    const onFinish = (values) => {
        const productUpdate = {
            id: input.id,
            nameNews: values.nameNews,
            brief: values.brief,
            state: values.state,
            title: values.title,
            content: state.value,
        };
        onUpdate(productUpdate);
    };
    return (
        <>
            <Drawer
                destroyOnClose
                title={input.fullname}
                visible={visible}
                width={1200}
                onClose={onClose}
            >
                <Form
                    layout='vertical'
                    hideRequiredMark
                    onFinish={onFinish}
                    initialValues={{
                        ["nameNews"]: input.nameNews,
                        ["brief"]: input.brief,
                        ["state"]: input.state,
                        ["title"]: input.title,
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
                                label='Ch??? ????? tin t???c'
                                name='nameNews'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Ch??? ????? tin t???c kh??ng ???????c ????? tr???ng",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='Ch??? ????? tin t???c'
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name='title'
                                label='Ch???n danh m???c tin t???c'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "B???n ch??a ch???n danh m???c tin t???c",
                                    },
                                ]}
                            >
                                <Select onChange={(e) => setCategory(e)}>
                                    {categoryNews.map((item, index) => {
                                        return (
                                            <Select.Option
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
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
                                name='brief'
                                label='T??m t???t'
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "B???n ch??a ch???n danh m???c tin t???c",
                                    },
                                ]}
                            >
                                <TextArea rows={6} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={19}>
                        <Col span={20}>
                            <Form.Item
                                name='state'
                                label='Tr???ng th??i'
                                width={600}
                            >
                                <Select
                                    style={{ width: 250 }}
                                    onChange={(value) => {
                                        console.log(value);
                                    }}
                                >
                                    <OptGroup label='Tr???ng th??i'>
                                        <Option value='1'>??ang hi???n th???</Option>
                                        <Option value='0'>???n tin</Option>
                                    </OptGroup>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Form.Item
                            style={{ marginLeft: "8px" }}
                            name='description'
                            label='M?? t???'
                        >
                            <div className='addNew__container'>
                                <ReactQuill
                                    style={{
                                        minHeight: 500,
                                        maxWidth: 1164,
                                        borderRight: "0.5px solid gray",
                                        scroll,
                                    }}
                                    theme='snow'
                                    value={state.value}
                                    onChange={handleChange}
                                    placeholder={
                                        "Nh???p n???i dung s???n ph???m t???i ????y..."
                                    }
                                    modules={modules}
                                    formats={formats}
                                />
                            </div>
                        </Form.Item>
                    </Row>

                    <Form.Item wrapperCol={{ offset: 21, span: 16 }}>
                        <Button type='primary' htmlType='submit'>
                            C???p nh???t
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default ModalUpdateNews;
