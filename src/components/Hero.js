import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>欢迎来到我的作品集</h1>
          <p>前端开发者 | React 爱好者 | 持续学习者</p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              查看项目
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              联系我
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <span>头像</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;