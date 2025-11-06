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
            <h3>袁观成 - 前端开发者</h3>
            <p>专注于现代化Web开发，创造优秀的用户体验</p>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> 1982097578@qq.com</p>
              <p><i className="fas fa-phone"></i> +86 150 0728 4553</p>
              <p><i className="fas fa-map-marker-alt"></i> 中国，湖北</p>
            </div>
          </div>
          <div className="footer-links">
            <h4>快速导航</h4>
            <ul>
              <li><a href="#hero">首页</a></li>
              <li><a href="#about">关于我</a></li>
              <li><a href="#skills">技能展示</a></li>
              <li><a href="#projects">项目作品</a></li>
              <li><a href="#contact">联系合作</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>社交媒体</h4>
            <div className="social-links">
              <a href="https://github.com/yuanguancheng" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://gitee.com/yuan-guanchen" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-git-alt"></i>
                Gitee
              </a>
              <a href="https://juejin.cn/user/2138965851777035" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-blog"></i>
                掘金
              </a>
              <a href="https://www.zhihu.com/people/ygcygv" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-zhihu"></i>
                知乎
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 袁观成. 保留所有权利. | 设计开发: 袁观成</p>
          <p>最后更新: {new Date().getFullYear()}年{new Date().getMonth() + 1}月{new Date().getDate()}日</p>
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