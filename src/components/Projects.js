import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: '个人作品集网站',
      description: '使用React和Webpack构建的响应式个人作品集网站',
      technologies: ['React', 'Webpack', 'CSS3', 'JavaScript'],
      status: '进行中'
    },
    {
      id: 2,
      title: '待定项目1',
      description: '即将开始的新项目',
      technologies: ['React', 'Node.js', 'MongoDB'],
      status: '规划中'
    },
    {
      id: 3,
      title: '待定项目2',
      description: '即将开始的新项目',
      technologies: ['Vue', 'Express', 'MySQL'],
      status: '规划中'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">项目展示</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status === '进行中' ? 'in-progress' : 'planned'}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="btn btn-outline">查看详情</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;