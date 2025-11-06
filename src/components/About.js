import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              我是一名充满热情的前端开发者，专注于创建现代化、响应式的Web应用。
              热爱学习新技术，享受将创意转化为代码的过程。
            </p>
            <p>
              目前主要使用React生态系统进行开发，同时也对用户体验设计和性能优化有浓厚兴趣。
              我相信好的代码不仅需要功能完善，更需要易于维护和扩展。
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>年开发经验</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>完成项目</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>代码质量</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>个人照片</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;