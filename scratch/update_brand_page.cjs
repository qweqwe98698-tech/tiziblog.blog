const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/brands/[slug].astro');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add import of guangsuReviewDossier
if (!content.includes('guangsuReviewDossier')) {
  content = content.replace(
    "import { brands, type BrandData } from '~/data/brands';",
    "import { brands, type BrandData } from '~/data/brands';\nimport { guangsuReviewDossier } from '~/data/brandReviews/guangsu';"
  );
}

// 2. Define isGuangsu and dynamic metadata
const metaReplaceTarget = "const { brand, prev, next } = Astro.props;\nconst pageUrl = `${siteConfig.url}/brands/${brand.id}/`;";
const metaReplacement = `const { brand, prev, next } = Astro.props;
const pageUrl = \`\${siteConfig.url}/brands/\${brand.id}/\`;
const isGuangsu = brand.id === 'guangsu';

const pageTitle = isGuangsu
  ? guangsuReviewDossier.seoTitle
  : \`\${brand.name}怎么样？2026测速实测、套餐价格与流媒体/ChatGPT解锁评测 — 梯子Blog\`;

const pageDescription = isGuangsu
  ? guangsuReviewDossier.seoDescription
  : \`\${brand.name} 深度横评：起步资费 \${brand.pricingMin}，涵盖 \${brand.lineType.join(' / ')} 线路架构，包含 \${brand.speedImage ? '2026 真机测速图、' : ''}套餐价格表、AI及流媒体解锁实测与避坑指南。\`;`;

content = content.replace(metaReplaceTarget, metaReplacement);

// 3. Update jsonLd
const oldJsonLdOffer = `    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CNY',
      lowPrice: brand.pricingMin.replace(/[^0-9.]/g, '') || '8',
      offerCount: brand.plans.length || 1,
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: brand.rank <= 3 ? '4.9' : brand.rank <= 10 ? '4.7' : '4.4',
        bestRating: '5',
      },
      author: { '@type': 'Person', name: '梯子Blog 评测实验室' },
      datePublished: brand.verifiedDate,
    },`;

const newJsonLdOffer = `    offers: isGuangsu
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: 'CNY',
          lowPrice: '25',
          highPrice: '680',
          offerCount: 7,
        }
      : {
          '@type': 'AggregateOffer',
          priceCurrency: 'CNY',
          lowPrice: brand.pricingMin.replace(/[^0-9.]/g, '') || '8',
          offerCount: brand.plans.length || 1,
        },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: isGuangsu ? '4.88' : (brand.rank <= 3 ? '4.9' : brand.rank <= 10 ? '4.7' : '4.4'),
        bestRating: '5',
      },
      author: { '@type': 'Person', name: '梯子Blog 评测实验室' },
      datePublished: isGuangsu ? guangsuReviewDossier.lastUpdated : brand.verifiedDate,
    },`;

content = content.replace(oldJsonLdOffer, newJsonLdOffer);

// 4. Update FAQ in jsonLd
const oldJsonLdFaq = `  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: \`\${brand.name} 支持哪些客户端？新手如何导入？\`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: \`\${brand.name} \${brand.hasCustomClient ? '提供免配置自研一键客户端，同时' : ''}兼容 Clash Verge Rev、Shadowrocket (小火箭)、v2rayN、sing-box 等主流通用客户端订阅。\`,
        },
      },
      {
        '@type': 'Question',
        name: \`\${brand.name} 的节点能否解锁 ChatGPT 和 Netflix？\`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: \`实测结果显示，\${brand.name} 对 Netflix 和主流视频平台支持较好；ChatGPT 与 Claude 支持状态为：\${brand.unlocks.chatgpt === 'supported' ? '原生全解锁' : '部分专线节点支持，建议切换指定解锁节点'}。\`,
        },
      },
      {
        '@type': 'Question',
        name: \`\${brand.name} 是否有最新优惠码？\`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: brand.discountCode
            ? \`\${brand.name} 当前可用专属优惠券码为 [\${brand.discountCode}]，结账时填入可享对应立减或折扣。\`,
            : \`\${brand.name} 当前暂未提供公开优惠码，建议关注官方活动或直接选择高性价比周期套餐。\`,
        },
      },
    ],
  },`;

