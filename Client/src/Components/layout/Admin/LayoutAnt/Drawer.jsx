import React, { useState } from "react";
import { Drawer, Skeleton } from "antd";

const ShowDrawer = ({ input, visible, onClose }) => {
    const data = input;
    return (
        <Drawer
            destroyOnClose
            title={input.fullname}
            visible={visible}
            width={500}
            onClose={onClose}
        >
            <div style={{ padding: 10 }}>
                <p>{input.username}</p>
                <p>{input.fullname}</p>
                <p>{input.email}</p>
                <p>{input.phone}</p>
                <p>{input.address}</p>
            </div>
        </Drawer>
    );
};

export default ShowDrawer;
