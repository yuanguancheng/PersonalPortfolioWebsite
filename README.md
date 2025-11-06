# 个人作品集网站

一个使用React和Webpack构建的现代化个人作品集网站。

## 技术栈

- **前端框架**: React 18
- **构建工具**: Webpack 5
- **样式**: CSS3 (Flexbox/Grid)
- **语言**: JavaScript (ES6+)

## 项目结构

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
│   │   ├── Header.css     # 导航栏样式
│   │   ├── Hero.css       # 首页样式
│   │   ├── About.css      # 关于我样式
│   │   ├── Skills.css     # 技能样式
│   │   ├── Projects.css   # 项目样式
│   │   ├── Contact.css    # 联系样式
│   │   └── Footer.css     # 页脚样式
│   ├── App.js             # 主应用组件
│   └── index.js           # 应用入口点
├── package.json           # 项目配置和依赖
├── webpack.config.js      # Webpack配置
├── .babelrc              # Babel配置
└── .gitignore           # Git忽略文件
```

## 功能特性

- ✅ 响应式设计（支持手机和电脑）
- ✅ 现代化导航栏
- ✅ 关于我简介部分
- ✅ 技能进度条展示
- ✅ 项目卡片展示
- ✅ 联系表单
- ✅ 平滑滚动导航
- ✅ CSS动画效果

## 安装和运行

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

## 开发说明

### 自定义内容

1. **个人信息**: 编辑各个组件中的文本内容
2. **技能**: 修改 `Skills.js` 中的技能数组
3. **项目**: 更新 `Projects.js` 中的项目数据
4. **样式**: 调整CSS文件中的颜色和样式

### 添加新组件

1. 在 `src/components/` 目录创建新组件
2. 在 `src/styles/` 目录创建对应的CSS文件
3. 在 `App.js` 中导入并使用新组件

## Git版本控制

项目已配置Git，使用以下命令初始化仓库：

```bash
git init
git add .
git commit -m "Initial commit"
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License