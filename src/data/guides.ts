/**
 * 梯子Blog (tiziblog.blog) 核心选购与避坑攻略专题集群
 * 针对 SEO / GEO 深度优化，包含高权重专业知识与高转化决策树。
 */

export interface GuideArticle {
  id: string;
  title: string;
  slug: string;
  category: '选购决策' | '专线科普' | '避坑防骗' | 'AI与流媒体' | '客户端实操';
  readTime: string;
  publishDate: string;
  summary: string;
  heroImage?: string;
  keyTakeaways: string[];
  recommendedBrandIds: string[];
  content: {
    heading: string;
    body: string;
    subsections?: {
      title: string;
      body: string;
    }[];
  }[];
}

export const guides: GuideArticle[] = [
  {
    id: 'decision-tree',
    slug: 'decision-tree',
    title: '2026年梯子机场选型决策树：从轻度浏览到跨境电商与 AI 研发',
    category: '选购决策',
    readTime: '6 分钟阅读',
    publishDate: '2026-10-28',
    summary:
      '面对市面上繁杂的机场套餐，究竟该如何选择？本决策树从预算、带宽吞吐、晚高峰稳定性与特殊解锁四大维度，为四类典型用户梳理最科学的选型逻辑。',
    keyTakeaways: [
      '轻度用户（仅查资料、偶尔 Google）：选择年付折合 8~10 元/月的轻量套餐或不限时永久包即可。',
      '追剧党（Netflix 4K、Disney+）：必须选择带原生机房落地、支持住宅 IP 轮换的专线机场。',
      '外贸跨境团队与直播运营：严禁使用廉价中转，必须选用企业级双线 IEPL 专线以规避封号与断流。',
      'AI 开发者（ChatGPT / Claude API）：重点考察落地 IP 的欺诈分（Fraud Score）与原生住宅解锁能力。',
    ],
    recommendedBrandIds: ['guangsu', 'muguang', 'feimao', 'dalao'],
    content: [
      {
        heading: '一、为什么“盲目跟风买大机场”往往会踩雷？',
        body: '很多新手在各大电报群或论坛看到别人推荐某家老牌“大厂”便毫不犹豫买下年付，结果在自己所在的省份和宽带运营商（如移动宽带或北方联通）下，晚高峰断流严重。不同机场的国内入口物理部署位置截然不同，有的在广州、有的在上海或深圳，且每个人的网络诉求大相径庭。建立清晰的场景选型逻辑，是避坑的第一步。',
      },
      {
        heading: '二、四类典型网络场景与选型判定树',
        body: '根据您的真实使用场景，匹配最精准的架构与预算：',
        subsections: [
          {
            title: '场景 A：学生党 / 查资料 / 偶尔轻度学术研究',
            body: '诉求：每月流量消耗在 30GB~100GB 以内，极度看重性价比与低门槛。<br/>建议策略：选择起步月费在 8~10 元左右的月付套餐，或选择类似光速云 147 元 247GB 的“不限时永久包”。用多少扣多少，无需担心按月清零浪费。',
          },
          {
            title: '场景 B：4K 高清影音与流媒体深度追剧玩家',
            body: '诉求：Netflix、Disney+、HBO Max 4K 拖拽无缓冲，晚高峰 20:00-23:00 必须零卡顿。<br/>建议策略：单节点突发吞吐量至少达到 100Mbps 以上，且机场必须拥有流媒体自动分流与原生 IP 解锁策略组。专线（IEPL）是避免晚高峰丢包的关键。',
          },
          {
            title: '场景 C：外贸独立站运营 / TikTok 跨境电商 / 海外直播',
            body: '诉求：绝对不允许断流导致直播掉线或店铺被封，对网络纯净度与持续在线率有商业级要求。<br/>建议策略：严选具备“企业级双线路架构”与“物理专线冗余”的服务商（如本站首推的光速云），同时配备多设备高并发支持。商业用途尽量避免普通便宜公网中转。',
          },
          {
            title: '场景 D：AI 研发工程师 / 独立开发者 (ChatGPT & Claude 重度依赖)',
            body: '诉求：OpenAI、Claude、Perplexity 网页端与 API 调用 0 阻断、不跳 Cloudflare 5 秒盾与无限拼图验证。<br/>建议策略：优先选择标有“ChatGPT 专线 / 原生住宅”解锁标签的节点，且支持 sing-box / Clash 现代分流规则。',
          },
        ],
      },
      {
        heading: '三、2026 选型总结法则',
        body: '无论选择哪家品牌，请牢记八字真言：“<strong>月付测试，专线优先</strong>”。先通过一个月付周期在您家里的宽带与手机 5G 信号下充分跑满晚高峰，确认完全符合需求后再考虑长期续费。',
      },
    ],
  },
  {
    id: 'iepl-vs-iplc-vs-bgp',
    slug: 'iepl-vs-iplc-vs-bgp',
    title: 'IEPL 专线 vs IPLC 专线 vs BGP 中转：技术原理、延迟与抗封锁深度解析',
    category: '专线科普',
    readTime: '8 分钟阅读',
    publishDate: '2026-10-25',
    summary:
      '为什么有些便宜机场一到敏感时期就全线飘红，而高品质专线却始终稳定如初？本文从网络物理拓扑、内网隧道机制与 GFW 过滤原理，为您深入剖析专线与中转的底层区别。',
    keyTakeaways: [
      '普通直连/公网中转：流量直接经过公网出口与 GFW 防火墙，敏感时期极易被封锁或阻断。',
      'IPLC（国际私用租用线路）：完全点对点的物理内网专线，不经过 GFW，延迟最低且无审查。',
      'IEPL（国际以太网专线）：基于以太网协议的二层专用虚拟网，具备更高弹性和动态冗余，成本略低于 IPLC。',
      'BGP 智能入口：优质机场标配，能在电信、联通、移动多线用户接入时自动选择延迟最低的国内网关。',
    ],
    recommendedBrandIds: ['guangsu', 'muguang', 'weifeng'],
    content: [
      {
        heading: '一、什么是 GFW？公网中转为什么会在敏感时期“全军覆没”？',
        body: '所谓公网中转（BGP Relay），是指用户将加密流量发送至国内的一台入口服务器，该服务器通过普通的公网国际出口将数据发往海外落地服务器。虽然中间流量经过了 Shadowsocks 或 TLS 加密，但公网出口的流量特征在深度包检测（DPI）算法面前依然会暴露出异常的熵值或连接频率。在特殊敏感时期，公网入口的端口甚至 IP 会被大规模封锁，导致用户大面积断连。',
      },
      {
        heading: '二、IPLC 与 IEPL 专线的物理隔离机制',
        body: 'IPLC（International Private Leased Circuit）和 IEPL（International Ethernet Private Line）本质上属于跨境内网物理专线：',
        subsections: [
          {
            title: '1. 物理链路不经公网 GFW 审查',
            body: '专线使用的是通信运营商（如中国电信国际、中国联通香港）铺设的跨境海底或陆缆内网。国内入口与海外出口之间是完全封闭的二层内网通道，数据包在出境时根本不经过公网网关与 GFW 过滤节点，因此具有 100% 的抗敏感期封锁能力。',
          },
          {
            title: '2. 晚高峰零网络拥塞与极低丢包',
            body: '公网流量在晚上 20:00-23:00 国际出口带宽极度拥堵时丢包率常常飙升至 30% 以上，而专线拥有运营商保证的独享 SLA 带宽，无论公网出口多堵，内网通道始终保持 0 丢包与稳定的 TLS 握手延迟。',
          },
          {
            title: '3. IEPL 与 IPLC 的微小差别',
            body: 'IPLC 是传统的点对点物理裸纤通道，成本极高且调配周期慢；IEPL 是现代以太网封装专线，支持更灵活的带宽弹性动态调配，容灾冗余能力更强。对普通用户而言，两者的速度与稳定性体验几乎没有任何体感差异。',
          },
        ],
      },
      {
        heading: '三、为什么顶级机场必须搭配“BGP 多线入口”？',
        body: '如果一家专线机场仅有深圳电信单线入口，那么北方联通或移动用户在连接到深圳时就会产生高达 40ms 的跨网内陆延迟。真正的优质机场（如光速云）会部署覆盖全国核心城市的 BGP 动态入口网关，无论用户使用的是移动、联通还是电信，都能自动匹配本省或就近的入口节点，将国内段延迟压缩至 10ms 以内。',
      },
    ],
  },
  {
    id: 'airport-anti-scam',
    slug: 'airport-anti-scam',
    title: '新手购买机场 6 大避坑黄金法则：月付优先、退款保障与跑路预警',
    category: '避坑防骗',
    readTime: '5 分钟阅读',
    publishDate: '2026-10-20',
    summary:
      '机场跑路年年有，新手踩坑特别多。市面上存在大量收割新人的“终身套餐”陷阱与二次贴牌克隆站。本文总结资深网络工程师的 6 大避坑法则，守住您的钱包。',
    keyTakeaways: [
      '法则 1：绝不买任何形式的“终身会员”或“超长三年付”，跑路概率高达 90% 以上。',
      '法则 2：首次使用坚持月付或小额季度付，在高峰期亲自实测体验后再续费。',
      '法则 3：警惕“超低价大流量”噱头，9.9元包 1000GB 必是严重超售甚至盗刷黑卡。',
      '法则 4：优先选择运营年限超 3 年以上、拥有独立自研客户端或活跃工单的服务商。',
      '法则 5：核实是否有备用官方防失联域名与稳定的 Telegram 通知频道。',
      '法则 6：注意支付安全，尽量使用可信第三方支付，切勿私聊转账。',
    ],
    recommendedBrandIds: ['guangsu', 'muguang', 'feimao'],
    content: [
      {
        heading: '一、陷阱一：“99元终身永久使用”的数学逻辑悖论',
        body: '所有专线带宽和海外落地机房服务器都是按月向电信运营商支付高昂租赁费用的（1Gbps IEPL 专线月成本通常在数万元以上）。如果一个机场只收你一次 99 元就承诺终身提供服务，它拿什么持续支付下个月的机房账单？这种模式完全是庞氏资金盘：用新用户的首充款支付旧服务器账单，一旦新用户增长停滞，机场主立刻卷款跑路关站。切勿抱有侥幸心理！',
      },
      {
        heading: '二、陷阱二：低价超售与“晚高峰断流”',
        body: '很多宣称“9.9 元 500GB”的廉价机场，实际上是将 100Mbps 的小水管带宽卖给了上万个用户。在白天非高峰期测试速度可能还不错，一到晚上 20 点全员上线，节点就会瞬间被打爆，丢包率飙升至 80%，连网页都打不开。真正的优质专线机场都会严格限制每个节点的并发用户数，并保持充裕的带宽冗余。',
      },
      {
        heading: '三、陷阱三：无售后支持与缺乏备用域名',
        body: '很多小型工作室搭建的机场没有专门的客服团队，工单几天无人回复；且国内直连的官网域名一旦被墙，新手就再也找不到后台入口。规范运营的品牌（如光速云、暮光加速等）通常具备智能域名分发系统、专属客户端自动同步以及活跃的官方公告频道，遇到运营商链路割接时能够第一时间发出维护通报。',
      },
    ],
  },
  {
    id: 'chatgpt-streaming-unlock',
    slug: 'chatgpt-streaming-unlock',
    title: 'ChatGPT 4o & Claude 3.5 原生解锁与流媒体 4K 播放技术内幕',
    category: 'AI与流媒体',
    readTime: '7 分钟阅读',
    publishDate: '2026-10-15',
    summary:
      '为什么有些节点看 YouTube 4K 飞快，打开 ChatGPT 却频繁提示“Access Denied”或进入无限验证循环？本文深度揭秘海外风控系统对数据中心 IP 的过滤机制与解锁技术。',
    keyTakeaways: [
      '流媒体与 AI 风控的区别：Netflix 只校验区域版权库，OpenAI 和 Anthropic 对机房 ASN 信誉库实施极端风控。',
      '数据中心 IP (Datacenter IP) vs 住宅 IP (Residential IP)：住宅 IP 欺诈分低，几乎从不跳验证码。',
      'DNS 泄漏是流媒体被识别的关键原因，必须开启客户端的 Fake-IP 或安全 DNS 解析。',
      '在客户端分流规则中将 OpenAI / Claude 单独指定到解锁节点，是最高效稳定的方案。',
    ],
    recommendedBrandIds: ['guangsu', 'dalao', 'feimao'],
    content: [
      {
        heading: '一、为什么带宽 1000M 的节点依然会被 ChatGPT 拒之门外？',
        body: 'OpenAI、Claude、Perplexity 以及银行金融系统采用的是业界最严格的 IP 欺诈度评分（Fraud Score & Risk Score）。它们接入了 MaxMind、IPinfo 等商业威胁情报数据库。如果一个落地节点属于廉价公有云机房（如 OVH、Hetzner 等经常被黑客或自动化爬虫使用的 ASN），或者一个机房 IP 上同时挂着数百个用户的并发长连接，OpenAI 的 Cloudflare 防火墙会立刻将其标记为高危爬虫，返回 403 Forbidden 或要求反复进行拼图人机验证。',
      },
      {
        heading: '二、流媒体 4K 播放（Netflix / Disney+ / YouTube）的核心指标',
        body: '与 AI 风控不同，流媒体平台的核心诉求是“防盗版与版权区域合规”：',
        subsections: [
          {
            title: '1. 非自制剧版权库检验',
            body: '如果节点没有完全解锁 Netflix，您只能看到 Netflix 官方自制的《怪奇物语》等自制剧，而看不到当地版权的《绝命毒师》等第三方电影。真正原生解锁的落地 IP 才能看到完整的非自制片单。',
          },
          {
            title: '2. 持续码率与丢包率敏感度',
            body: 'YouTube 4K（VP9/AV1 编码）的码率通常在 25~45Mbps 之间。播放卡顿往往不是因为带宽不够，而是因为持续传输时发生了偶发丢包。TCP 发生丢包后会强制降窗重传，导致播放器缓冲区耗尽从而出现转圈。专线的 0 丢包特性在此类场景下体验提升显著。',
          },
        ],
      },
      {
        heading: '三、最佳实操建议：配置分流规则单独指定 AI 节点',
        body: '不要盲目使用一个节点包揽所有流量。在 Clash Verge Rev 或 Shadowrocket 中，您可以利用分流规则（Rule Providers）：将日常大流量的 YouTube 流量路由至速度最快、带宽最大的香港专线节点；而将 <code>openai.com</code>、<code>anthropic.com</code> 路由至配备原生住宅 IP 的美西或新加坡专线节点。这样既保证了 AI 生产力的顺畅，又最大化节省了高纯净度节点的流量。',
      },
    ],
  },
  {
    id: 'client-setup-rules',
    slug: 'client-setup-rules',
    title: '多平台代理客户端通用订阅导入与分流规则进阶实操指南',
    category: '客户端实操',
    readTime: '6 分钟阅读',
    publishDate: '2026-10-10',
    summary:
      '手把手教您如何搞懂 Clash Verge Rev、Shadowrocket (小火箭) 的规则分流体系，学会区分 Rule、Global 与 Direct 模式，杜绝国内流量误走代理与 DNS 污染。',
    keyTakeaways: [
      '三种核心模式：Rule（规则分流，日常必选）、Global（全局模式，极易踩坑）、Direct（全局直连）。',
      'TUN 虚拟网卡模式能够让终端命令行、Git、海外游戏以及不支持系统代理的软件全量受控代理。',
      'Fake-IP 机制通过在本地生成虚假保留地址，大幅加速域名解析并消除本地 DNS 污染风险。',
      '定期在客户端更新规则集（Geosite / GeoIP），可确保国内新上线的应用不会误走海外专线流量。',
    ],
    recommendedBrandIds: ['guangsu', 'feimao', 'muguang'],
    content: [
      {
        heading: '一、搞懂三种核心代理模式，不再浪费宝贵流量',
        body: '几乎所有现代代理客户端都提供以下三种工作模式：',
        subsections: [
          {
            title: '1. Rule（规则分流模式）— 99% 场景下的唯一正确选择',
            body: '客户端内置了一套庞大的域名与 IP 路由表。当访问百度、淘宝、微信等国内服务时，走 Direct 直连，完全不消耗机场流量且保持最高访问速度；当访问 Google、YouTube、GitHub 时，自动走 Proxy 代理翻墙。',
          },
          {
            title: '2. Global（全局代理模式）— 仅在特殊调试时临时开启',
            body: '所有网络数据（包括国内 APP 和系统更新）强制绕行海外服务器。这会导致国内网站加载极其缓慢，微信经常弹出“登录环境异常”警告，且快速消耗您的套餐流量。日常使用切勿长期挂在 Global 模式下。',
          },
          {
            title: '3. Direct（直接连接模式）— 相当于彻底关闭代理',
            body: '所有流量均不经过客户端核心，适合在排查本地物理网络故障时临时切换测试。',
          },
        ],
      },
      {
        heading: '二、TUN 模式：拯救 Git、终端命令行与海外游戏的终极武器',
        body: '很多开发者在终端使用 <code>git clone</code> 或 <code>npm install</code> 时经常报错连接超时，这是因为普通终端默认不读取 Windows 或 macOS 的系统代理注册表。只要在 Clash Verge Rev 中点击安装 Service Core 并开启 <strong>TUN Mode（虚拟网卡模式）</strong>，客户端就会在操作系统底层创建一张虚拟网络适配器，将整机的所有 TCP/UDP 流量全部劫持进分流核心，从此终端、VSCode 插件和海外联机游戏再也无需繁琐配置本地端口转发。',
      },
    ],
  },
];
