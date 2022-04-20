import React from "react";
import "../Style/Register.css";

const Register = () => {
    const username = "";
    const password = "";
    return (
        <div className='Form-Register'>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='Container-Register'>
                <div className='box'>
                    <div className='box-squade' delay='--i:1;'></div>
                    <div className='box-squade' delay='--i:2;'></div>
                    <div className='box-squade' delay='--i:3;'></div>
                    <div className='box-squade' delay='--i:4;'></div>
                    <div className='form-Register'>
                        <div className='form-left'>
                            <div className='image'>
                                <img src='' alt='' />
                            </div>
                            <div className='textImage'>
                                <p>Xin chào</p>
                            </div>
                        </div>
                        <div className='form-right'>
                            <h2>Đăng ký</h2>
                            <div className='form-register'>
                                <form action='' className='from-input'>
                                    <div className='input-Value'>
                                        <lable htmlFor=''>Họ và tên</lable>
                                        <input
                                            className='input-text-Value'
                                            type='text'
                                            placeholder='Tên đầy đủ'
                                        />
                                    </div>
                                    <div className='input-Value'>
                                        <lable htmlFor=''>Email</lable>
                                        <input
                                            className='input-text-Value'
                                            type='text'
                                            placeholder='tonydev@gmail.com'
                                        />
                                    </div>
                                    <div className='input-Value'>
                                        <lable htmlFor=''>Phone</lable>
                                        <input
                                            className='input-text-Value'
                                            type='text'
                                            placeholder='+84xxxxxxxxx'
                                        />
                                    </div>
                                    <div className='input-Value input-Password'>
                                        <div className='input-Password-left'>
                                            <lable htmlFor=''>Mật khẩu</lable>
                                            <input
                                                type='text'
                                                placeholder='*****************'
                                            />
                                        </div>
                                        <div className='input-Password-right'>
                                            <lable htmlFor=''>
                                                Nhập lại mật khẩu
                                            </lable>
                                            <input
                                                type='text'
                                                placeholder='*****************'
                                            />
                                        </div>
                                    </div>

                                    <div className='btn-form'>
                                        <div className='more'>
                                            <span className='more-detail'>
                                                Bạn đã có tài khoản?
                                            </span>
                                            <a href='http://localhost:8080/login'>
                                                Sign in
                                            </a>
                                        </div>
                                        <div className='btn-box'>
                                            <button className='btn-regiter'>
                                                Đăng ký
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
