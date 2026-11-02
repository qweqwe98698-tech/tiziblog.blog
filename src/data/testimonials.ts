import type { Testimonial } from '~/types';

export const testimonials: Testimonial[] = [
  {
    quote:
      '我们外贸团队之前试过好几家宣称千兆专线的服务商，一到晚上 8 点视频会议就频繁卡顿掉线。后来根据梯子Blog的晚高峰测速榜换了光速云，IEPL 专线跑满 Zoom 4K 极度稳定，自研客户端让非技术同事也能一分钟搞定。',
    name: '林晨 (Chen Lin)',
    role: '跨境电商独立站团队负责人，深圳',
    avatar: '/images/avatar-02.webp',
    avatarAlt: '林晨头像',
    rating: 5,
  },
  {
    quote:
      '作为全天重度依赖 ChatGPT Plus 和 Claude 3.5 Sonnet 的全栈开发者，节点 IP 纯净度直接关系到开发效率。梯子Blog 严格区分“原生住宅解锁”与“普通机房”，帮我精准避开了好几家跳人机验证的坑，值得长期关注。',
    name: '张博 (Bo Zhang)',
    role: 'AI 应用架构工程师，杭州',
    avatar: '/images/avatar-01.webp',
    avatarAlt: '张博头像',
    rating: 5,
  },
  {
    quote:
      '以前买梯子贪便宜直接买两年，结果刚用三个月机场主就跑路了。看了梯子Blog的防坑法则，现在坚持月付和关注物理专线冗余，家里 Apple TV 4K 看 Netflix 和 Disney+ 再也没缓冲过。',
    name: '王逸凡 (Yifan Wang)',
    role: '影音与数码极客，上海',
    avatar: '/images/avatar-03.webp',
    avatarAlt: '王逸凡头像',
    rating: 5,
  },
];

export const testimonialsHeading = {
  eyebrow: '用户原声',
  title: '来自开发者、外贸团队与影音用户的真实反馈。',
};
