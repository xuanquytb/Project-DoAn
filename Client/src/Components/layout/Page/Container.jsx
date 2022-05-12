import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, InputNumber } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
import { Image } from "antd";
import "../../Style/detailProduct.css";
import { Descriptions } from "antd";

const Container = () => {
    const [visible, setVisible] = useState(false);
    function onChange(value) {
        console.log("changed", value);
    }
    return (
        <>
            <div className='main'>
                <div className='slider slider__noTop'>
                    <div className='slider__section9'>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-1.png'
                                alt=''
                            />
                        </div>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-2.png'
                                alt=''
                            />
                        </div>
                        <div className='slider__section9-item'>
                            <img
                                src='../../../image/slider__body/image-8-3.png'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='content__head' id='content__sticky'>
                        <div className='content__heading'>
                            <h3>Gợi Ý Hôm Nay</h3>
                        </div>
                        <div className='content__lists'>
                            <div className='content__list-item border__active'>
                                <img
                                    src='../../../image/content/icon1.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Dành cho bạn
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon2.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Flash coupon 50K
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon3.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Giảm đến 40%
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon4.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Deal siêu hot
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon5.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Rẻ vô đối
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon6.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Đi chợ siêu sale
                                </span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon7.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>Hàng mới</span>
                            </div>
                            <div className='content__list-item'>
                                <img
                                    src='../../../image/content/icon8.png'
                                    alt=''
                                    className='list-item-img'
                                />
                                <span className='list-item-info'>
                                    Xu hướng thời trang
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='content__body'>
                        <div className='grid wide'>
                            <div className='row no-gutters content__active'>
                                <div
                                    className='col l-2 c-6 m-4'
                                    onClick={() => setVisible(true)}
                                >
                                    <div className='content__body-item'>
                                        <img
                                            src='../../../image/content/image1.png'
                                            alt=''
                                            className='content__body-img'
                                        />
                                        <div className='content__body-info'>
                                            <span className='info__name'>
                                                Điện thoại Samsung Galaxy Z
                                                Fold2 5G (128GB / 256GB) - Hàng
                                                chính hãng Sam Sung Việt Nam
                                            </span>
                                            <div className='info__vote'>
                                                <div className='info__vote-icon'>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                </div>
                                                <span className='info__vote-quantily'>
                                                    124 đã bán
                                                </span>
                                            </div>
                                            <div className='slider__content-price'>
                                                <span className='item__price'>
                                                    32.743.000 đ
                                                </span>
                                                <span className='item__discount'>
                                                    -35%
                                                </span>
                                            </div>
                                            <img
                                                src='https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png'
                                                alt=''
                                                width='124px'
                                                height='18px'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Modal
                                    centered
                                    visible={visible}
                                    onOk={() => setVisible(false)}
                                    onCancel={() => setVisible(false)}
                                    width={1300}
                                >
                                    <div className='detailProduct'>
                                        <div
                                            className='itemLeft'
                                            style={{ height: "475px" }}
                                        >
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
                                                    [MUA 2 ĐƯỢC 4 - DUY NHẤT
                                                    12.05] Combo Dầu gội và Sữa
                                                    tắm Romano 650g/chai
                                                    Attitude
                                                </h2>
                                                <div className='reviewProduct'>
                                                    <div className='review-Damua'>
                                                        Đã bán:500
                                                    </div>
                                                    <div className='review-Danhgia'>
                                                        450 Đánh giá
                                                    </div>
                                                </div>

                                                <div className='price-product'>
                                                    <div className='origin-price'>
                                                        ₫356.000
                                                    </div>
                                                    <div className='price-buy'>
                                                        ₫232.000
                                                    </div>
                                                    <div className='discount'>
                                                        35% GIẢM
                                                    </div>
                                                </div>
                                                <div className='color-product'>
                                                    <h3>Màu sắc </h3>
                                                    <Button className='color1'>
                                                        ₫356.000
                                                    </Button>
                                                    <Button className='color2'>
                                                        ₫232.000
                                                    </Button>
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
                                                        marginTop: "4px",
                                                        marginBottom: "54px",
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
                                            <h2>Chi tiết sản phẩm</h2>
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
                                            <h2>Mô tả sản phẩm</h2>
                                            Combo Dầu gội và Sữa tắm cao cấp
                                            Romano Attitude sang trọng đẳng cấp
                                            650gr Combo Dầu gội và Sữa tắm cao
                                            cấp Romano Attitude với công thức
                                            ngăn mồ hôi có bổ sung thành phần
                                            diệt khuẩn giúp khô thoáng vượt trội
                                            suốt 24h. Cặp đôi với nốt hương nồng
                                            ấm của Guaiac wood và Hổ phách trầm
                                            ngọt, mang đến dấu ấn cho người đàn
                                            ông mạnh mẽ, phong cách. Combo gồm 2
                                            sản phẩm với đặc điểm nổi bật: + Dầu
                                            gội Romano Attitude: Cho da đầu sạch
                                            và tóc chắc khỏe tự nhiên nhờ dưỡng
                                            chất từ Pro Vitamin B5. + Sữa tắm
                                            Romano Attitude: Bổ sung Sodium PCA
                                            giữ ẩm cho da sạch và đầy sức sống.
                                            Đặc điểm nổi bật: + Giúp khô thoáng
                                            vượt trội suốt 24h. + Hương thơm độc
                                            đáo, nam tính. + Làm sạch và làm mềm
                                            mượt tóc. + Lưu hương thơm lâu trên
                                            tóc, mang lại cảm giác thoải mái tự
                                            tin. Hướng dẫn sử dụng: + Làm ướt da
                                            đầu, lấy một lượng dầu gội vừa đủ
                                            cho vào lòng bàn tay. Massage nhẹ
                                            nhàng da đầu và tắm lại với nước. +
                                            Sau khi gội đầu, làm ướt da, lấy một
                                            lượng sữa tắm vừa đủ cho vào lòng
                                            bàn tay hoặc bông tắm tạo bọt rồi
                                            massage nhẹ nhàng sau đó tắm lại với
                                            nước. Tránh để sữa tắm dây vào mắt,
                                            nếu có, rửa kĩ với nước. Hướng dẫn
                                            bảo quản: + Bảo quản: nơi khô ráo
                                            thoáng mát. + Không bảo quản nơi có
                                            nhiệt độ quá cao hoặc quá thấp,
                                            tránh ánh sáng trực tiếp. Thông tin
                                            sản phẩm + Ngày sản xuất: xem trên
                                            bao bì. + HSD: 3 năm kể từ ngày sản
                                            xuất. Thông tin thương hiệu: +
                                            Romano là thương hiệu hóa mỹ phẩm
                                            dành riêng cho nam giới của Tập đoàn
                                            đa quốc gia Wipro Unza - một trong
                                            những nhà sản xuất và tiếp thị sản
                                            phẩm chăm sóc cá nhân hàng đầu Đông
                                            Nam Á. Với danh mục sản phẩm đa
                                            dạng, bao gồm sản phẩm chăm sóc tóc,
                                            chăm sóc da, gel vuốt tóc, lăn khử
                                            mùi, nước hoa,... Romano giúp chăm
                                            sóc cơ thể toàn diện cho phái mạnh,
                                            giúp phái mạnh tự tin vượt qua mọi
                                            thử thách để làm chủ cuộc chơi.
                                            #ROMANO #RomanoVietNam #Chínhhãng
                                            #Sữatắm #Suatam #Attitude ROMANO
                                            HƯƠNG THÀNH CÔNG - CHẤT ĐÀN ÔNG
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                            <div className='content__show'>
                                <a
                                    className='content__show-link'
                                    id='btn__showMore'
                                >
                                    Xem Thêm
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider slider__noTop'></div>
            </div>
        </>
    );
};

export default Container;
