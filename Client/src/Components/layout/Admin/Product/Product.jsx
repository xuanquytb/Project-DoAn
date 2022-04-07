import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../../Store/Context/UserContext";



const UserContent = () => {
  const {userState:{users},getUsers} = useContext(UserContext);
  useEffect(() => getUsers(), []);
  
  const dataSource = users.map(users => {
    return { 
      username:users.username,
      fullname:users.fullname,
      email:users.email,
      phone:users.phone,
      address:users.address,
      key: users._id
    }
  })
  const columns = [
    {
      title: 'Tên sản phẩm',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Mô tả',
      width: 100,
      dataIndex: 'mota',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Giá bán',
      dataIndex: 'giaban',
      key: '1',
      width: 100,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangthai',
      key: '2',
      width: 100,
    },
    {
      title: 'Số lượng',
      dataIndex: 'sl',
      key: '3',
      width: 100,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <div>
          <a className="action">edit</a>
          <a className="action">delete</a>
      </div>,
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Sản phẩm ${i}`,
    mota:"Gia dụng nhà bếp",
    giaban:'20000000',
    trangthai: 32,
    sl:30,
    diachi: `London Park no. ${i}`,
  });
}
  return (
    <>
      <div className="content">
        <Button
        className="btn-addNew"
          type="primary"
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
          dataSource={data}
          columns={columns}
          scroll={{ y: 350 }}
        />
      </div>
    </>
  );
};

export default UserContent;
