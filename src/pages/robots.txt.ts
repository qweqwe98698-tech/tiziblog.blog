import type { APIContext } from 'astro';

/**
 * Clean, SEO-optimized robots.txt endpoint.
 * Always resolves sitemap against the canonical origin.
 * Fully compatible with Googlebot, bingbot, Baiduspider, yisouspider (神马/夸克), and modern AI/LLM crawlers.
 */
export function GET(context: APIContext) {
  const origin = context.site ? new URL(context.site).origin : 'https://tiziblog.blog';

  return new Response(
    `# ============================================================
# 梯子Blog (tiziblog.blog) 官方网络测速与专线可观测实验室
# 遵循 RFC 9309 爬虫标准协议与现代搜索引擎 / GEO 抓取规范
# ============================================================

User-agent: *
Allow: /
Disallow: /404.html
Disallow: /404/

# 显式放行 Google 搜索爬虫
User-agent: Googlebot
Allow: /

# 显式放行 Bing 必应搜索爬虫
User-agent: bingbot
Allow: /

# 显式放行百度搜索爬虫 (Baiduspider)
User-agent: Baiduspider
Allow: /

# 显式放行神马 / UC / 夸克搜索爬虫 (yisouspider)
User-agent: yisouspider
Allow: /

# 显式放行 360 搜索爬虫
User-agent: 360Spider
Allow: /

# 显式放行搜狗搜索爬虫
User-agent: Sogou web spider
Allow: /

# 显式放行现代生成式 AI / 答案引擎 (GEO / AEO) 爬虫
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Applebot
Allow: /

# 站点地图双重声明 (主索引与兼容入口)
Sitemap: ${origin}/sitemap-index.xml
Sitemap: ${origin}/sitemap.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
