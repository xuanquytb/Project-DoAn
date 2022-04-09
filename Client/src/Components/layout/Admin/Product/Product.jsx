import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../../Store/Context/UserContext";



const ProductContent = () => {

  const dataSource = [
    {
      key:"1",
      name:"Bếp ga đôi",
      mota:"Bếp gas dương 2 lò nấu, mặt kính chịu lực,Kiềng bếp bằng thép tráng men, Chế độ tiết kiệm gas",
      giaban:"3000000 đ",
      trangthai:"Còn Hàng",
      sl:"20"
    },
    {
      key:"2",
      name:"Bếp hồng ngoại",
      mota:"Các chế độ nấu gồm hấp, hâm nóng, BBQ, giữ ấm, nấu lẩu và xào.Công suất: 200, 500, 800, 1000, 1300, 1600, 1800 và 2000W sử dụng khi chọn nấu lẩu.",
      giaban:"600000 đ",
      trangthai:"Còn Hàng",
      sl:"10"
    },
    {
      key:"3",
      name:"Quạt Xiaomi 4 cánh tích điện",
      mota:"Quạt tích điện để bàn mini F6  mang trên mình thiết kế khá tinh tế, hoạt động bền bỉ, linh hoạt chuyển đổi cấp độ gió hứa hẹn khiến người dùng hài lòng ngay từ cái nhìn đầu tiên.",
      giaban:"30000 đ",
      trangthai:"Còn Hàng",
      sl:"50"
    },
    {
      key:"4",
      name:"Gia dụng nhà vệ sinh",
      mota:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn",
      giaban:"3000000",
      trangthai:"Còn Hàng",
      sl:"300"
    },
    {
      key:"5",
      name:"Gia dụng sân vườn",
      mota:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn",
      giaban:"3000000",
      trangthai:"Còn Hàng",
      sl:"300"
    },
]

  const columns = [
    {
      title: 'Tên sản phẩm',
      width: 60,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Mô tả',
      width: 130,
      dataIndex: 'mota',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Giá bán',
      dataIndex: 'giaban',
      key: '1',
      width: 50,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'trangthai',
      key: '2',
      width: 60,
    },
    {
      title: 'Số lượng',
      dataIndex: 'sl',
      key: '3',
      width: 50,
    },
    {
      title: "Thao Tác",
      width: 60,
      key: "4",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 0 ? (
          <>
            <Popconfirm
              title="Bạn chắc chắn muốn xóa ?"
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
              title="Bạn chắc chắn muốn sửa bài viết ?"
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
          // key={users._id}
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

export default ProductContent;
