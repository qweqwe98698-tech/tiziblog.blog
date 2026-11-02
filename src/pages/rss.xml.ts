import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import siteConfig from '~/config/site';
import { guides } from '~/data/guides';

export async function GET(context: APIContext) {
  return rss({
    title: `${siteConfig.name} — 全球网络加速观测站与选购攻略`,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    trailingSlash: true,
    items: guides.map((guide) => ({
      title: guide.title,
      description: guide.summary,
      pubDate: new Date(guide.publishDate),
      link: `/guides/${guide.slug}/`,
      categories: [guide.category],
      author: '梯子Blog 网络评测实验室',
    })),
    customData: `<language>${siteConfig.locale}</language>`,
  });
}
