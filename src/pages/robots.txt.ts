import type { APIContext } from 'astro';

/**
 * Clean, SEO-optimized robots.txt endpoint.
 * Always resolves sitemap against the canonical origin.
 */
export function GET(context: APIContext) {
  const origin = context.site ? new URL(context.site).origin : 'https://tiziblog.blog';
  const sitemap = `${origin}/sitemap-index.xml`;

  return new Response(
    `User-agent: *\nAllow: /\nDisallow: /404/\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
