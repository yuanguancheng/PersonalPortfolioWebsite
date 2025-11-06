import React from 'react';
import '../styles/Hero.css';
import { smoothScrollTo } from '../utils/animations';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="animate-on-scroll animate-fade-down">欢迎来到我的作品集</h1>
          <p className="animate-on-scroll animate-fade-down animate-delay-200">
            前端开发者 | React 爱好者 | 持续学习者
          </p>
          <div className="hero-buttons animate-on-scroll animate-fade-down animate-delay-400">
            <button 
              className="btn btn-primary btn-interactive"
              onClick={() => smoothScrollTo('#projects', 80)}
            >
              查看项目
            </button>
            <button 
              className="btn btn-secondary btn-interactive"
              onClick={() => smoothScrollTo('#contact', 80)}
            >
              联系我
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder animate-on-scroll animate-scale">
            <span>头像</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;