<div align="center">

# 🚀 梯子Blog (tiziblog.blog)

### 全球网络加速链路与专线机场可观测性评测实验室

<p align="center">
  <a href="https://tiziblog.blog"><img src="https://img.shields.io/badge/Official%20Site-tiziblog.blog-c8f14d?style=for-the-badge&logo=google-chrome&logoColor=101110" alt="Official Website" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Framework-Astro%20v7.3-ff5d01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="#-技术特性"><img src="https://img.shields.io/badge/Architecture-100%25%20SSG%20Zero--JS-success?style=for-the-badge" alt="SSG" /></a>
  <a href="#-版权与免责声明"><img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <b>拒绝公关软文 · 坚持真机测速 · 揭秘跑路套路 · 护航出海加速</b>
</p>

[🌐 访问线上官网](https://tiziblog.blog/) •
[📊 晚高峰测速榜](https://tiziblog.blog/speedtest/) •
[🏢 42家品牌评测库](https://tiziblog.blog/brands/) •
[🚨 跑路预警雷达](https://tiziblog.blog/warnings/) •
[🛠️ 客户端配置中心](https://tiziblog.blog/clients/)

---

</div>

## 📖 项目简介 (Overview)

**梯子Blog** 是面向跨境出海、学术科研、影音追剧及 AI 大模型研发开发者的 **网络加速链路与专线机场客观评测平台**。

本项目基于 **Astro 7 现代纯静态渲染（SSG）架构** 构建，全站实现 **Zero-JS 默认无依赖静态优先**、毫秒级首屏加载、深色荧光极客视觉设计系统以及符合现代 **技术 SEO 与生成式 AI（GEO / AEO）规范** 的全链路基础设施。

已完成覆盖 **42 家主流机场品牌** 深度多维参数解构、**17 家千兆宽带晚高峰真机测速大图**、**60+ 组全科问答库** 与 **万字级防跑路风险预警雷达**。

---

## 🌟 核心技术与架构特性 (Features)

### 1. ⚡ 极致的静态构建性能
- **Zero-JS by Default**：正文与图表默认不引入沉重的客户端 JavaScript 框架，实现首屏瞬间渲染。
- **极速构建**：2 秒内完成全站 66 个独立静态页面（包含 42 个品牌详情、8 大核心栏目与 5 篇专著级长文）的完整 SSG 编译。
- **本地字体自托管**：内置优化后的 Space Grotesk 与 Inter Tight 现代字体，消除外部 CDN 请求阻塞与闪烁（FOIT）。

### 2. 🛡️ 顶规 SEO 与生成式引擎（GEO / AEO）基础设施
- **RFC 9309 兼容 `robots.txt`**：显式放行 Googlebot、bingbot、Baiduspider、yisouspider（神马/夸克）及 GPTBot、ClaudeBot、PerplexityBot 等 AI 爬虫。
- **双重 Sitemap 架构**：原生输出 `sitemap-index.xml`，同时配备兼容性端点 `/sitemap.xml`，无缝对接各大站长工具。
- **100% 自闭环 Canonical**：全站路由严格执行小写、HTTPS 与尾部斜杠（`trailingSlash: 'always'`）自闭环，杜绝重复收录与软 404。
- **Schema.org 结构化数据全域覆盖**：包含 `WebSite`、`Organization`、`CollectionPage`、`HowTo`、`Product`、`Review` 及 `FAQPage`，与 DOM 可视化评分 100% 对应一致。
- **安全外链隔离**：全站 190+ 处商业/推广外链 100% 强制包裹 `rel="nofollow sponsored noopener"`，阻断搜索引擎连坐降权风险。

### 3. 🎨 极客视觉设计系统 (Design System)
- **荧光霓虹与深色石墨**：以 `#c8f14d`（Electric Lime）与 `#101110`（Deep Graphite）打造高辨识度极客暗黑风。
- **物理矢量精准防变形**：内置 `<Icon />` 矢量微组件，针对 Flex 容器实施原生像素尺寸锁定，彻底杜绝任何 SVG 异常形变。
- **全端自适应响应式**：从 320px 移动端窄屏到 4K 超宽屏，提供自适应排版、智能抽屉式导航与触摸友好的交互控制。

---

## 🧭 8 大核心语义栏目矩阵 (Content Matrix)

| 栏目路径 | 栏目名称 | 核心定位与搜索意图 | 结构化数据类型 |
| :--- | :--- | :--- | :--- |
| [`/`](https://tiziblog.blog/) | **首页总览** | 实验室定位、Top 10 精选榜单、晚高峰测速展示与攻略入口 | `WebSite` / `Organization` |
| [`/jichang/`](https://tiziblog.blog/jichang/) | **机场推荐** | 2026 优质稳定专线机场分级排行榜与选型防坑铁律 | `CollectionPage` / `ItemList` |
| [`/brands/`](https://tiziblog.blog/brands/) | **品牌总库** | 42 家机场品牌全景评测，支持按专线、自研端与测速图筛选 | `CollectionPage` / `Product` |
| [`/speedtest/`](https://tiziblog.blog/speedtest/) | **实测测速** | 17 家晚高峰 1000M FTTH 真机测速图与流媒体/ChatGPT解锁观测 | `CollectionPage` |
| [`/vpn/`](https://tiziblog.blog/vpn/) | **VPN对比** | 传统商业直连 VPN 与现代 IEPL/IPLC 跨境专线底层性能对比 | `CollectionPage` |
| [`/clash/`](https://tiziblog.blog/clash/) | **Clash教程**| Clash Verge Rev 订阅导入、TUN 模式网卡接管与防污染配置 | `HowTo` |
| [`/nodes/`](https://tiziblog.blog/nodes/) | **节点观测** | 香港、日本、新加坡、美西机房路由拓扑、晚高峰丢包与 IP 纯净度检测 | `CollectionPage` |
| [`/tizi/`](https://tiziblog.blog/tizi/) | **梯子软件** | 翻墙工具形态对比、低价终身套餐套路解构与防跑路 6 大法则 | `CollectionPage` |
| [`/tutorial/`](https://tiziblog.blog/tutorial/) | **使用教程** | 全平台（小白自研端 / 进阶开源端 / 极客软路由）三条学习路线 | `CollectionPage` |
| [`/free/`](https://tiziblog.blog/free/) | **免费资源** | 万字级免费公益节点、Cloudflare Workers 免费自建与白嫖安全避坑 | `Article` |

---

## 📂 项目目录结构 (Directory Structure)

```text
tiziblog.blog/
├── public/                     # 纯静态公开资源
│   ├── fonts/                  # 自托管 WOFF2 字体文件 (Space Grotesk, Inter Tight)
│   ├── images/                 # 测速截图、测评详情图、品牌图标与头像
│   ├── favicon.svg             # 矢量站点图标
│   └── site.webmanifest        # PWA 基础元清单
├── scripts/                    # 运维与自动化审计脚本
│   └── audit-seo.cjs           # 全自动化技术 SEO & 外链安全预检脚本
├── src/
│   ├── components/             # Astro 模块化 UI 组件
│   │   ├── home/               # 首页独立分块组件 (Hero, Services, Work, FAQ, CTA)
│   │   ├── cards/              # 卡片级复用组件 (BrandCard, ClientCard 等)
│   │   ├── icons/              # 全站内联 SVG 精灵图库 (IconSprite.astro)
│   │   ├── Header.astro        # 顶栏导航与移动端响应式抽屉
│   │   ├── Footer.astro        # 底栏链接、合规声明与版权声明
│   │   ├── Seo.astro           # 动态元标签、Canonical 与 JSON-LD 注入器
│   │   └── Icon.astro          # 智能像素防变形矢量图标组件
│   ├── config/
│   │   └── site.ts             # 站点核心全局配置、域名与站长平台验证槽位
│   ├── data/                   # 结构化业务数据中心
│   │   ├── brands.ts           # 42 家机场品牌参数库 (价格、线路、解锁、测速)
│   │   ├── guides.ts           # 5 篇深度专题指南长文内容
│   │   ├── proxyClients.ts     # 6 大平台客户端工具库与下载源
│   │   └── navigation.ts       # 全站桌面端、移动端与底栏导航映射
│   ├── layouts/                # 基础页面脚手架与通用布局
│   │   ├── BaseLayout.astro    # 根 HTML 骨架、字体预加载与平滑滚动
│   │   └── PageLayout.astro    # 标准内页骨架、面包屑与标题区
│   ├── pages/                  # 基于文件系统的路由系统 (66+ Pages)
│   │   ├── brands/             # 42 家独立品牌评测路由 (/brands/[slug]/)
│   │   ├── guides/             # 专栏文章路由 (/guides/[slug]/)
│   │   ├── clash/              # Clash Verge Rev 教程专栏
│   │   ├── jichang/            # 机场分级推荐榜单
│   │   ├── vpn/                # 商业 VPN vs 专线对比
│   │   ├── nodes/              # 全球节点测速与选路监控
│   │   ├── tizi/               # 梯子工具选型与避坑
│   │   ├── tutorial/           # 科学上网全景手册
│   │   ├── free/               # 万字级免费节点专栏
│   │   ├── faq/                # 机场全科医学百科问答
│   │   ├── warnings/           # 跑路预警与防坑雷达
│   │   ├── speedtest/          # 晚高峰真机测速总览
│   │   ├── robots.txt.ts       # 动态 RFC 9309 robots.txt 生成端点
│   │   ├── sitemap.xml.ts      # 兼容性 Sitemap 索引端点
│   │   └── index.astro         # 网站首页
│   ├── styles/                 # 模块化纯原生 CSS 样式架构
│   │   ├── tokens.css          # Design Tokens (调色板、圆角、阴影、间距)
│   │   ├── base.css            # 现代 Reset 与全局基准排版规则
│   │   ├── components.css      # 按钮、标签、评分徽章等通用组件样式
│   │   └── sections.css        # 全局大区块与网格栅格布局
│   └── types.ts                # 全站 TypeScript 强类型定义
├── astro.config.mjs            # Astro 核心配置文件 (Sitemap, TrailingSlash 规范)
├── tsconfig.json               # TypeScript 严格模式配置
└── package.json                # 项目依赖与运行脚本
```

---

## 🛠️ 本地开发与构建 (Getting Started)

### 环境依赖
- **Node.js** `>= 22.12.0` (推荐 LTS 最新版)
- **npm** `>= 10.0.0` (或 pnpm / yarn)

### 1. 克隆代码仓库
```bash
git clone https://github.com/qweqwe98698-tech/tiziblog.blog.git
cd tiziblog.blog
```

### 2. 安装依赖包
```bash
npm install
```

### 3. 启动本地开发服务
```bash
npm run dev
# 或指定端口运行：
npx astro dev --port 4323 --ignore-lock
```
浏览器打开 `http://localhost:4323` 即可实时热重载预览。

### 4. 生产构建与本地预览
```bash
# 执行全站静态编译 (输出至 dist/ 目录)
npm run build

# 本地启动静态服务器预览编译产物
npm run preview
```

### 5. 运行技术 SEO 与安全合规审计
```bash
# 自动校验 100% Canonical 规范、单 H1、JSON-LD 语法与外链 nofollow 标记
node scripts/audit-seo.cjs
```

---

## 🚀 生产部署指南 (Deployment)

由于本项目输出为纯静态产物（`dist/` 目录），可一键部署至任何主流全球 CDN 边缘网络平台：

### 方案 A：Cloudflare Pages (强烈推荐)
1. 在 Cloudflare 控制台连接本 GitHub 仓库；
2. 构建设置：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js Version**: `22.12.0`
3. 绑定自定义域名 `tiziblog.blog`，开启 Cloudflare 全球 Edge 缓存与 SSL 满证书加密。

### 方案 B：Vercel
```bash
npm i -g vercel
vercel --prod
```

### 方案 C：GitHub Pages
在仓库 Settings -> Pages 中选择 GitHub Actions，自动推送静态文件至 `gh-pages` 分支。

---

## 📄 版权与免责声明 (License & Disclaimer)

- **开源协议**：本项目源码遵循 [MIT License](LICENSE) 开源协议。
- **免责与客观性声明**：
  1. 本项目展示的节点延迟、带宽测速图与流媒体解锁状态均基于评测实验室特定网络环境下的真实实测快照，不构成投资或消费绝对保证。
  2. 站点内容严守网络安全科普与技术交流规范，倡导用户合理、合规使用网络加速工具，远离非法网络活动与电信诈骗。

---

<div align="center">
  <sub>Designed & Developed with precision by <b>梯子Blog 评测实验室</b>. Made with ❤️ and Astro.</sub>
</div>
