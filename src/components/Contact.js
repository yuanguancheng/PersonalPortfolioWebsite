import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // 表单验证规则
  const validateForm = () => {
    const newErrors = {};
    
    // 姓名验证
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = '姓名至少需要2个字符';
    }
    
    // 邮箱验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱地址';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    // 主题验证
    if (!formData.subject.trim()) {
      newErrors.subject = '请输入邮件主题';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = '主题至少需要5个字符';
    }
    
    // 消息验证
    if (!formData.message.trim()) {
      newErrors.message = '请输入您的留言内容';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '留言内容至少需要10个字符';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = '留言内容不能超过1000个字符';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 实时验证
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
      // 3秒后清除成功状态
      setTimeout(() => setSubmitStatus(''), 3000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 联系信息数据
  const contactInfo = [
    {
      icon: '📧',
      label: '邮箱',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: '📱',
      label: '电话',
      value: '+86 138 0000 0000',
      link: 'tel:+8613800000000'
    },
    {
      icon: '📍',
      label: '地址',
      value: '中国，北京',
      link: '#'
    },
    {
      icon: '💼',
      label: '微信',
      value: 'wechat_id',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        <p className="section-subtitle">有任何问题或合作意向，欢迎随时联系我</p>
        
        <div className="contact-content">
          {/* 联系信息 */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h3>联系方式</h3>
              <p>选择您喜欢的方式与我取得联系</p>
            </div>
            
            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="contact-item"
                  target={item.link !== '#' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="social-links">
              <h4>关注我的社交媒体</h4>
              <div className="social-icons">
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">💻</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="微博">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="知乎">
                  <span className="social-icon">📚</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* 联系表单 */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h3>发送消息</h3>
              <p>填写下面的表单，我会尽快回复您</p>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">邮箱 *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="请输入您的邮箱地址"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">主题 *</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="请输入邮件主题"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? 'error' : ''}
                required
              />
              {errors.subject && <span className="error-message">{errors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">留言内容 *</label>
              <textarea
                id="message"
                name="message"
                placeholder="请详细描述您的问题或合作意向..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                required
              ></textarea>
              <div className="textarea-info">
                <span className="char-count">{formData.message.length}/1000</span>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>
            
            <div className="form-actions">
              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    发送中...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">✉️</span>
                    发送消息
                  </>
                )}
              </button>
            </div>
            
            {/* 提交状态提示 */}
            {submitStatus === 'success' && (
              <div className="submit-status success">
                <span className="status-icon">✅</span>
                消息发送成功！我会尽快回复您。
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="submit-status error">
                <span className="status-icon">❌</span>
                发送失败，请稍后重试或直接通过邮箱联系我。
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;