import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // 项目数据
  const projects = [
    {
      id: 1,
      title: '个人作品集网站',
      description: '使用React和Webpack构建的现代化响应式个人作品集网站，具备完整的组件化架构和优雅的UI设计。',
      technologies: ['React', 'Webpack', 'CSS3', 'JavaScript', 'HTML5'],
      status: 'completed',
      category: 'frontend',
      image: '🌐',
      demoUrl: '#',
      githubUrl: '#',
      features: ['响应式设计', '组件化开发', 'CSS动画', 'SEO优化']
    },
    {
      id: 2,
      title: '任务管理应用',
      description: '基于React和Node.js的全栈任务管理应用，支持实时协作和多种任务状态管理。',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      status: 'in-progress',
      category: 'fullstack',
      image: '📋',
      demoUrl: '#',
      githubUrl: '#',
      features: ['实时协作', '用户认证', '数据可视化', 'REST API']
    },
    {
      id: 3,
      title: '电商平台前端',
      description: '使用Vue.js构建的现代化电商平台前端，具备商品展示、购物车和支付流程。',
      technologies: ['Vue.js', 'Vuex', 'Vue Router', 'Element UI', 'Axios'],
      status: 'completed',
      category: 'frontend',
      image: '🛒',
      demoUrl: '#',
      githubUrl: '#',
      features: ['商品搜索', '购物车管理', '用户评价', '响应式布局']
    },
    {
      id: 4,
      title: '数据可视化仪表板',
      description: '基于D3.js和React的数据可视化项目，展示复杂数据的交互式图表和仪表板。',
      technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js', 'Sass'],
      status: 'planned',
      category: 'dataviz',
      image: '📊',
      demoUrl: '#',
      githubUrl: '#',
      features: ['交互式图表', '数据过滤', '实时更新', '自定义主题']
    },
    {
      id: 5,
      title: '移动端天气应用',
      description: '使用React Native开发的跨平台天气应用，支持地理位置和天气预警功能。',
      technologies: ['React Native', 'Expo', 'Redux', 'Weather API', 'Geolocation'],
      status: 'in-progress',
      category: 'mobile',
      image: '🌤️',
      demoUrl: '#',
      githubUrl: '#',
      features: ['跨平台', '实时天气', '地理位置', '推送通知']
    },
    {
      id: 6,
      title: '博客平台后端',
      description: '基于Node.js和GraphQL的博客平台后端API，支持文章管理和用户权限控制。',
      technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'JWT', 'Docker'],
      status: 'completed',
      category: 'backend',
      image: '📝',
      demoUrl: '#',
      githubUrl: '#',
      features: ['GraphQL API', '用户认证', '文件上传', 'Docker部署']
    }
  ];

  // 项目分类
  const categories = [
    { id: 'all', label: '全部项目', count: projects.length },
    { id: 'frontend', label: '前端项目', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: '后端项目', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: '全栈项目', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', label: '移动端', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'dataviz', label: '数据可视化', count: projects.filter(p => p.category === 'dataviz').length }
  ];

  // 过滤项目
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // 状态标签样式
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-in-progress';
      case 'planned': return 'status-planned';
      default: return 'status-planned';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return '已完成';
      case 'in-progress': return '进行中';
      case 'planned': return '规划中';
      default: return '规划中';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">项目展示</h2>
        <p className="section-subtitle">探索我的技术实践和创意实现</p>
        
        {/* 项目分类筛选 */}
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>
        
        {/* 项目网格 */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {/* 项目头部 */}
              <div className="project-header">
                <div className="project-image">
                  <span className="project-icon">{project.image}</span>
                </div>
                <div className="project-title-section">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`status ${getStatusClass(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>
              
              {/* 项目描述 */}
              <p className="project-description">{project.description}</p>
              
              {/* 项目特性 */}
              <div className="project-features">
                <h4>主要特性</h4>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* 技术标签 */}
              <div className="project-technologies">
                <h4>技术栈</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* 项目操作 */}
              <div className="project-actions">
                <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">👁️</span>
                  在线演示
                </a>
                <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">💻</span>
                  源码查看
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* 空状态 */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <h3>暂无项目</h3>
            <p>该分类下暂时没有项目，请选择其他分类查看。</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;