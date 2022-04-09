import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { Link,} from "react-router-dom";
import { UserContext } from "../../../../Store/Context/UserContext";

const CategoryContent = () => {

  const dataSource = [
      {
        key:"1",
        name:"Gia dụng nhà bếp",
        description:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn"
      },
      {
        key:"2",
        name:"Gia dụng phòng khách",
        description:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn"
      },
      {
        key:"3",
        name:"Gia dụng phòng ngủ",
        description:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn"
      },
      {
        key:"4",
        name:"Gia dụng nhà vệ sinh",
        description:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn"
      },
      {
        key:"5",
        name:"Gia dụng sân vườn",
        description:"Các sản phẩm có thể sử dụng trong nhà bếp, làm cho căn bếp trở nên gọn gàng và nấu ăn thú vị hơn"
      },
  ]

  const columns = [
    {
      title: "Tên ngành hàng",
      dataIndex: "name",
      key: "name",
      width: "10%",
      editable: true,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      width: "40%",
    },
    {
      title: "Thao Tác",
      width: "10%",
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
        //   key={users._id}
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

export default CategoryContent;