const newJsonLdFaq = `  {
    '@type': 'FAQPage',
    mainEntity: isGuangsu
      ? guangsuReviewDossier.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        }))
      : [
          {
            '@type': 'Question',
            name: \`\${brand.name} 支持哪些客户端？新手如何导入？\`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: \`\${brand.name} \${brand.hasCustomClient ? '提供免配置自研一键客户端，同时' : ''}兼容 Clash Verge Rev、Shadowrocket (小火箭)、v2rayN、sing-box 等主流通用客户端订阅。\`,
            },
          },
          {
            '@type': 'Question',
            name: \`\${brand.name} 的节点能否解锁 ChatGPT 和 Netflix？\`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: \`实测结果显示，\${brand.name} 对 Netflix 和主流视频平台支持较好；ChatGPT 与 Claude 支持状态为：\${brand.unlocks.chatgpt === 'supported' ? '原生全解锁' : '部分专线节点支持，建议切换指定解锁节点'}。\`,
            },
          },
          {
            '@type': 'Question',
            name: \`\${brand.name} 是否有最新优惠码？\`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: brand.discountCode
                ? \`\${brand.name} 当前可用专属优惠券码为 [\${brand.discountCode}]，结账时填入可享对应立减或折扣。\`
                : \`\${brand.name} 当前暂未提供公开优惠码，建议关注官方活动或直接选择高性价比周期套餐。\`,
            },
          },
        ],
  },`;

content = content.replace(oldJsonLdFaq, newJsonLdFaq);

// 5. Update BaseLayout title and description
content = content.replace(
  `title={\`\${brand.name}怎么样？2026测速实测、套餐价格与流媒体/ChatGPT解锁评测 — 梯子Blog\`}`,
  `title={pageTitle}`
);
content = content.replace(
  `description={\`\${brand.name} 深度横评：起步资费 \${brand.pricingMin}，涵盖 \${brand.lineType.join(' / ')} 线路架构，包含 \${brand.speedImage ? '2026 真机测速图、' : ''}套餐价格表、AI及流媒体解锁实测与避坑指南。\`}`,
  `description={pageDescription}`
);

// 6. Update Hero badges
content = content.replace(
  `{brand.hasCustomClient && <span class="pill-app">配备自研客户端</span>}`,
  `{brand.hasCustomClient && <span class="pill-app">配备自研客户端</span>}\n            {isGuangsu && <span class="pill-monograph">1.3万字专著级深度实测</span>}`
);

// 7. Update main column: conditionally render guangsuReviewDossier or standard layout
const oldMainColOpen = `<div class="brand-main-col">`;
const newMainColBlock = `<div class="brand-main-col">
          {isGuangsu ? (
            <div class="monograph-container">
              {guangsuReviewDossier.chapters.map((chapter) => (
                <section class="card-section rev monograph-section" id={chapter.anchor}>
                  <div class="section-title-wrap">
                    <h2 class="d3 mono-chapter-title">{chapter.title}</h2>
                    {chapter.badge && <span class="badge-measured">{chapter.badge}</span>}
                  </div>
                  <p class="section-sub mono-summary">{chapter.summary}</p>
                  <div class="mono-content-body" set:html={chapter.contentHtml} />
                </section>
              ))}
            </div>
          ) : (
            <>`;

content = content.replace(oldMainColOpen, newMainColBlock);

// Close the fragment before </aside>
const oldAsideStart = `        <!-- Sidebar Sticky Column -->\n        <aside class="brand-sidebar-col rev rev-d2">`;
content = content.replace(
  oldAsideStart,
  `            </>\n          )}\n        </div>\n\n        <!-- Sidebar Sticky Column -->\n        <aside class="brand-sidebar-col rev rev-d2">`
);

// 8. Update sidebar nav card: if isGuangsu render full 10-chapter monograph TOC
const oldNavCard = `          <!-- Quick Jump -->
          <div class="sidebar-card nav-card">
            <h4 class="nav-title">本篇评测导航</h4>
            <ul class="quick-nav-list">
              <li><a href="#speedtest">节点测速实测报告</a></li>
              <li><a href="#unlocks">流媒体与AI解锁状态</a></li>
              <li><a href="#plans">套餐规格与价格对照</a></li>
              <li><a href="#pros-cons">核心优势与局限说明</a></li>
              <li><a href="#faq">常见问题与避坑解答</a></li>
            </ul>
          </div>`;

