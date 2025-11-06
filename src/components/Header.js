import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 导航菜单项
  const navItems = [
    { id: 'hero', label: '首页' },
    { id: 'about', label: '关于我' },
    { id: 'skills', label: '技能' },
    { id: 'projects', label: '项目' },
    { id: 'contact', label: '联系' }
  ];

  // 滚动监听效果
  useEffect(() => {
    const handleScroll = () => {
      // 检测是否滚动
      setIsScrolled(window.scrollY > 50);
      
      // 检测当前活跃区域
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 初始检测
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换菜单
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 滚动到指定区域
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // 导航栏高度
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // 关闭菜单（点击外部区域）
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <h2 onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
            我的作品集
          </h2>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="切换菜单"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* 移动端菜单遮罩 */}
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;