import type { NavItem } from '~/types';

/**
 * 梯子Blog 核心导航体系
 * 针对 SEO / GEO 与高转化打造
 */
export const primaryNav: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '机场品牌库', href: '/brands/' },
  { label: '实测测速榜', href: '/speedtest/' },
  { label: '客户端指南', href: '/clients/' },
  { label: '选购攻略', href: '/guides/' },
];

/** 移动端侧边抽屉扩展导航 */
export const mobileExtraNav: NavItem[] = [
  { label: 'Top 10 核心推荐', href: '/#top10' },
  { label: '光速云专属评测', href: '/brands/guangsu/' },
  { label: '常见避坑问答', href: '/#faq' },
  { label: '隐私政策', href: '/privacy/' },
  { label: '服务条款', href: '/terms/' },
];

export const footerNav = {
  explore: [
    { label: '首页概览', href: '/' },
    { label: '42家机场品牌库', href: '/brands/' },
    { label: '真机测速与流媒体解锁', href: '/speedtest/' },
    { label: '多平台客户端下载', href: '/clients/' },
    { label: '专线选购避坑指南', href: '/guides/' },
  ] satisfies NavItem[],
  legal: [
    { label: '隐私政策', href: '/privacy/' },
    { label: '服务与免责条款', href: '/terms/' },
    { label: 'RSS 订阅', href: '/rss.xml' },
  ] satisfies NavItem[],
};
