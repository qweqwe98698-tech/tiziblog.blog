/**
 * 梯子Blog (tiziblog.blog) 2026 代理客户端工具大全
 * 整理自第三方代理客户端资料库，包含各平台核心客户端定位与使用建议。
 */

export interface ClientItem {
  name: string;
  badge?: string;
  features: string;
  recommendedFor: string;
  platform: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt';
  isTopPick?: boolean;
}

export const clientPlatforms = [
  { id: 'windows', label: 'Windows 电脑' },
  { id: 'ios', label: 'iOS (iPhone / iPad)' },
  { id: 'android', label: 'Android 安卓' },
  { id: 'macos', label: 'macOS 苹果电脑' },
  { id: 'linux', label: 'Linux 桌面/服务器' },
  { id: 'openwrt', label: '软路由 / OpenWrt' },
] as const;

export const proxyClients: ClientItem[] = [
  // Windows
  {
    name: 'Clash Verge Rev',
    badge: '首选推荐',
    isTopPick: true,
    platform: 'windows',
    features: '基于 Mihomo (Clash Meta) 内核，支持完整规则分流、TUN 模式全流量代理、内置脚本扩展。',
    recommendedFor: '绝大多数 Windows 用户，兼顾易用性与强大的分流规则控制。',
  },
  {
    name: 'v2rayN',
    badge: '极客利器',
    isTopPick: true,
    platform: 'windows',
    features: '支持 Xray、sing-box 多核心，对 VLESS、Reality、Hysteria 2、Trojan 原生支持极佳。',
    recommendedFor: '需要精细管理多协议节点、追求低系统资源开销的高级用户。',
  },
  {
    name: 'FlClash',
    badge: '极简美学',
    platform: 'windows',
    features: '基于 Flutter 开发的高颜值现代客户端，支持 Mihomo 内核分流与快速订阅导入。',
    recommendedFor: '看重界面美观与轻量化操作的日常办公用户。',
  },
  {
    name: 'Hiddify',
    badge: '全协议支持',
    platform: 'windows',
    features: '跨平台全协议客户端，原生支持自动节点测速选路与多种复杂订阅格式。',
    recommendedFor: '新手快速导入与经常切换协议的多节点环境。',
  },

  // iOS
  {
    name: 'Shadowrocket (小火箭)',
    badge: '国民必备',
    isTopPick: true,
    platform: 'ios',
    features: '功能全面的规则代理工具，支持扫码导入订阅、流量监控、按域名与 IP 策略分流。',
    recommendedFor: '所有 iPhone / iPad 用户的首选代理工具，性价比极高（美区 App Store 2.99 美元）。',
  },
  {
    name: 'Stash',
    badge: 'Clash最佳替代',
    isTopPick: true,
    platform: 'ios',
    features: '为 iOS 深度定制的 Clash 风格高级代理，完整支持 Clash 配置文件、覆写规则与策略组。',
    recommendedFor: '熟悉 Clash 规则体系、希望在苹果移动端沿用桌面端配置逻辑的进阶用户。',
  },
  {
    name: 'Quantumult X (圈 X)',
    badge: '专业级重写',
    platform: 'ios',
    features: '网络调试利器，支持强大的 JS 脚本重写、MitM 解密、精细化策略组调度。',
    recommendedFor: '喜欢钻研分流规则、去广告重写与深度网络微调的极客玩家。',
  },
  {
    name: 'Surge 5',
    badge: '企业级标杆',
    platform: 'ios',
    features: '业界标杆级网络捕获与规则代理工具，提供毫米级网络分析与极致连接体验。',
    recommendedFor: '预算充裕、对网络稳定性和调试诊断有极致要求的专业开发者。',
  },

  // Android
  {
    name: 'v2rayNG',
    badge: '经典首选',
    isTopPick: true,
    platform: 'android',
    features: '基于 Xray 内核，支持分应用代理、扫描二维码或粘贴剪贴板批量导入节点。',
    recommendedFor: '几乎所有安卓手机用户，系统兼容性最好，不挑 ROM。',
  },
  {
    name: 'FlClash (Android)',
    badge: '高颜值推荐',
    isTopPick: true,
    platform: 'android',
    features: 'Material You 风格 UI，支持 Mihomo 规则分流与一键切换全局/规则模式。',
    recommendedFor: '喜欢现代化界面排版与 Clash 规则分流的用户。',
  },
  {
    name: 'sing-box for Android (SFA)',
    badge: '官方正宗',
    platform: 'android',
    features: 'sing-box 官方客户端，占用极低，对新型高性能协议（Hysteria 2 / TUIC）支持最前沿。',
    recommendedFor: '追求极限性能与前沿加密协议的折腾型用户。',
  },
  {
    name: 'Hiddify (Android)',
    badge: '智能易用',
    platform: 'android',
    features: '自适应暗色主题，多协议支持，一键智能连接最优节点。',
    recommendedFor: '不想看复杂分流规则、只求一键连接上网的小白用户。',
  },

  // macOS
  {
    name: 'Clash Verge Rev (Mac)',
    badge: 'Mac首选',
    isTopPick: true,
    platform: 'macos',
    features: '适配 Apple Silicon (M系列芯片) 与 Intel 架构，支持增强型 TUN 虚拟网卡模式。',
    recommendedFor: 'Mac 用户的综合首选，无缝配合 Chrome、开发终端与设计软件。',
  },
  {
    name: 'Surge Mac',
    badge: '顶级体验',
    platform: 'macos',
    features: 'Mac 上最优雅的网络调试与代理利器，支持网关模式（为局域网其他设备接管网络）。',
    recommendedFor: '专业工程师、设计团队与对网络响应延迟有严苛要求的 Mac 重度用户。',
  },
  {
    name: 'FlClash (Mac)',
    badge: '轻量优雅',
    platform: 'macos',
    features: '精简版 Mihomo 图形客户端，内存占用小，支持状态栏驻留。',
    recommendedFor: '配置需求简单、只需要常规网络代理的日常办公 Mac 用户。',
  },

  // Linux
  {
    name: 'Clash Verge Rev (Linux)',
    badge: 'GUI主力',
    isTopPick: true,
    platform: 'linux',
    features: '提供 AppImage、DEB、RPM 安装包，为 Linux 桌面提供完善的图形化代理控制面板。',
    recommendedFor: 'Ubuntu、Debian、Arch 等图形化桌面 Linux 发行版用户。',
  },
  {
    name: 'v2rayA',
    badge: 'Web 控制台',
    isTopPick: true,
    platform: 'linux',
    features: '通过浏览器 Web UI 管理所有节点与透明代理规则，完美契合 Linux 服务器与无头设备。',
    recommendedFor: 'Linux 软路由、家用 NAS (如群晖/Unraid/PVE) 与服务器管理员。',
  },

  // OpenWrt
  {
    name: 'OpenClash',
    badge: '软路由王者',
    isTopPick: true,
    platform: 'openwrt',
    features: '嵌入 OpenWrt LuCI 的最强规则分流插件，支持 Meta 内核、Fake-IP 智能解析与全家设备透明翻墙。',
    recommendedFor: '家用软路由、企业局域网统一代理网关，让 Apple TV、游戏主机等无客户端设备全自动代理。',
  },
  {
    name: 'ShellCrash',
    badge: '轻量脚本',
    platform: 'openwrt',
    features: '纯 Shell 命令行脚本部署，资源占用仅几兆，可在大多数官方原厂路由器固件上直接运行。',
    recommendedFor: '内存较小的小米、华硕原厂路由器或无法安装 LuCI 插件的路由器。',
  },
];
