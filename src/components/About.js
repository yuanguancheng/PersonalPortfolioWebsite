import React from 'react';
import '../styles/About.css';

const About = () => {
  // 个人兴趣和技术栈
  const interests = [
    { icon: '💻', name: '前端开发', description: 'React, Vue, JavaScript' },
    { icon: '🎨', name: 'UI/UX设计', description: '用户体验优化' },
    { icon: '🚀', name: '性能优化', description: '代码质量和性能' },
    { icon: '📱', name: '响应式设计', description: '移动端适配' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll animate-fade-up">关于我</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="intro-section animate-on-scroll animate-fade-right">
              <h3>你好！我是前端开发者</h3>
              <p>
                我是一名充满热情的前端开发者，专注于创建现代化、响应式的Web应用。
                热爱学习新技术，享受将创意转化为代码的过程。
              </p>
              <p>
                目前主要使用React生态系统进行开发，同时也对用户体验设计和性能优化有浓厚兴趣。
                我相信好的代码不仅需要功能完善，更需要易于维护和扩展。
              </p>
            </div>
            
            <div className="interests-section animate-on-scroll animate-fade-right animate-delay-200">
              <h4>我的兴趣领域</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div 
                    key={index} 
                    className="interest-item card-hover animate-on-scroll"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="interest-icon">{interest.icon}</div>
                    <div className="interest-content">
                      <h5>{interest.name}</h5>
                      <p>{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-stats animate-on-scroll animate-fade-up animate-delay-300">
              {[
                { value: '2+', label: '年开发经验' },
                { value: '10+', label: '完成项目' },
                { value: '100%', label: '代码质量' },
                { value: '24/7', label: '学习热情' }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="stat card-hover"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="avatar-container animate-on-scroll animate-fade-left">
              <div className="avatar">
                <div className="avatar-image">
                  <img 
                    src="./images/profile.jpg" 
                    alt="个人头像" 
                    className="avatar-photo"
                  />
                </div>
                <div className="avatar-glow"></div>
              </div>
              <div className="avatar-info">
                <h4>前端开发者</h4>
                <p>专注于现代化Web开发</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;