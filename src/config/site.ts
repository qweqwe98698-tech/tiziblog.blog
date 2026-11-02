import type { SiteConfig } from '~/types';

export const siteConfig: SiteConfig = {
  name: '梯子Blog',

  logo: {
    header: { src: '/images/tiziblog-logo-dark.svg', width: 160, height: 40 },
    footer: { src: '/images/tiziblog-logo-light.svg', width: 160, height: 40 },
  },

  author: 'Tizi',
  role: '全球网络加速与专线链路观测实验室',
  title: '梯子Blog — 42家机场品牌实测与专线观测站 (tiziblog.blog)',
  description:
    '梯子Blog 专注于 2026 全球跨境加速专线、42家主流机场品牌深度评测、17家真机测速图与流媒体/ChatGPT解锁监控，提供客观真实的机场选择与代理客户端配置指南。',
  url: import.meta.env.SITE ?? 'https://tiziblog.blog',
  ogImage: '/og-default.png',
  locale: 'zh-CN',
  themeColor: '#c8f14d',

  contact: {
    email: 'contact@tiziblog.blog',
    phone: '',
    phoneHref: '',
    location: '全球多节点监测实验室 / 亚太 & 欧美',
    availability: '定期更新晚高峰真机测速与解锁状态',
    formEndpoint: '',
  },

  social: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { label: 'Telegram', href: 'https://t.me/', icon: 'spark' },
    { label: 'Twitter', href: 'https://twitter.com/', icon: 'flag' },
  ],

  about:
    '专注于全球网络加速链路与专线机场可观测性评测。坚持真机测速、拒绝虚构宣传，为用户提供清晰透明的网络选型参考与避坑建议。',

  copyrightHolder: '梯子Blog (tiziblog.blog)',

  verification: {
    google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
    bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION ?? '',
    shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION ?? '',
    baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION ?? '',
  },
};

export default siteConfig;
