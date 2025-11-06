import React, { useState, useEffect } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  // 技能分类数据
  const skillCategories = [
    {
      title: '前端技术',
      icon: '🎨',
      skills: [
        { name: 'HTML5', level: 90, icon: '🌐', color: '#e34c26' },
        { name: 'CSS3', level: 85, icon: '🎯', color: '#264de4' },
        { name: 'JavaScript', level: 80, icon: '⚡', color: '#f7df1e' },
        { name: 'React', level: 75, icon: '⚛️', color: '#61dafb' },
        { name: 'Vue.js', level: 70, icon: '🟢', color: '#4fc08d' },
        { name: 'TypeScript', level: 65, icon: '🔷', color: '#3178c6' }
      ]
    },
    {
      title: '构建工具',
      icon: '🛠️',
      skills: [
        { name: 'Webpack', level: 70, icon: '📦', color: '#8dd6f9' },
        { name: 'Vite', level: 75, icon: '⚡', color: '#646cff' },
        { name: 'Git', level: 80, icon: '📚', color: '#f05032' },
        { name: 'NPM', level: 85, icon: '📦', color: '#cb3837' }
      ]
    },
    {
      title: 'UI/设计',
      icon: '🎨',
      skills: [
        { name: 'Responsive Design', level: 85, icon: '📱', color: '#ff6b6b' },
        { name: 'CSS Grid/Flexbox', level: 90, icon: '📐', color: '#4ecdc4' },
        { name: 'UI/UX Design', level: 70, icon: '✨', color: '#45b7d1' },
        { name: 'Figma', level: 65, icon: '🎨', color: '#f24e1e' }
      ]
    }
  ];

  // 动画效果：技能条加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skillCategories.flatMap(cat => cat.skills));
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">技术栈</h2>
        <p className="section-subtitle">我在前端开发领域积累的技能和经验</p>
        
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{ animationDelay: `${skillIndex * 0.1}s` }}
                  >
                    <div className="skill-info">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: animatedSkills.includes(skill) ? `${skill.level}%` : '0%',
                          backgroundColor: skill.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* 技能总结 */}
        <div className="skills-summary">
          <div className="summary-item">
            <h4>持续学习</h4>
            <p>保持对新技术的好奇心和学习的热情</p>
          </div>
          <div className="summary-item">
            <h4>代码质量</h4>
            <p>注重代码的可读性、可维护性和性能优化</p>
          </div>
          <div className="summary-item">
            <h4>团队协作</h4>
            <p>良好的沟通能力和团队合作精神</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;