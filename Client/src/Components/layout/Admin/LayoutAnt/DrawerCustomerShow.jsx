import React, { useEffect, useState } from "react";
import { Drawer, Skeleton, Switch, Descriptions, Badge, Image } from "antd";

const ShowDrawer = ({ input, visible, onClose }) => {
    let [isLoading, setIsLoading] = useState(false);
    let [isCheck, setIsCheck] = useState(false);

    const onChange = () => {
        setIsCheck(!isCheck);
    };
    useEffect(() => {
        setIsLoading(!isLoading);
    }, [isCheck]);

    return (
        <Drawer
            destroyOnClose
            title={input.fullname}
            visible={visible}
            width={600}
            onClose={onClose}
        >
            <Switch checked={isCheck} onChange={onChange} />
            <Skeleton active loading={isLoading} round paragraph={{ rows: 4 }}>
                <Descriptions
                    title='Thông tin tài khoản'
                    layout='vertical'
                    bordered
                >
                    <Descriptions.Item label='Ảnh đại diện' span={2}>
                        <Image
                            width={100}
                            style={{ borderRadius: "50%" }}
                            src={`http://localhost:8080/image/${input.nameAvata}`}
                        />
                    </Descriptions.Item>
                    <Descriptions.Item label='Trạng thái' span={2}>
                        <Badge status='processing' text='Đang hoạt động' />
                    </Descriptions.Item>
                    <Descriptions.Item label='Tên đăng nhập'>
                        {input.username}
                    </Descriptions.Item>
                    <Descriptions.Item label='Họ và tên'>
                        {input.fullname}
                    </Descriptions.Item>
                    <Descriptions.Item label='Email'>
                        {input.email}
                    </Descriptions.Item>
                    <Descriptions.Item label='Số điện thoại'>
                        {input.phone}
                    </Descriptions.Item>
                    <Descriptions.Item label='Địa chỉ' span={2}>
                        {input.address}
                    </Descriptions.Item>
                </Descriptions>
                <div style={{ padding: 10 }}></div>
            </Skeleton>
        </Drawer>
    );
};

export default ShowDrawer;
