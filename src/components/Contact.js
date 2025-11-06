import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>联系方式</h3>
            <div className="contact-item">
              <strong>邮箱:</strong>
              <span>your.email@example.com</span>
            </div>
            <div className="contact-item">
              <strong>电话:</strong>
              <span>+86 138 0000 0000</span>
            </div>
            <div className="contact-item">
              <strong>地址:</strong>
              <span>中国，北京</span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="您的姓名"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="您的邮箱"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="请输入您的留言"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">发送消息</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;