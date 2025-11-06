# 个人作品集网站

一个使用React和Webpack构建的现代化个人作品集网站，具有响应式设计、动画效果和优化的性能。

## 🚀 在线演示

[查看在线演示](https://yuanguancheng.github.io/PersonalPortfolioWebsite/)

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Webpack 5
- **样式**: CSS3 (Flexbox/Grid) + CSS动画
- **语言**: JavaScript (ES6+)
- **部署平台**: GitHub Pages
- **代码优化**: Babel, Terser, CSS Minimizer

## 📁 项目结构

```
PersonalPortfolioWebsite/
├── public/
│   └── index.html          # HTML模板
├── src/
│   ├── components/         # React组件
│   │   ├── Header.js      # 导航栏组件
│   │   ├── Hero.js        # 首页英雄区域
│   │   ├── About.js       # 关于我部分
│   │   ├── Skills.js      # 技能展示
│   │   ├── Projects.js    # 项目展示
│   │   ├── Contact.js     # 联系表单
│   │   └── Footer.js      # 页脚
│   ├── styles/            # CSS样式文件
│   │   ├── global.css     # 全局样式
│   │   ├── animations.css # 动画系统
│   │   ├── Header.css     # 导航栏样式
│   │   ├── Hero.css       # 首页样式
│   │   ├── About.css      # 关于我样式
│   │   ├── Skills.css     # 技能样式
│   │   ├── Projects.css   # 项目样式
│   │   ├── Contact.css    # 联系样式
│   │   └── Footer.css     # 页脚样式
│   ├── utils/             # 工具函数
│   │   └── animations.js  # 动画系统实现
│   ├── App.js             # 主应用组件
│   └── index.js           # 应用入口点
├── package.json           # 项目配置和依赖
├── webpack.config.js      # Webpack配置
├── .babelrc              # Babel配置
└── .gitignore           # Git忽略文件
```

## ✨ 功能特性

- ✅ 响应式设计（支持手机和电脑）
- ✅ 现代化导航栏（滚动高亮）
- ✅ 关于我简介部分（动画效果）
- ✅ 技能进度条展示
- ✅ 项目卡片展示（悬停效果）
- ✅ 联系表单（表单验证）
- ✅ 平滑滚动导航
- ✅ 滚动动画系统（IntersectionObserver）
- ✅ 性能优化（代码分割、资源压缩）
- ✅ SEO优化（Meta标签、结构化数据）
- ✅ 无障碍访问（ARIA标签、语义化HTML）

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 开发模式运行

```bash
npm run dev
# 或
npm start
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产版本

```bash
npm run preview
```

## 🌐 部署指南

### GitHub Pages部署（推荐）

1. **安装gh-pages包**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **更新package.json脚本**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **部署到GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **在GitHub仓库设置中启用GitHub Pages**
   - Settings > Pages > Source > gh-pages branch

### 其他部署平台

- **Vercel**: 零配置部署，自动优化
- **Netlify**: 表单处理，重定向规则
- **AWS S3**: 静态网站托管

## 🧪 测试指南

### 本地测试

1. **功能测试**
   ```bash
   npm start
   # 测试所有交互功能
   ```

2. **构建测试**
   ```bash
   npm run build
   # 检查构建是否成功
   ```

3. **性能测试**
   ```bash
   npm run build:analyze
   # 分析打包体积
   ```

### 跨浏览器测试

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 设备测试

- 移动设备 (iOS/Android)
- 平板设备 (iPad/Android Tablet)
- 桌面设备 (不同分辨率)

## 🛠️ 开发说明

### 自定义内容

1. **个人信息**: 编辑各个组件中的文本内容
2. **技能**: 修改 `Skills.js` 中的技能数组
3. **项目**: 更新 `Projects.js` 中的项目数据
4. **样式**: 调整CSS文件中的颜色和样式
5. **动画**: 修改 `animations.css` 和 `utils/animations.js`

### 添加新组件

1. 在 `src/components/` 目录创建新组件
2. 在 `src/styles/` 目录创建对应的CSS文件
3. 在 `App.js` 中导入并使用新组件

### 性能优化

1. **代码分割**: Webpack自动分割代码
2. **资源压缩**: 生产环境自动压缩
3. **图片优化**: 使用image-webpack-loader
4. **缓存策略**: 设置适当的缓存头

## 📊 性能指标

- **首次内容绘制(FCP)**: < 1.5秒
- **最大内容绘制(LCP)**: < 2.5秒
- **累积布局偏移(CLS)**: < 0.1
- **首次输入延迟(FID)**: < 100毫秒

## 🔧 故障排除

### 常见问题

1. **部署后页面空白**
   - 检查webpack配置中的publicPath
   - 确认资源路径是否正确

2. **路由刷新404**
   - 检查路由配置是否正确
   - 确认GitHub Pages设置正确

3. **CSS样式未加载**
   - 检查CSS文件路径
   - 确认publicPath配置

## 📝 更新日志

### v1.0.0 (2025-11-06)
- 初始版本发布
- 基础功能实现
- 响应式设计
- GitHub Pages部署

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👤 作者

**袁观成** - [GitHub](https://github.com/yuanguancheng) - [您的邮箱](1982097578@qq.com)

## 🙏 致谢

- [React](https://reactjs.org/) - UI框架
- [Webpack](https://webpack.js.org/) - 构建工具
- [GitHub Pages](https://pages.github.com/) - 托管服务