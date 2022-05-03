import React, { useEffect, useState } from "react";
import { Drawer, Skeleton, Switch } from "antd";

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
            width={500}
            onClose={onClose}
        >
            <Switch checked={isCheck} onChange={onChange} />
            <Skeleton active loading={isLoading} round paragraph={{ rows: 4 }}>
                <div style={{ padding: 10 }}>
                    <p>{input.nameAvata}</p>
                    <p>{input.username}</p>
                    <p>{input.fullname}</p>
                    <p>{input.email}</p>
                    <p>{input.phone}</p>
                    <p>{input.address}</p>
                    <p>{input.sex}</p>
                </div>
            </Skeleton>
        </Drawer>
    );
};

export default ShowDrawer;
