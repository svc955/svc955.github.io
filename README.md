# 原子网络加速器官网 / Atom VPN Website

一个现代化、响应式的VPN应用展示网站，支持中英文双语切换。

A modern, responsive VPN application showcase website with bilingual support (Chinese/English).

## ✨ 功能特性 / Features

- 🌐 **双语支持** - 自动检测浏览器语言，支持中文和英文
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- 🎨 **现代化UI** - 渐变背景、卡片式布局、流畅动画
- ⚡ **轻量快速** - 纯HTML/CSS/JavaScript，无需框架
- 🔒 **安全优化** - 外部链接安全处理
- ♿ **无障碍访问** - 语义化HTML，键盘快捷键支持

## 📁 项目结构

```
website-am/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── main.js        # 主逻辑
│   └── i18n.js        # 国际化
├── images/
│   └── logo.webp      # 应用Logo
├── downloads/
│   └── app.apk        # APK文件（需自行添加）
└── README.md          # 项目说明
```

## 🚀 快速开始

### 本地预览

1. **直接打开**
   ```bash
   # 使用浏览器打开 index.html
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

2. **使用本地服务器**（推荐）
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (需要全局安装 http-server)
   npx http-server -p 8000

   # PHP
   php -S localhost:8000
   ```

   然后访问 `http://localhost:8000`

### 部署到生产环境

#### 静态托管服务

**GitHub Pages**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main

# 在 GitHub 仓库设置中启用 GitHub Pages
```

**Netlify / Vercel**
- 直接拖拽项目文件夹到控制台
- 或连接 GitHub 仓库自动部署

**Cloudflare Pages**
- 连接 GitHub 仓库
- 构建命令：留空
- 发布目录：`/`

## 🔧 自定义配置

### 更新 Google Play 链接

在 `index.html` 中搜索并替换：
```html
<a href="https://play.google.com/store/apps" ...>
```
替换为您的实际 Google Play 应用链接。

### 添加 APK 文件

将您的 APK 文件放置在 `downloads/` 目录下：
```bash
cp your-app.apk downloads/app.apk
```

### 修改颜色主题

在 `css/style.css` 中修改 CSS 变量：
```css
:root {
    --primary-color: #1a73e8;    /* 主色调 */
    --secondary-color: #8b5cf6;  /* 辅助色 */
    /* ... 其他颜色 */
}
```

### 自定义文本内容

编辑 `js/i18n.js` 中的翻译对象：
```javascript
const translations = {
    zh: { /* 中文文本 */ },
    en: { /* 英文文本 */ }
};
```

## ⌨️ 键盘快捷键

- `Alt + L` - 快速切换语言

## 🌍 浏览器支持

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ⚠️ IE11 (部分功能不支持)

## 📝 待办事项

- [ ] 添加实际的 Google Play 应用链接
- [ ] 上传真实的 APK 文件到 `downloads/` 目录
- [ ] 配置域名和 HTTPS
- [ ] 添加网站统计（如 Google Analytics）
- [ ] SEO 优化（sitemap.xml, robots.txt）
- [ ] 添加社交媒体分享按钮

## 🤝 贡献

欢迎提交问题和改进建议！

## 📄 许可证

MIT License

## 📧 联系方式

如有问题，请通过以下方式联系：
- GitHub Issues
- Email: your-email@example.com

---

**注意**：在上线前请确保：
1. 更新 Google Play 链接为真实链接
2. 添加真实的 APK 文件
3. 更新联系方式
4. 添加隐私政策和服务条款（如需要）
