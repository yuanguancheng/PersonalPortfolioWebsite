import React from 'react';
import '../styles/ResponsiveTest.css';

const ResponsiveTest = () => {
  const breakpoints = [
    { name: '超小屏幕', maxWidth: 480, description: '手机竖屏' },
    { name: '小屏幕', maxWidth: 768, description: '手机横屏/小平板' },
    { name: '中等屏幕', maxWidth: 1024, description: '平板/小桌面' },
    { name: '大屏幕', maxWidth: 1280, description: '桌面' },
    { name: '超大屏幕', minWidth: 1536, description: '大桌面' }
  ];

  return (
    <div className="responsive-test">
      <div className="container">
        <h2 className="section-title">响应式设计测试</h2>
        <p className="section-subtitle">
          当前屏幕宽度: <span id="current-width">{window.innerWidth}px</span>
        </p>
        
        <div className="breakpoint-indicators">
          {breakpoints.map((bp, index) => (
            <div key={index} className="breakpoint-indicator">
              <div className="breakpoint-name">{bp.name}</div>
              <div className="breakpoint-range">
                {bp.maxWidth ? `≤ ${bp.maxWidth}px` : `≥ ${bp.minWidth}px`}
              </div>
              <div className="breakpoint-description">{bp.description}</div>
            </div>
          ))}
        </div>

        <div className="test-grid">
          <div className="test-item">
            <h3>网格布局测试</h3>
            <div className="grid-test">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="grid-item">
                  项目 {i + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="test-item">
            <h3>字体大小测试</h3>
            <div className="typography-test">
              <p className="text-xs">超小文本 (12px)</p>
              <p className="text-sm">小文本 (14px)</p>
              <p className="text-base">基础文本 (16px)</p>
              <p className="text-lg">大文本 (18px)</p>
              <p className="text-xl">超大文本 (20px)</p>
            </div>
          </div>

          <div className="test-item">
            <h3>按钮测试</h3>
            <div className="button-test">
              <button className="btn btn-primary">主要按钮</button>
              <button className="btn btn-secondary">次要按钮</button>
              <button className="btn btn-outline">轮廓按钮</button>
            </div>
          </div>

          <div className="test-item">
            <h3>图片响应式测试</h3>
            <div className="image-test">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%233498db'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24'%3E响应式图片%3C/text%3E%3C/svg%3E" 
                alt="响应式图片测试"
                className="responsive-image"
              />
            </div>
          </div>
        </div>

        <div className="device-emulation">
          <h3>设备模拟</h3>
          <div className="device-buttons">
            <button className="device-btn" data-width="375">iPhone 12</button>
            <button className="device-btn" data-width="768">iPad</button>
            <button className="device-btn" data-width="1024">平板横屏</button>
            <button className="device-btn" data-width="1440">桌面</button>
            <button className="device-btn" data-width="1920">大桌面</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;