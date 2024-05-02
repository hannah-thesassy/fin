import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import '../components/commons/Logo';
import Logo from '../components/commons/Logo'
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thực hiện kiểm tra thông tin đăng nhập, ví dụ: tạm thời kiểm tra username và password là "admin"
    if (formData.username === 'admin' && formData.password === 'admin') {
      // Đăng nhập thành công, chuyển hướng đến trang dashboard
      navigate("/hospital-manage/dashboard");
    } else {
      // Đăng nhập không thành công, xử lý tại đây (ví dụ: hiển thị thông báo lỗi)
      alert('Bạn nhập sai Tài khoản hoặc Mật khẩu');
    }
  };

  return (
    <div className='login-page'>
        <Logo/>
        <h2>BKMEC</h2>
        <div className='login-form'>
            <h1>Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label className='login-lable' >Tài khoản</label>
                <input className='login-input' type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                <label className='login-lable' >Mật khẩu</label>
                <input className='login-input' type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button className='login-btn' type="submit">Đăng nhập</button>
            </form>
        </div>
        <img className="img-logo" src='src\assets\Group 2.png'></img>
    </div>
  );
};

export default Login;
