import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 42, suffix: '+', label: '主流机场品牌收录' },
  { value: 17, suffix: '+', label: '晚高峰真机测速图' },
  { value: 100, suffix: '%', label: '真实网络抓包核验' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: '真实测速是检验机场稳定性的唯一标准，',
  tail: '拒绝虚构吹捧，可观测数据公开透明。',
};

/**
 * Poster frame for the studio reel.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: '梯子Blog 网络可观测实验室实时监控与节点抓包分析',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: '查看实验室节点实时可观测仪表盘',
};
