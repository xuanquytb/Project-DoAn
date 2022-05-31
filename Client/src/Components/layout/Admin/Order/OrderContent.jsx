import React from "react";
import { useContext, useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
import ShowDrawer from "./Ant/DrawerProductShow";
import DrawerUpdate from "./Ant/DrawerUpdate";
import { OrderContext } from "../../../../Store/Context/OrderContext";

import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const OrderContent = () => {
  const {
    orderState: { orders },
    getOrder,
    updateOrder,
  } = useContext(OrderContext);
  useEffect(() => getOrder(), []);

  const [visibleShow, setVisibleShow] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [order, setOrder] = useState({});
  const [orderEdit, setOrderEdit] = useState({});

  const handleDelete = async (id) => {
    const result = await deleteProduct(id.key);
  };
  const onClose = () => {
    setVisibleShow(false);
    setVisibleUpdate(false);
    setVisibleCreate(false);
  };

  const handleShow = async (record) => {
    setOrder({
      address: record.address,
      email: record.email,
      fullname: record.fullname,
      id: record.id,
      idCustomer: record.idCustomer,
      idPayment: record.idPayment,
      phone: record.phone,
      state: record.state,
      sumPayment: record.sumPayment,
    });
    setVisibleShow(true);
  };

  const handleUpdate = async (record) => {
    setOrderEdit(record);
    setVisibleUpdate(true);
  };

  const clickUpdate = async (record) => {
    console.log(record);
    const result = await updateOrder(record);
    if (result.success) {
      getOrder();
      notification.open({
        className: "custom-class",
        description: "Cập nhật thành công",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    } else {
      notification.open({
        description: result.message,
        message: "Cập nhật thất bại",
        className: "custom-class",
        style: {
          width: 350,
          backgroundColor: "#fff2f0",
        },
        type: "error",
      });
    }
  };

  const dataSource = orders.map((order) => {
    return {
      address: order.address,
      email: order.email,
      fullname: order.fullname,
      id: order.id,
      idCustomer: order.idCustomer,
      idPayment: order.idPayment,
      phone: order.phone,
      state: order.state,
      sumPayment: order.sumPayment,
      key: order.id,
    };
  });

  const columns = [
    {
      title: "Người dặt hàng",
      width: 60,
      dataIndex: "fullname",
      key: "fullname",
      fixed: "left",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      width: 50,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 80,
    },
    {
      title: "Giá trị đơn hàng",
      dataIndex: "sumPayment",
      key: "sumPayment",
      width: 50,
    },
    {
      title: "Thao Tác",
      width: "9%",
      key: "4",
      dataIndex: "operation",
      render: (_, record) =>
        orders.length >= 0 ? (
          <>
            <Button
              style={{
                padding: 0,
                width: 30,
                marginRight: 5,
                borderRadius: 20,
              }}
              type="text"
              onClick={() => handleShow(record)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="25"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
            </Button>

            <Popconfirm
              title="Bạn chắc chắn muốn sửa người dùng ?"
              onConfirm={() => handleUpdate(record)}
            >
              <Button
                style={{
                  padding: 0,
                  width: 30,
                  marginRight: 5,
                  borderRadius: 20,
                }}
                type="text"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z" />
                </svg>
              </Button>
            </Popconfirm>
          </>
        ) : null,
    },
  ];
  const handleShowCreate = async () => {
    setVisibleCreate(true);
  };

  return (
    <>
      <div className="content">
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 490 }}
        />
      </div>
      <DrawerUpdate
        input={orderEdit}
        visible={visibleUpdate}
        onClose={onClose}
        handleUpdate={clickUpdate}
      />
      <ShowDrawer input={order} visible={visibleShow} onClose={onClose} />
    </>
  );
};

export default OrderContent;