const newNavCard = `          <!-- Quick Jump -->
          {isGuangsu ? (
            <div class="sidebar-card nav-card sticky-toc-card">
              <h4 class="nav-title">📖 本书目录（点击直达章节）</h4>
              <ul class="quick-nav-list monograph-toc">
                {guangsuReviewDossier.chapters.map((ch, idx) => (
                  <li>
                    <a href={\`#\${ch.anchor}\`} class="toc-link">
                      <span class="toc-num">{idx + 1}.</span>
                      <span class="toc-txt">{ch.navTitle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div class="sidebar-card nav-card">
              <h4 class="nav-title">本篇评测导航</h4>
              <ul class="quick-nav-list">
                <li><a href="#speedtest">节点测速实测报告</a></li>
                <li><a href="#unlocks">流媒体与AI解锁状态</a></li>
                <li><a href="#plans">套餐规格与价格对照</a></li>
                <li><a href="#pros-cons">核心优势与局限说明</a></li>
                <li><a href="#faq">常见问题与避坑解答</a></li>
              </ul>
            </div>
          )}`;

content = content.replace(oldNavCard, newNavCard);

// 9. Add monograph CSS styles at the bottom of <style>
const extraStyles = `
  /* Monograph Dossier Custom Styles */
  .pill-monograph {
    background: #0b6cb2;
    color: #ffffff;
    padding: 4px 12px;
    border-radius: var(--r-pill);
    font-size: 13px;
    font-weight: 700;
  }

  .monograph-section {
    scroll-margin-top: 80px;
  }

  .mono-chapter-title {
    font-size: clamp(20px, 2.8vw, 28px);
    margin: 0;
    line-height: 1.25;
  }

  .mono-summary {
    font-size: 15px;
    color: var(--theme-slate);
    margin: 6px 0 24px;
    padding-bottom: 14px;
    border-bottom: 1px dashed var(--theme-line);
  }

  .mono-content-body {
    font-size: 15.5px;
    line-height: 1.75;
    color: var(--theme-ink);
  }

  .mono-content-body p {
    margin: 0 0 18px;
  }

  .mono-content-body ul, .mono-content-body ol {
    margin: 0 0 20px;
    padding-left: 24px;
  }

  .mono-content-body li {
    margin-bottom: 8px;
    line-height: 1.7;
  }

  .verdict-lead-box {
    background: var(--theme-mist);
    border: 1.5px solid var(--theme-line);
    border-radius: var(--r-md);
    padding: 24px;
    margin-bottom: 24px;
  }

  .vlb-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .vlb-tag {
    background: var(--theme-accent);
    color: var(--theme-ink);
    font-weight: 700;
    font-size: 13px;
    padding: 3px 10px;
    border-radius: var(--r-pill);
  }

  .vlb-date {
    font-size: 12px;
    color: var(--theme-slate);
  }

  .vlb-text {
    font-size: 16px;
    line-height: 1.7;
    margin-bottom: 20px !important;
  }

  .vlb-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .vlb-grid {
      grid-template-columns: 1fr;
    }
  }

  .vlb-card {
    padding: 18px 20px;
    border-radius: var(--r-sm);
    border: 1px solid var(--theme-line);
  }

  .vlb-pros {
    background: #f4fbf5;
    border-color: #c7edd0;
  }

  .vlb-cons {
    background: #fcf6f6;
    border-color: #f7d7d7;
  }

  .vlb-card h4 {
    font-size: 15px;
    margin: 0 0 12px;
  }

  .vlb-card ul {
    padding-left: 18px;
    margin: 0;
  }

  .vlb-card li {
    font-size: 13.5px;
    line-height: 1.6;
    margin-bottom: 8px;
  }

  .vlb-voucher-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: 1.5px dashed #52c41a;
    border-radius: var(--r-sm);
    padding: 14px 20px;
    flex-wrap: wrap;
    gap: 14px;
  }

  .vv-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .vv-label {
    font-size: 13px;
    color: var(--theme-slate);
  }

  .vv-code {
    background: #e6f7ff;
    color: #0b6cb2;
    font-family: var(--font-mono, monospace);
    font-size: 18px;
    font-weight: 800;
    padding: 2px 10px;
    border-radius: 4px;
    border: 1px solid #91d5ff;
  }

  .vv-desc {
    font-size: 12.5px;
    color: var(--theme-slate);
  }

  .badge-deny {
    background: #fff1f0;
    color: #cf1322;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }

  .badge-allow {
    background: #f6ffed;
    color: #389e0d;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
  }

  .callout {
    border-left: 4px solid var(--theme-ink);
    background: var(--theme-mist);
    padding: 16px 20px;
    border-radius: 0 var(--r-sm) var(--r-sm) 0;
    margin: 20px 0;
  }

  .callout-important {
    border-left-color: #b24700;
    background: #fff9f5;
  }

  .callout-tip {
    border-left-color: #52c41a;
    background: #f6ffed;
  }

  .callout-note {
    border-left-color: #0b6cb2;
    background: #f0f7fc;
  }

  .co-title {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 8px;
    color: var(--theme-ink);
  }

  .co-body p:last-child {
    margin-bottom: 0;
  }

  .formula-box {
    background: #fafafa;
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 16px 20px;
    margin: 18px 0;
  }

  .fb-title {
    font-weight: 700;
    font-size: 14.5px;
    color: var(--theme-ink);
    margin-bottom: 10px;
  }

  .topology-diagram-card {
    background: #111311;
    color: #e6e8ea;
    border-radius: var(--r-md);
    padding: 24px;
    margin: 20px 0;
  }

  .diag-title {
    color: var(--theme-accent);
    font-size: 16px;
    margin: 0 0 16px;
  }

  .topo-flow {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .tf-step {
    background: #1e2220;
    border: 1px solid #313933;
    border-radius: var(--r-sm);
    padding: 12px 16px;
  }

  .tf-badge {
    font-size: 12px;
    font-weight: 700;
    color: var(--theme-accent);
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .tf-desc {
    font-size: 13.5px;
    color: #d1d5db;
    line-height: 1.5;
  }

  .tf-arrow {
    text-align: center;
    font-size: 12.5px;
    color: #9ca3af;
    font-family: var(--font-mono, monospace);
  }

  .test-env-badge {
    background: var(--theme-mist);
    border: 1px solid var(--theme-line);
    padding: 12px 18px;
    border-radius: var(--r-sm);
    font-size: 13.5px;
    line-height: 1.6;
    margin: 16px 0;
  }

  .speedtest-hero-card {
    background: #0e1111;
    border: 1px solid var(--theme-line);
    border-radius: var(--r-md);
    overflow: hidden;
    margin: 20px 0;
  }

  .shc-header {
    padding: 14px 18px;
    border-bottom: 1px solid #232724;
  }

  .shc-title {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
  }

  .shc-meta {
    color: #9ca3af;
    font-size: 12px;
    margin-top: 4px;
  }

  .shc-image-wrap {
    background: #000;
    text-align: center;
  }

  .st-img-fluid {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .shc-caption {
    padding: 10px 18px;
    font-size: 12px;
    color: #9ca3af;
    margin: 0;
    background: #141715;
  }

  .region-analysis-blocks {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 18px;
  }

  .rab-item {
    background: var(--theme-mist);
    border-left: 3px solid var(--theme-ink);
    padding: 14px 18px;
    border-radius: 0 var(--r-sm) var(--r-sm) 0;
  }

  .rab-item h4 {
    font-size: 15px;
    margin: 0 0 8px;
  }

  .rab-item p {
    font-size: 14px;
    line-height: 1.65;
    margin: 0;
  }

  .unlock-audit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 14px;
    margin: 20px 0;
  }

  .uag-card {
    background: #ffffff;
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 16px;
  }

  .uag-icon {
    font-size: 24px;
    margin-bottom: 8px;
  }

  .uag-title {
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .uag-status {
    font-size: 12.5px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 8px;
  }

  .status-pass {
    background: #e6f7ff;
    color: #096dd9;
  }

  .status-warn {
    background: #fffbe6;
    color: #d48806;
  }

  .uag-desc {
    font-size: 13px;
    color: var(--theme-slate);
    line-height: 1.5;
    margin: 0;
  }

  .unlock-proof-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 14px;
    margin: 20px 0;
  }

  .upg-item {
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    overflow: hidden;
    background: #111;
  }

  .upg-item a {
    display: block;
    text-decoration: none;
  }

  .upg-item img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    display: block;
    transition: transform 0.2s;
  }

  .upg-item img:hover {
    transform: scale(1.02);
  }

  .upg-caption {
    display: block;
    padding: 8px 12px;
    font-size: 12px;
    color: #e5e7eb;
    background: #181b19;
    line-height: 1.4;
  }

  .steps-flow {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 18px 0;
  }

  .sf-step {
    display: flex;
    gap: 16px;
    background: var(--theme-mist);
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 16px;
  }

  .sf-num {
    width: 32px;
    height: 32px;
    background: var(--theme-ink);
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 15px;
    flex-shrink: 0;
  }

  .sf-content strong {
    display: block;
    font-size: 15px;
    margin-bottom: 4px;
  }

  .sf-content p {
    font-size: 14px;
    color: var(--theme-slate);
    margin: 0;
    line-height: 1.6;
  }

  .guide-box {
    background: #ffffff;
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 20px;
    margin: 18px 0;
  }

  .guide-box h4 {
    font-size: 15.5px;
    margin: 0 0 12px;
  }

  .decision-persona-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    .decision-persona-grid {
      grid-template-columns: 1fr;
    }
  }

  .dpg-card {
    background: var(--theme-mist);
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dpg-role {
    font-weight: 700;
    font-size: 15px;
    color: var(--theme-ink);
  }

  .dpg-profile {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--theme-slate);
  }

  .dpg-solution {
    font-size: 14px;
    background: #ffffff;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid var(--theme-line);
  }

  .dpg-why {
    font-size: 13px;
    line-height: 1.55;
    color: var(--theme-slate);
  }

  .trouble-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 18px 0;
  }

  .trouble-card {
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 18px;
    background: #ffffff;
  }

  .tc-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .tc-num {
    background: #ffe58f;
    color: #874d00;
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
  }

  .tc-title {
    font-size: 15.5px;
    margin: 0;
    color: var(--theme-ink);
  }

  .tc-cause {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #4b5563;
  }

  .tc-action {
    background: var(--theme-mist);
    padding: 12px 16px;
    border-radius: 4px;
    font-size: 13.5px;
    line-height: 1.6;
  }

  .monograph-faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 18px 0;
  }

  .mfaq-item {
    border: 1px solid var(--theme-line);
    border-radius: var(--r-sm);
    overflow: hidden;
  }

  .mfaq-q {
    padding: 16px 20px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--theme-mist);
    user-select: none;
  }

  .mfaq-icon {
    background: var(--theme-ink);
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 800;
  }

  .mfaq-title {
    font-size: 15px;
    color: var(--theme-ink);
  }

  .mfaq-a {
    padding: 16px 20px;
    background: #ffffff;
    font-size: 14.5px;
    line-height: 1.7;
    color: #374151;
    border-top: 1px solid var(--theme-line);
  }

  .mfaq-a p {
    margin: 0;
  }

  .conclusion-box {
    background: var(--theme-mist);
    border: 1.5px solid var(--theme-line);
    border-radius: var(--r-md);
    padding: 28px;
  }

  .cb-rating-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .cb-score-num {
    font-size: 32px;
    font-weight: 900;
    color: #b24700;
    line-height: 1;
  }

  .cb-score-stars {
    font-size: 18px;
  }

  .cb-score-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--theme-ink);
  }

  .cb-summary-text {
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 24px !important;
  }

  .cb-action-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: 1.5px solid var(--theme-line);
    border-radius: var(--r-sm);
    padding: 20px;
    gap: 20px;
    flex-wrap: wrap;
  }

  .cba-title {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 6px;
  }

  .cba-voucher {
    font-size: 14px;
    color: var(--theme-slate);
    margin-bottom: 6px;
  }

  .cba-voucher code {
    color: #b24700;
    font-weight: 800;
    font-size: 15px;
  }

  .cba-tip {
    font-size: 12px;
    color: #9ca3af;
    margin: 0;
  }

  .code-block-wrap {
    background: #141715;
    color: #e5e7eb;
    border-radius: var(--r-sm);
    padding: 16px;
    margin: 14px 0;
    border: 1px solid #282f2a;
  }

  .cbw-header {
    font-size: 12.5px;
    color: var(--theme-accent);
    font-weight: 700;
    margin-bottom: 8px;
  }

  .code-block-wrap pre {
    margin: 0;
    overflow-x: auto;
  }

  .code-block-wrap code {
    font-family: var(--font-mono, monospace);
    font-size: 13px;
    line-height: 1.6;
  }

  /* Sidebar TOC */
  .sticky-toc-card {
    position: sticky;
    top: 90px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
  }

  .monograph-toc {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .monograph-toc li a {
    display: flex;
    gap: 8px;
    font-size: 13.5px;
    line-height: 1.4;
    color: var(--theme-slate);
    text-decoration: none;
    padding: 4px 6px;
    border-radius: 4px;
    transition: all 0.15s;
  }

  .monograph-toc li a:hover {
    background: var(--theme-mist);
    color: var(--theme-ink);
    text-decoration: none;
  }

  .monograph-toc .toc-num {
    font-weight: 700;
    color: #0b6cb2;
  }
`;

content = content.replace('</style>', extraStyles + '\n</style>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated src/pages/brands/[slug].astro');
