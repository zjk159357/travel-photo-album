# 旅行相册网站

这是一个基于 **React + Vite + Tailwind** 的旅行相册网站，带有精美的 UI 和相册浏览功能。

## 功能特性
- 照片瀑布流展示
- 点击大图 Lightbox 浏览（支持键盘翻页）
- 拖拽上传（Admin 模式）
- 自动生成 `photos.json`
- 动画效果（Framer Motion）

## 使用方法
1. 安装依赖
   ```bash
   npm install
   ```

2. 启动开发服务器
   ```bash
   npm run dev
   ```

3. 打包生产版本
   ```bash
   npm run build
   ```

4. 预览生产版本
   ```bash
   npm run preview
   ```

5. 照片存放路径
   将照片放到 `public/photos/` 目录，然后运行：
   ```bash
   node scripts/generate-photos-json.js
   ```
   会自动生成 `public/photos.json` 文件供前端读取。
