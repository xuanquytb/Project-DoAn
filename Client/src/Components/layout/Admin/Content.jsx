import React from "react";
import "antd/dist/antd.css";
import "../../Style/base.css";
import { Layout, Menu, Button } from "antd";

const Content = () => {
  return (
    <>
      <div>
        <div className="main-content">
          <span>Danh sách sản phẩm </span>
          <div className="tool">
            <div className="btn-add">
              {/* <Button className="add-new">Thêm Mới</Button> */}
            </div>
            <input
              type="text"
              className="text-find"
              placeholder="nhập từ khóa"
            />
          </div>
        </div>
        <table>
          <tr>
            <th>#</th>
            <th>Tên ngành hàng</th>
            <th>Mô tả</th>
            <th>Hành động</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Ngành hàng điện tử</td>
            <td>Các thiết bị điện tử như điện thoại,máy tính bảng,..</td>
            <td>
              <button className="edit">Sửa</button>
              <button className="remove">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ngành hàng đời sống</td>
            <td>Các đồ như dây buộc tóc,...</td>
            <td>
              <button className="edit">Sửa</button>
              <button className="remove">Xóa</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ngành hàng gia dụng</td>
            <td>Các thiết bị gia dụng như rổ,giá,...</td>
            <td>
              <button className="edit">Sửa</button>
              <button className="remove">Xóa</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Content;
