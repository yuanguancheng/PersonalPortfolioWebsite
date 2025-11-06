import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>个人作品集</h3>
            <p>感谢访问我的作品集网站</p>
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
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">微博</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 个人作品集. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;