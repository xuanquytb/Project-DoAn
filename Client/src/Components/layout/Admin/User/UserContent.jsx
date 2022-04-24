import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../Store/Context/UserContext";
import { EyeOutlined } from "@ant-design/icons";

const UserContent = () => {
    const {
        userState: { users },
        getCustomer,
        deleteUser,
    } = useContext(UserContext);

    useEffect(() => getCustomer(), []);

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

    const handleDelete = async (id) => {
        console.log(id.key);
        const result = await deleteUser(id.key);
    };
    const columns = [
        {
            title: "Tên đăng nhập",
            dataIndex: "username",
            key: "username",
            width: "18%",
        },

        {
            title: "Họ và tên",
            dataIndex: "fullname",
            key: "fullname",
            width: "23%",
        },
        // {
        //     title: "Avatar",
        //     dataIndex: "avatar",
        //     key: "avatar",
        //     width: "15%",
        //     render: () => (
        //         <img
        //             style={{
        //                 width: "50px",
        //                 borderRadius: "40%",
        //                 display: "flex",
        //                 alignItems: "center",
        //                 justifyContent: "center",
        //             }}
        //             src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
        //         />
        //     ),
        // },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            width: "35%",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            width: "20%",
        },
        {
            title: "Địa chỉ",
            dataIndex: "address",
            key: "address",
            width: "50%",
        },
        {
            title: "Thao Tác",
            width: "20%",
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
                                    padding: 0,
                                    width: 30,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                                type='text'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='25'
                                    height='25'
                                >
                                    <path fill='none' d='M0 0h24v24H0z' />
                                    <path d='M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' />
                                </svg>
                            </Button>
                        </Popconfirm>
                        <Popconfirm
                            title='Bạn chắc chắn muốn xóa ?'
                            onConfirm={() => handleDelete(record)}
                        >
                            <Button
                                style={{
                                    padding: 0,
                                    width: 30,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                                type='text'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='24'
                                    height='24'
                                >
                                    <path fill='none' d='M0 0h24v24H0z' />
                                    <path d='M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z' />
                                </svg>
                            </Button>
                        </Popconfirm>
                        <Popconfirm
                            title='Bạn chắc chắn muốn sửa bài viết ?'
                            //   onConfirm={() => handleEdit(record)}
                        >
                            <Button
                                style={{
                                    padding: 0,
                                    width: 30,
                                    marginRight: 5,
                                    borderRadius: 20,
                                }}
                                type='text'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 24 24'
                                    width='24'
                                    height='24'
                                >
                                    <path fill='none' d='M0 0h24v24H0z' />
                                    <path d='M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z' />
                                </svg>
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
