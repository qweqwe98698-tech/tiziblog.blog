import type { APIContext } from 'astro';

/**
 * Compatibility endpoint for search engines and monitoring tools
 * that directly probe `/sitemap.xml` instead of `/sitemap-index.xml`.
 */
export function GET(context: APIContext) {
  const origin = context.site ? new URL(context.site).origin : 'https://tiziblog.blog';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${origin}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Robots-Tag': 'noindex',
    },
  });
}
