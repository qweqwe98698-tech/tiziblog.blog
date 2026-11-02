import type { Award } from '~/types';

export const awards: Award[] = [
  { year: '2026', title: '年度最佳综合专线梯子', detail: '光速云 — 双线路IEPL专线，晚高峰零丢包，专属免配置客户端', tag: 'Gold #1' },
  { year: '2026', title: '最佳性价比特惠专线', detail: '暮光加速 — 年付超低折算单价，轻量查资料与学术首选', tag: 'Best Value' },
  { year: '2026', title: '最佳小白免配置体验', detail: '飞猫云 — 多平台专属客户端，扫码或账号一键极速联网', tag: 'Top UX' },
  { year: '2025', title: '跨境直播与大吞吐专线', detail: '大佬云 — 大带宽高突发专线，4K低抖动与外贸出海推荐', tag: 'High Speed' },
  { year: '2025', title: '老牌稳定运营口碑奖', detail: '微风网络 — 稳定运营多年，用户基数大，工单响应高效', tag: 'Reliable' },
];

export const awardsHeading = {
  eyebrow: '严选荣誉榜',
  title: '基于真实可观测数据评定的年度奖项。',
};
