import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { scrollAnimations } from './utils/animations';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // 初始化滚动动画
    scrollAnimations.observeAll('.animate-on-scroll');
    scrollAnimations.observeAll('.animate-fade-up');
    scrollAnimations.observeAll('.animate-fade-down');
    scrollAnimations.observeAll('.animate-fade-left');
    scrollAnimations.observeAll('.animate-fade-right');
    scrollAnimations.observeAll('.animate-scale');
    scrollAnimations.observeAll('.animate-rotate');

    // 页面加载动画
    document.body.classList.add('page-transition');

    // 清理函数
    return () => {
      scrollAnimations.destroy();
    };
  }, []);

  return (
    <div className="App">
      {/* 滚动进度指示器 */}
      <div className="scroll-progress" id="scroll-progress"></div>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;