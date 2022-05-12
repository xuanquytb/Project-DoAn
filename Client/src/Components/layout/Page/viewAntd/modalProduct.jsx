import React, { useState } from "react";
import { Modal, Button, InputNumber, Descriptions } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import { Image } from "antd";

const ModalProduct = ({ visible, onClose }) => {
    function onChange(value) {
        console.log(value);
    }
    return (
        <>
            <Modal
                centered
                visible={visible}
                onCancel={onClose}
                width={1300}
                footer={[]}
            >
                <div className='detailProduct'>
                    <div className='itemLeft' style={{ height: "475px" }}>
                        <Image
                            width={450}
                            src='https://1.bigdata-vn.com/wp-content/uploads/2021/12/1640454560_834_Tong-Hop-Anh-Gai-Xinh-Dep-Nhat-Tuan-Qua.jpg'
                            style={{
                                width: "450px",
                                height: "450px",
                            }}
                        />
                    </div>
                    <div className='itemRight'>
                        <div>
                            <h2 className='nameProduct'>
                                [MUA 2 ĐƯỢC 4 - DUY NHẤT 12.05] Combo Dầu gội và
                                Sữa tắm Romano 650g/chai Attitude
                            </h2>
                            <div className='reviewProduct'>
                                <div className='review-Damua'>Đã bán:500</div>
                                <div className='review-Danhgia'>
                                    450 Đánh giá
                                </div>
                            </div>

                            <div className='price-product'>
                                <div className='origin-price'>₫356.000</div>
                                <div className='price-buy'>₫232.000</div>
                                <div className='discount'>35% GIẢM</div>
                            </div>

                            <div className='qualiti-product'>
                                <span>Số lượng</span>
                                <InputNumber
                                    min={1}
                                    max={10}
                                    defaultValue={3}
                                    onChange={onChange}
                                />
                                <span className='avaliable-product'>
                                    888 sản phẩm có sẵn
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    marginTop: "15px",
                                }}
                            >
                                <Button
                                    size='large'
                                    shape='round'
                                    type='danger'
                                    // onClick={
                                    //     addToCarthandler
                                    // }
                                >
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                            <div className='policy'>
                                <div className='return-policy'>
                                    7 ngày miễn phí trả hàng
                                </div>
                                <div className='price-ship'>
                                    Đảm bảo hàng chính hãng
                                </div>
                                <div className='price-real'>
                                    Giao hàng nhanh chóng
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail-more-Product'>
                    <div className='more-detail'>
                        <h2 className='title-detail'>Chi tiết sản phẩm</h2>
                        <Descriptions>
                            <Descriptions.Item label='Thương hiệu: '>
                                Cloud Database
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Xuất xứ: '>
                                Cloud Database
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Số lượng còn lại: '>
                                Cloud Database
                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label='Gửi từ: '>
                                Cloud Database
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                    <div>
                        <h2 className='title-detail'>Mô tả sản phẩm</h2>
                        Combo Dầu gội và Sữa tắm cao cấp Romano Attitude sang
                        trọng đẳng cấp 650gr Combo Dầu gội và Sữa tắm cao cấp
                        Romano Attitude với công thức ngăn mồ hôi có bổ sung
                        thành phần diệt khuẩn giúp khô thoáng vượt trội suốt
                        24h. Cặp đôi với nốt hương nồng ấm của Guaiac wood và Hổ
                        phách trầm ngọt, mang đến dấu ấn cho người đàn ông mạnh
                        mẽ, phong cách. Combo gồm 2 sản phẩm với đặc điểm nổi
                        bật: + Dầu gội Romano Attitude: Cho da đầu sạch và tóc
                        chắc khỏe tự nhiên nhờ dưỡng chất từ Pro Vitamin B5. +
                        Sữa tắm Romano Attitude: Bổ sung Sodium PCA giữ ẩm cho
                        da sạch và đầy sức sống. Đặc điểm nổi bật: + Giúp khô
                        thoáng vượt trội suốt 24h. + Hương thơm độc đáo, nam
                        tính. + Làm sạch và làm mềm mượt tóc. + Lưu hương thơm
                        lâu trên tóc, mang lại cảm giác thoải mái tự tin. Hướng
                        dẫn sử dụng: + Làm ướt da đầu, lấy một lượng dầu gội vừa
                        đủ cho vào lòng bàn tay. Massage nhẹ nhàng da đầu và tắm
                        lại với nước. + Sau khi gội đầu, làm ướt da, lấy một
                        lượng sữa tắm vừa đủ cho vào lòng bàn tay hoặc bông tắm
                        tạo bọt rồi massage nhẹ nhàng sau đó tắm lại với nước.
                        Tránh để sữa tắm dây vào mắt, nếu có, rửa kĩ với nước.
                        Hướng dẫn bảo quản: + Bảo quản: nơi khô ráo thoáng mát.
                        + Không bảo quản nơi có nhiệt độ quá cao hoặc quá thấp,
                        tránh ánh sáng trực tiếp. Thông tin sản phẩm + Ngày sản
                        xuất: xem trên bao bì. + HSD: 3 năm kể từ ngày sản xuất.
                        Thông tin thương hiệu: + Romano là thương hiệu hóa mỹ
                        phẩm dành riêng cho nam giới của Tập đoàn đa quốc gia
                        Wipro Unza - một trong những nhà sản xuất và tiếp thị
                        sản phẩm chăm sóc cá nhân hàng đầu Đông Nam Á. Với danh
                        mục sản phẩm đa dạng, bao gồm sản phẩm chăm sóc tóc,
                        chăm sóc da, gel vuốt tóc, lăn khử mùi, nước hoa,...
                        Romano giúp chăm sóc cơ thể toàn diện cho phái mạnh,
                        giúp phái mạnh tự tin vượt qua mọi thử thách để làm chủ
                        cuộc chơi. #ROMANO #RomanoVietNam #Chínhhãng #Sữatắm
                        #Suatam #Attitude ROMANO HƯƠNG THÀNH CÔNG - CHẤT ĐÀN ÔNG
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ModalProduct;
