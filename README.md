# TiziBlog

> 现代独立数字空间、设计工程与技术实践博客。基于 **Astro 7** 构建，具备 100% 独立资产体系、极致静态构建性能与全栈深度 SEO 优化。

---

## 🌟 核心特性

- **极致性能**: 静态优先架构（Zero-JS by default），首屏毫秒级极速渲染。
- **100% 独立与纯净**: 彻底拔除一切外部模板依赖与暗桩链接，自主掌控全站资产体系与 Canonical 域名。
- **全链路 SEO 优化**:
  - 自动化 Canonical URL 计算（自动规范化尾斜杠）
  - 标准 Schema.org JSON-LD 结构化数据（WebSite, Person, BlogPosting, BreadcrumbList）
  - 动态生成符合规范的 `sitemap-index.xml` 与 `robots.txt`
  - 完整的 Open Graph (OG) 与 Twitter Card 社交分享元标签
  - 本地自托管字体预加载（Preload WOFF2），消除外部字体 CDN 阻塞
- **现代工程架构**:
  - Astro Content Collections 类型安全内容集合（博客、作品集、服务列表）
  - CSS 变量设计系统与模块化样式体系（支持自定义主题调色板）
  - 响应式无障碍体验（符合 WCAG AA 标准，键盘导航支持）

---

## 🚀 快速启动

### 依赖环境
- Node.js `>= 22.12.0`
- npm `>= 10.0.0`

### 本地开发
```bash
# 启动本地开发服务器
npm run dev

# 启动并指定端口
npx astro dev --port 4323 --ignore-lock
```

### 构建与预览
```bash
# 执行类型检查与内容诊断
npm run check

# 生成生产环境静态产物
npm run build

# 本地预览构建产物
npm run preview
```

---

## ⚙️ 站点配置

核心配置位于 `src/config/site.ts`：

```typescript
export const siteConfig: SiteConfig = {
  name: 'TiziBlog',
  url: 'https://tiziblog.blog',
  author: 'Tizi',
  role: 'Digital Architect & Creative Developer',
  locale: 'zh-CN',
  ...
};
```

---

## 📄 授权协议

本项目采用 [MIT License](LICENSE) 开源协议。
