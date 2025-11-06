import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>个人作品集</h3>
            <p>感谢访问我的作品集网站</p>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> email@example.com</p>
              <p><i className="fas fa-phone"></i> +86 138 0000 0000</p>
              <p><i className="fas fa-map-marker-alt"></i> 中国，北京</p>
            </div>
          </div>
          <div className="footer-links">
            <h4>快速链接</h4>
            <ul>
              <li><a href="#hero">首页</a></li>
              <li><a href="#about">关于我</a></li>
              <li><a href="#skills">技能</a></li>
              <li><a href="#projects">项目</a></li>
              <li><a href="#contact">联系</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>关注我</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://weibo.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-weibo"></i>
                微博
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 个人作品集. 保留所有权利. | 设计开发: 您的姓名</p>
          <p>最后更新: {new Date().getFullYear()}年{new Date().getMonth() + 1}月</p>
        </div>
      </div>
      
      {/* 返回顶部按钮 */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="返回顶部"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  );
};

export default Footer;