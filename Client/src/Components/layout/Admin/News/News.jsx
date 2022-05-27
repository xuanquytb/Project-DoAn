import React from "react";
import { useContext, useState, useEffect } from "react";
import { Table, Button, Popconfirm } from "antd";
// import ShowModalNews from "./DrawerAntd/ModalCreate";
import ShowDrawer from "./Antd/DrawerNewsShow";
// import ModalUpdateProduct from "./DrawerAntd/ModalUpdateProduct";
import { NewsContext } from "../../../../Store/Context/NewsContext";
import axios from "axios";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const NewsContent = () => {
  const {
    newsState: { news },
    getNews,
    deleteNews,
  } = useContext(NewsContext);
  useEffect(() => getNews(), []);
  console.log(news);

  const [visibleShow, setVisibleShow] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [newsDetail, setNewsDetail] = useState({});
  // const [productEdit, setProductEdit] = useState({});

  const handleDelete = async (id) => {
    const result = await deleteNews(id.key);
  };
  const onClose = () => {
    setVisibleShow(false);
    setVisibleUpdate(false);
    setVisibleCreate(false);
  };

  const handleShow = async (record) => {
    setNewsDetail({
      nameNews: record.nameNews,
      brief: record.brief,
      nameImage: record.nameImage,
      author: record.author,
      content: record.content,
      key: record.id,
    });
    setVisibleShow(true);
  };

  // const handleCrate = async (product) => {
  //   const result = await createProduct(product);
  //   if (result) {
  //     getProduct();
  //     notification.open({
  //       className: "custom-class",
  //       description: "Thêm thành công",
  //       icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  //     });
  //   } else {
  //     notification.open({
  //       description: "Thêm thất bại",
  //       className: "custom-class",
  //       style: {
  //         width: 350,
  //         backgroundColor: "#fff2f0",
  //       },
  //       type: "error",
  //     });
  //   }
  // };

  // const handleUpdate = async (record) => {
  //   const result = await axios.get(
  //     `http://localhost:8080/api/product/findproduct/${record.key}`
  //   );

  //   setProductEdit(result.data.products);
  //   setVisibleUpdate(true);
  // };
  // const clickUpdate = async (record) => {
  //   const result = await updateProduct(record);
  //   if (result.success) {
  //     getProduct();
  //     notification.open({
  //       className: "custom-class",
  //       description: "Cập nhật thành công",
  //       icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  //     });
  //   } else {
  //     notification.open({
  //       description: result.message,
  //       message: "Cập nhật thất bại",
  //       className: "custom-class",
  //       style: {
  //         width: 350,
  //         backgroundColor: "#fff2f0",
  //       },
  //       type: "error",
  //     });
  //   }
  // };

  const dataSource = news.map((item) => {
    return {
      nameNews: item.nameNews,
      brief: item.brief,
      nameImage: item.nameImage,
      author: item.author,
      content: item.content,
      key: item.id,
    };
  });

  const columns = [
    {
      title: "Chủ đề tin",
      width: 60,
      dataIndex: "nameNews",
      key: "nameNews",
      fixed: "left",
    },
    {
      title: "Tóm tắt",
      dataIndex: "brief",
      key: "brief",
      width: 50,
    },
    {
      title: "Hình ảnh",
      dataIndex: "nameImage",
      key: "nameImage",
      width: 60,
    },
    {
      title: "Tác giả",
      dataIndex: "author",
      key: "author",
      width: 50,
    },
    {
      title: "Thao Tác",
      width: "15%",
      key: "4",
      dataIndex: "operation",
      render: (_, record) =>
        news.length >= 0 ? (
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
              title="Bạn chắc chắn muốn xóa ?"
              onConfirm={() => handleDelete(record)}
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
                  <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
                </svg>
              </Button>
            </Popconfirm>
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
        <Button
          className="btn-addNew"
          type="primary"
          style={{
            marginBottom: 16,
          }}
          onClick={() => handleShowCreate()}
        >
          Tạo mới
        </Button>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{ y: 350 }}
        />
      </div>
      <ShowDrawer input={newsDetail} visible={visibleShow} onClose={onClose} />
      {/* <ShowModalNews
        visible={visibleCreate}
        onClose={() => setVisibleCreate(false)}
        handleRegister={handleCrate}
      /> */}
      {/* 
      
      <ModalUpdateProduct
        input={productEdit}
        visible={visibleUpdate}
        onClose={onClose}
        onUpdate={clickUpdate}
      /> */}
    </>
  );
};

export default NewsContent;
