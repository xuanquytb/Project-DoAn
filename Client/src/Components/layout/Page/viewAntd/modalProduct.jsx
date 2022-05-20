import React, { useEffect, useState } from "react";
import { Modal, Button, InputNumber, Descriptions } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import axios from "axios";
import { Image } from "antd";
import HTMLReactParser from "html-react-parser";

const ModalProduct = ({ visible, onClose, product }) => {
  const [products, setProducts] = useState();
  function onChange(value) {
    console.log(value);
  }
  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:8080/api/product/findproduct/${product}`
    );
    setProducts(result.data.products);
  }, [product]);

  console.log(products);
  return (
    <>
      <Modal
        centered
        visible={visible}
        onCancel={onClose}
        width={1300}
        footer={[]}
      >
        <div className="detailProduct">
          <div className="itemLeft" style={{ height: "475px" }}>
            <Image
              width={450}
              src={
                products !== undefined
                  ? `http://localhost:8080/image/procuct/${products.image}`
                  : ""
              }
              style={{
                width: "450px",
                height: "450px",
              }}
            />
          </div>
          <div className="itemRight">
            <div>
              <h2 className="nameProduct">
                {products !== undefined ? `${products.nameProduct}` : ""}
              </h2>
              <div className="reviewProduct">
                <div className="review-Damua">Đã bán:500</div>
                <div className="review-Danhgia">450 Đánh giá</div>
              </div>

              <div className="price-product">
                <div className="origin-price">
                  ₫ {products !== undefined ? `${products.price}` : ""}
                </div>
                <div className="price-buy">₫232.000</div>
                <div className="discount">35% GIẢM</div>
              </div>

              <div className="qualiti-product">
                <span>Số lượng</span>
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={3}
                  onChange={onChange}
                />
                <span className="avaliable-product">
                  {products !== undefined ? `${products.quantity}` : ""} sản
                  phẩm có sẵn
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                <Button
                  size="large"
                  shape="round"
                  type="danger"
                  // onClick={
                  //     addToCarthandler
                  // }
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
              <div className="policy">
                <div className="return-policy">7 ngày miễn phí trả hàng</div>
                <div className="price-ship">Đảm bảo hàng chính hãng</div>
                <div className="price-real">Giao hàng nhanh chóng</div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-more-Product">
          <div className="more-detail">
            <h2 className="title-detail">Chi tiết sản phẩm</h2>
            <Descriptions>
              <Descriptions.Item label="Thương hiệu: ">
                {products !== undefined ? `${products.nameManufacturer}` : ""}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Xuất xứ: ">
                {products !== undefined ? `${products.nameOrigin}` : ""}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Số lượng còn lại: ">
                {products !== undefined ? `${products.quantity}` : ""}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Gửi từ: ">Hà nội</Descriptions.Item>
            </Descriptions>
          </div>
          <div>
            <h2 className="title-detail">Mô tả sản phẩm</h2>
            {products !== undefined
              ? HTMLReactParser(`${products.description}`)
              : ""}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalProduct;
