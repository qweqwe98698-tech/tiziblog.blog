import type { ToolkitItem } from '~/types';

export const toolkit: ToolkitItem[] = [
  { icon: 'layers', title: 'IEPL / IPLC 专线', detail: '物理内网跨境直连，不经 GFW 过滤，晚高峰零丢包。' },
  { icon: 'code', title: 'Shadowsocks / SS2022', detail: '经典轻量加密协议，多平台兼容性最佳，资源消耗极低。' },
  { icon: 'spark', title: 'Vmess / Vless (Xray)', detail: '现代灵活传输协议，支持 XTLS 黑科技与 CDN 回源容灾。' },
  { icon: 'motion', title: 'Trojan 伪装流量', detail: '模仿标准 HTTPS 流量特征，隐蔽性极强，有效防止端口封锁。' },
  { icon: 'device', title: 'Hysteria 2 / TUIC', detail: '基于 UDP 的前沿协议，恶劣弱网环境下实现极速抗丢包提速。' },
  { icon: 'type', title: 'Clash Verge Rev', detail: '跨平台开源主力客户端，强大的规则分流与 TUN 模式支持。' },
  { icon: 'pen', title: 'Shadowrocket (小火箭)', detail: 'iOS 平台终极网络工具，支持精细化策略组调度与省电保活。' },
  { icon: 'flag', title: 'sing-box 极速通用内核', detail: '新一代高性能通用代理核心，内存占用小，协议覆盖最全。' },
];

export const toolkitHeading = {
  eyebrow: '协议与生态',
  title: '主流代理加密协议与客户端全面兼容。',
  intro:
    '支持全网前沿传输协议与通用订阅格式，无论是 Windows/Mac 桌面工作站，还是 iPhone/Android 移动端或软路由，均可无缝导入与规则分流。',
};
