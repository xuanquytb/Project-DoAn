import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../Store/Context/UserContext";

const UserContent = () => {
    const {
        userState: { users },
        getUsers,
    } = useContext(UserContext);

    useEffect(() => getUsers(), []);

    const dataSource = users.map((users) => {
        return {
            username: users.username,
            fullname: users.fullname,
            email: users.email,
            phone: users.phone,
            address: users.address,
            key: users.id,
        };
    });
    const columns = [
        {
            title: "Tên đăng nhập",
            dataIndex: "username",
            key: "username",
            width: "23%",
            editable: true,
        },
        {
            title: "Họ và tên",
            dataIndex: "fullname",
            key: "fullname",
            width: "25%",
        },

        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "35%",
            editable: true,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            width: "19%",
            editable: true,
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
            width: "30%",
            editable: true,
        },
        {
            title: "Thao Tác",
            width: "22%",
            key: "4",
            dataIndex: "operation",
            render: (_, record) =>
                users.length >= 0 ? (
                    <>
                        <Popconfirm
                            title='Bạn chắc chắn muốn xóa ?'
                            //   onConfirm={() => handleDelete(record)}
                        >
                            <Button
                                style={{
                                    color: "#fff",
                                    backgroundColor: "red",
                                    padding: 0,
                                    width: 50,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                            >
                                Xóa
                            </Button>
                        </Popconfirm>
                        <Popconfirm
                            title='Bạn chắc chắn muốn sửa bài viết ?'
                            //   onConfirm={() => handleEdit(record)}
                        >
                            <Button
                                style={{
                                    color: "#fff",
                                    backgroundColor: "#59e0ff",
                                    padding: 0,
                                    width: 50,
                                    marginLeft: 5,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                            >
                                Sửa
                            </Button>
                        </Popconfirm>
                    </>
                ) : null,
        },
    ];

    return (
        <>
            <div className='content'>
                <Button
                    className='btn-addNew'
                    type='primary'
                    style={{
                        marginBottom: 16,
                    }}
                    onClick={() => addNews()}
                >
                    <Link to={"/postUser"}>Thêm Mới</Link>
                </Button>
                <Table
                    key={users._id}
                    // components={components}
                    rowClassName={() => "editable-row"}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    scroll={{ y: 350 }}
                />
            </div>
        </>
    );
};

export default UserContent;
