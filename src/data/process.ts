import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Stage 01',
    title: '链路拓扑抓包与物理探测',
    body: '探测国内入口 BGP 互联质量，追踪公网出口与物理内网专线节点真实位置，剔除虚假宣称 IPLC 的劣质中转。',
    timing: '第一步：链路核验',
  },
  {
    stage: 'Stage 02',
    title: '晚高峰千兆并发真机测速',
    body: '在晚间 20:00~23:00 国际网络拥堵最高峰，使用 MAI-TEST-BOT 多线程持续压测，记录丢包率、TLS 握手延迟与峰值带宽。',
    timing: '第二步：压力测试',
  },
  {
    stage: 'Stage 03',
    title: '流媒体与 AI 工具全解锁审计',
    body: '对 Netflix 4K（非自制剧）、Disney+、YouTube Premium、TikTok、ChatGPT 4o 及 Claude 3.5 进行逐节点自动化访问与欺诈分判定。',
    timing: '第三步：解锁审计',
  },
  {
    stage: 'Stage 04',
    title: '动态履约追踪与跑路预警',
    body: '跟踪服务商运营年限、工单客服响应时效、退款政策兑现情况，建立动态风险黑名单，保障用户长期资金安全。',
    timing: '第四步：避坑追踪',
  },
];

export const processHeading = {
  eyebrow: '评测方法论',
  title: '四步严苛可观测体系，拒绝盲目跟风。',
  intro:
    '收录的每一家品牌均历经物理链路核验、晚高峰压力测试、AI/流媒体全解锁审计与售后履约监测，确保评测结论真实可复现。',
};
