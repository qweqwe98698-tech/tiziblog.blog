import type { NavItem } from '~/types';

/**
 * 梯子Blog 核心主导航体系
 * 覆盖 8 大核心语义栏目枢纽与高转化通道
 */
export const primaryNav: NavItem[] = [
  { label: '首页', href: '/' },
  { label: '机场推荐', href: '/jichang/' },
  { label: '品牌库', href: '/brands/' },
  { label: '实测测速', href: '/speedtest/' },
  { label: 'Clash教程', href: '/clash/' },
  { label: '使用教程', href: '/tutorial/' },
  { label: '免费资源', href: '/free/' },
  { label: '跑路预警', href: '/warnings/' },
];

/** 移动端侧边抽屉扩展导航 */
export const mobileExtraNav: NavItem[] = [
  { label: 'Top 10 核心推荐', href: '/#top10' },
  { label: 'VPN海外专线对比', href: '/vpn/' },
  { label: '全球节点测速监控', href: '/nodes/' },
  { label: '梯子软件防跑路', href: '/tizi/' },
  { label: '光速云专属评测', href: '/brands/guangsu/' },
  { label: '全科知识问答库 (FAQ)', href: '/faq/' },
  { label: '免费资源与自建节点', href: '/free/' },
  { label: '跑路预警与防坑雷达', href: '/warnings/' },
  { label: '隐私政策', href: '/privacy/' },
  { label: '服务条款', href: '/terms/' },
];

export const footerNav = {
  explore: [
    { label: '机场推荐排行榜', href: '/jichang/' },
    { label: '42家机场品牌库', href: '/brands/' },
    { label: 'VPN海外加速对比', href: '/vpn/' },
    { label: '全球节点测速监控', href: '/nodes/' },
    { label: 'Clash Verge配置教程', href: '/clash/' },
    { label: '科学上网教程手册', href: '/tutorial/' },
    { label: '梯子选型防跑路', href: '/tizi/' },
    { label: '免费应急公益节点', href: '/free/' },
    { label: '真机测速与流媒体解锁', href: '/speedtest/' },
    { label: '全科问题知识库 (FAQ)', href: '/faq/' },
    { label: '机场跑路预警雷达', href: '/warnings/' },
  ] satisfies NavItem[],
  legal: [
    { label: '隐私政策', href: '/privacy/' },
    { label: '服务与免责条款', href: '/terms/' },
    { label: 'XML 站点地图', href: '/sitemap.xml' },
    { label: 'RSS 订阅', href: '/rss.xml' },
  ] satisfies NavItem[],
};
