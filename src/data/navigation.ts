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
  { label: '免费资源', href: '/free/' },
  { label: '全科FAQ', href: '/faq/' },
  { label: '跑路预警', href: '/warnings/' },
];

/** 移动端侧边抽屉扩展导航 */
export const mobileExtraNav: NavItem[] = [
  { label: 'Top 10 核心推荐', href: '/#top10' },
  { label: '光速云专属评测', href: '/brands/guangsu/' },
  { label: '免费资源与白嫖避坑', href: '/free/' },
  { label: '全科知识问答库', href: '/faq/' },
  { label: '跑路预警与防坑雷达', href: '/warnings/' },
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
    { label: '免费资源避坑矩阵', href: '/free/' },
    { label: '全科问题知识库 (FAQ)', href: '/faq/' },
    { label: '机场跑路预警雷达', href: '/warnings/' },
  ] satisfies NavItem[],
  legal: [
    { label: '隐私政策', href: '/privacy/' },
    { label: '服务与免责条款', href: '/terms/' },
    { label: 'RSS 订阅', href: '/rss.xml' },
  ] satisfies NavItem[],
};
