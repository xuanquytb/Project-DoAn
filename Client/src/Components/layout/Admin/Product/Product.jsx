import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import ShowDrawerCreate from "./DrawerAntd/DrawerCreate";
import ShowDrawer from "./DrawerAntd/DrawerProductShow";
import ShowDrawerProduct from "./DrawerAntd/ShowDrawerProduct";
import { ProductContext } from "../../../../Store/Context/ProductContext";

const ProductContent = () => {
    const {
        productState: { products },
        getProduct,
        deleteProduct,
        createProduct,
        updateProduct,
    } = useContext(ProductContext);
    useEffect(() => getProduct(), []);
    console.log(products);
    const [visibleShow, setVisibleShow] = useState(false);
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [product, setProduct] = useState({});
    const [productEdit, setProductEdit] = useState({});

    const handleDelete = async (id) => {
        const result = await deleteProduct(id.key);
    };
    const onClose = () => {
        setVisibleShow(false);
        setVisibleUpdate(false);
        setVisibleCreate(false);
    };

    const handleShow = async (record) => {
        setProduct({
            nameProduct: record.nameProduct,
            description: record.description,
            warranty: record.warranty,
            quantity: record.quantity,
            promotional: record.promotional,
            price: record.price,
            status: record.status,
            image: record.image,
            idCategory: record.idCategory,
            idUnit: record.idUnit,
            idManufacturer: record.idManufacturer,
            idOrigin: record.idOrigin,
            key: record.id,
        });
        setVisibleShow(true);
    };

    const handleEdit = async (record) => {
        // setUseruserEdit({
        //     username: record.username,
        //     fullname: record.fullname,
        //     email: record.email,
        //     phone: record.phone,
        //     address: record.address,
        //     sex: record.sex,
        //     nameAvata: record.nameAvata,
        //     ngaysinh: record.ngaysinh,
        //     id: record.key,
        // });
        setVisibleUpdate(true);
    };

    const dataSource = products.map((product) => {
        return {
            nameProduct: product.nameProduct,
            description: product.description,
            warranty: product.warranty,
            quantity: product.quantity,
            promotional: product.promotional,
            price: product.price,
            status: product.status,
            image: product.image,
            idCategory: product.idCategory,
            idUnit: product.idUnit,
            idManufacturer: product.idManufacturer,
            idOrigin: product.idOrigin,
            key: product.id,
        };
    });

    const columns = [
        {
            title: "Tên sản phẩm",
            width: 60,
            dataIndex: "nameProduct",
            key: "nameProduct",
            fixed: "left",
        },
        {
            title: "Mô tả",
            width: 130,
            dataIndex: "description",
            key: "description",
            fixed: "left",
        },
        {
            title: "Giá bán",
            dataIndex: "price",
            key: "price",
            width: 50,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            width: 60,
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
            width: 50,
        },
        {
            title: "Thao Tác",
            width: "15%",
            key: "4",
            dataIndex: "operation",
            render: (_, record) =>
                products.length >= 0 ? (
                    <>
                        <Button
                            style={{
                                padding: 0,
                                width: 30,
                                marginRight: 5,
                                borderRadius: 20,
                            }}
                            type='text'
                            onClick={() => handleShow(record)}
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
                            title='Bạn chắc chắn muốn sửa người dùng ?'
                            onConfirm={() => handleEdit(record)}
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
    const handleShowCreate = async () => {
        setVisibleCreate(true);
    };
    return (
        <>
            <div className='content'>
                <Button
                    className='btn-addNew'
                    type='primary'
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
            <ShowDrawerCreate
                visible={visibleCreate}
                onClose={onClose}
                // handleRegister={handleCreate}
            />
            <ShowDrawer
                input={product}
                visible={visibleShow}
                onClose={onClose}
            />
            <ShowDrawerProduct
                input={productEdit}
                visible={visibleUpdate}
                onClose={onClose}
                // onUpdate={handleUpdate}
            />
        </>
    );
};

export default ProductContent;
