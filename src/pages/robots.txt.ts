import type { APIContext } from 'astro';

/**
 * Clean, SEO-optimized robots.txt endpoint.
 * Always resolves sitemap against the canonical origin.
 */
export function GET(context: APIContext) {
  const origin = context.site ? new URL(context.site).origin : 'https://tiziblog.blog';
  const sitemap = `${origin}/sitemap-index.xml`;

  return new Response(
    `# ============================================================
# 梯子Blog (tiziblog.blog) 官方网络测速与专线可观测实验室
# 遵循 RFC 9309 爬虫标准协议与现代 GEO 搜索引擎抓取规范
# ============================================================

User-agent: *
Allow: /
Disallow: /404.html
Disallow: /404/

# 显式放行主流生成式 AI 搜索引擎 (GEO / AEO) 爬虫
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${sitemap}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
