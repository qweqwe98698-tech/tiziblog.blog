/**
 * 梯子Blog (tiziblog.blog) 42 家机场品牌全景评测数据
 * 严格遵照原文与真实测速数据生成，严禁捏造。
 */

export interface PlanItem {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
  details?: string;
}

export interface SpeedTestResult {
  node: string;
  latency: string;
  download: string;
  date?: string;
}

export interface BrandData {
  id: string;
  name: string;
  rank: number;
  isFeatured: boolean;
  isMainPromo: boolean;
  affUrl: string;
  discountCode?: string;
  established: string;
  pricingMin: string;
  lineType: string[];
  protocols: string[];
  hasCustomClient: boolean;
  plans: PlanItem[];
  nodeCoverage?: string;
  speedTable: SpeedTestResult[];
  speedImage?: string;
  unlocks: {
    chatgpt: 'supported' | 'conditional' | 'unsupported';
    claude: 'supported' | 'conditional' | 'unsupported';
    gemini: 'supported' | 'conditional' | 'unsupported';
    netflix: 'supported' | 'conditional' | 'unsupported';
    disney: 'supported' | 'conditional' | 'unsupported';
    youtube: 'supported' | 'conditional' | 'unsupported';
    tiktok: 'supported' | 'conditional' | 'unsupported';
    spotify: 'supported' | 'conditional' | 'unsupported';
  };
  unlockImages?: string[];
  summary: string;
  strengths: string[];
  limitations: string[];
  dataStatus: 'measured' | 'vendor' | 'review-required';
  verifiedDate: string;
}

export const brands: BrandData[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "rank": 1,
    "isMainPromo": true,
    "isFeatured": true,
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "discountCode": "AMM",
    "pricingMin": "99元/年",
    "lineType": [
      "IEPL专线",
      "企业级内网专线",
      "双线路架构"
    ],
    "protocols": [
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB永久版不过期",
        "cycle": "一次性"
      },
      {
        "name": "轻量版 (折合8元/月)",
        "billing": "年付",
        "price": "¥99/年",
        "traffic": "69GB/月",
        "cycle": "每月"
      },
      {
        "name": "极速版 (全IPLC)",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "168GB/月",
        "cycle": "每月"
      },
      {
        "name": "流光版",
        "billing": "月付",
        "price": "¥34/月",
        "traffic": "238GB/月",
        "cycle": "每月"
      },
      {
        "name": "量子版",
        "billing": "月付",
        "price": "¥68/月",
        "traffic": "500GB/月",
        "cycle": "每月"
      },
      {
        "name": "无界版",
        "billing": "月付",
        "price": "¥138/月",
        "traffic": "900GB/月",
        "cycle": "每月"
      },
      {
        "name": "企业定制版 (独立部署)",
        "billing": "月付",
        "price": "¥680/月",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "22ms",
        "download": "529Mbps"
      },
      {
        "node": "台湾",
        "latency": "41ms",
        "download": "114Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "387Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "135Mbps"
      },
      {
        "node": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "speedImage": "/images/speedtests/光速云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "strengths": [
      "IEPL专线/IPLC专线/企业内网，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "特殊优惠或按量包通常不支持退款，建议先月付体验",
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "2020年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19",
    "nodeCoverage": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等",
    "unlockImages": [
      "/images/unlocks/photo_2026-08-19_12-13-01.jpg",
      "/images/unlocks/photo_2026-08-19_12-13-50.jpg",
      "/images/unlocks/photo_2026-08-19_12-13-58.jpg",
      "/images/unlocks/photo_2026-08-19_12-18-40.jpg",
      "/images/unlocks/photo_2026-08-19_12-20-10.jpg",
      "/images/unlocks/photo_2026-09-07_12-51-58.jpg",
      "/images/unlocks/photo_2026-09-07_12-51-59.jpg"
    ]
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 2,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "discountCode": "muguang5555",
    "pricingMin": "20元/月",
    "lineType": [
      "BGP智能中转"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "26ms",
        "download": "509Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "107Mbps"
      },
      {
        "node": "新加坡",
        "latency": "43ms",
        "download": "419Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "150Mbps"
      },
      {
        "node": "美国",
        "latency": "160ms",
        "download": "19Mbps"
      }
    ],
    "speedImage": "/images/speedtests/幕光加速-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",
    "strengths": [
      "BGP 智能调度，专线级出口，主打稳定低延迟",
      "覆盖 Windows、macOS、iOS、Android、Linux 全平台",
      "支持多设备同时在线，套餐 120GB–1500GB 流量可选",
      "官方宣称提供 7×24 小时真人客服"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "2023年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "rank": 3,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "discountCode": "flycat888",
    "pricingMin": "7元/月",
    "lineType": [
      "优质中转专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "21ms",
        "download": "526Mbps"
      },
      {
        "node": "台湾",
        "latency": "41ms",
        "download": "116Mbps"
      },
      {
        "node": "新加坡",
        "latency": "45ms",
        "download": "413Mbps"
      },
      {
        "node": "日本",
        "latency": "54ms",
        "download": "138Mbps"
      },
      {
        "node": "美国",
        "latency": "178ms",
        "download": "14Mbps"
      }
    ],
    "speedImage": "/images/speedtests/飞猫云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "strengths": [
      "主打轻快连接、简单配置和灵活节点切换",
      "专属客户端下载登录即用，不用配订阅",
      "不用自己挑客户端、导订阅，新手容易快速上手",
      "节点覆盖亚太、欧美等热门地区"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "2023年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "rank": 4,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "discountCode": "flat888",
    "pricingMin": "7元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "cycle": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "cycle": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "25ms",
        "download": "546Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "115Mbps"
      },
      {
        "node": "新加坡",
        "latency": "43ms",
        "download": "384Mbps"
      },
      {
        "node": "日本",
        "latency": "54ms",
        "download": "131Mbps"
      },
      {
        "node": "美国",
        "latency": "167ms",
        "download": "17Mbps"
      }
    ],
    "speedImage": "/images/speedtests/微风-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",
    "strengths": [
      "IEPL 专线 + VLESS 协议，定位入门级高性价比机场",
      "覆盖香港、新加坡、日本、美国等多地原生 IP 节点",
      "可解锁 Netflix、Disney+ 等主流流媒体及 ChatGPT、Claude 等 AI 工具",
      "客服 7×24 小时在线，夜间由 AI 客服值守，适合新手和轻度用户"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "2023年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "rank": 5,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "discountCode": "dly888",
    "pricingMin": "5.6元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "大佬云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "discountCode": "nmw888",
    "pricingMin": "8元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "27ms",
        "download": "504Mbps"
      },
      {
        "node": "台湾",
        "latency": "41ms",
        "download": "103Mbps"
      },
      {
        "node": "新加坡",
        "latency": "44ms",
        "download": "411Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "136Mbps"
      },
      {
        "node": "美国",
        "latency": "177ms",
        "download": "18Mbps"
      }
    ],
    "speedImage": "/images/speedtests/星岛梦-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "strengths": [
      "IEPL 专线，1 倍流量且不限设备使用",
      "节点覆盖香港、台湾、日本、美国、新加坡及韩国、东南亚等地区",
      "支持 Netflix、Disney+、YouTube Premium 等主流流媒体",
      "兼容 ChatGPT、Gemini 等 AI 工具及 TikTok 跨区使用"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "2020年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "rank": 7,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "discountCode": "ermao5555",
    "pricingMin": "20元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "22ms",
        "download": "481Mbps"
      },
      {
        "node": "台湾",
        "latency": "41ms",
        "download": "118Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "407Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "143Mbps"
      },
      {
        "node": "美国",
        "latency": "134ms",
        "download": "17Mbps"
      }
    ],
    "speedImage": "/images/speedtests/二猫云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",
    "strengths": [
      "全线 IEPL 专线，主打长期稳定而非低价走量",
      "账号不限设备连接数，多端同时在线无压力",
      "海外技术团队主理，配备独家定制客户端",
      "解锁 Netflix、YouTube 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "2023年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "rank": 7,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "discountCode": "wuyou666",
    "pricingMin": "19元/月",
    "lineType": [
      "优质中转专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "23ms",
        "download": "531Mbps"
      },
      {
        "node": "台湾",
        "latency": "41ms",
        "download": "107Mbps"
      },
      {
        "node": "新加坡",
        "latency": "42ms",
        "download": "418Mbps"
      },
      {
        "node": "日本",
        "latency": "55ms",
        "download": "147Mbps"
      },
      {
        "node": "美国",
        "latency": "145ms",
        "download": "17Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。\r\n------",
    "strengths": [
      "面向轻度用户和跨境电商的超高性价比套餐",
      "全线节点无倍率、不限速、不限设备数量",
      "专属客户端下载登录即用，新手不用折腾订阅配置",
      "香港、新加坡、日本、美国均有节点，支持 TikTok 跨区直连",
      "客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "rank": 7,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "discountCode": "weitu666",
    "pricingMin": "14.9元/月",
    "lineType": [
      "IPLC专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "27ms",
        "download": "500Mbps"
      },
      {
        "node": "台湾",
        "latency": "37ms",
        "download": "100Mbps"
      },
      {
        "node": "新加坡",
        "latency": "44ms",
        "download": "414Mbps"
      },
      {
        "node": "日本",
        "latency": "56ms",
        "download": "147Mbps"
      },
      {
        "node": "美国",
        "latency": "179ms",
        "download": "17Mbps"
      }
    ],
    "speedImage": "/images/speedtests/唯兔云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "strengths": [
      "IPLC 专线，1 倍流量、不限速及不限设备连接",
      "支持 ChatGPT、Gemini、Claude 等主流 AI 工具",
      "支持 Netflix、Disney+、YouTube Premium 及 TikTok 等解锁",
      "提供海外技术团队与多人客服支持"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "2023年",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "rank": 8,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "discountCode": "firefly",
    "pricingMin": "8 元/月",
    "lineType": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "27ms",
        "download": "547Mbps"
      },
      {
        "node": "台湾",
        "latency": "39ms",
        "download": "135Mbps"
      },
      {
        "node": "新加坡",
        "latency": "42ms",
        "download": "445Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "node": "美国",
        "latency": "143ms",
        "download": "30Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "strengths": [
      "IPLC 专线接入，主打低延迟与高稳定性",
      "全节点不限速，不限客户端及设备数量",
      "原生 IP 节点，覆盖香港、新加坡、日本、美国",
      "海外技术团队维护线路，客服 7×24 小时在线，夜间由 AI 客服值守"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "rank": 10,
    "isMainPromo": false,
    "isFeatured": true,
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "discountCode": "YUZHOU553",
    "pricingMin": "20元/月",
    "lineType": [
      "优质中转专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "套餐名",
        "billing": "计费方式",
        "price": "价格",
        "traffic": "流量",
        "cycle": "流量周期"
      },
      {
        "name": "待补充",
        "billing": "待核实",
        "price": "—",
        "traffic": "—",
        "cycle": "—"
      }
    ],
    "speedTable": [
      {
        "node": "暂无可核实实测数据",
        "latency": "—",
        "download": "—"
      }
    ],
    "speedImage": "/images/speedtests/宇宙云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "宇宙云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
      "完整资料、节点覆盖、支持设备与客服信息有待补充"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "rank": 11,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "discountCode": "akaka",
    "pricingMin": "20元/月",
    "lineType": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "24ms",
        "download": "538Mbps"
      },
      {
        "node": "台湾",
        "latency": "39ms",
        "download": "107Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "414Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "133Mbps"
      },
      {
        "node": "美国",
        "latency": "134ms",
        "download": "20Mbps"
      }
    ],
    "speedImage": "/images/speedtests/U1S1-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。\r\n---",
    "strengths": [
      "2025 年起运营的 IPLC 专线机场",
      "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
      "不限设备同时连接",
      "支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "rank": 12,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "discountCode": "lmao888",
    "pricingMin": "19元/月",
    "lineType": [
      "优质中转专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "22ms",
        "download": "492Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "109Mbps"
      },
      {
        "node": "新加坡",
        "latency": "46ms",
        "download": "409Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "147Mbps"
      },
      {
        "node": "美国",
        "latency": "164ms",
        "download": "19Mbps"
      }
    ],
    "speedImage": "/images/speedtests/灵猫网络-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "strengths": [
      "1 倍流量，不限速及不限设备使用",
      "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
      "支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台",
      "专属客户端下载登录即用，不用导入订阅"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "jilian",
    "name": "极连云",
    "rank": 13,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "discountCode": "ji8888",
    "pricingMin": "18元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "speedImage": "/images/speedtests/极连云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "极连云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "rank": 14,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "discountCode": "gnt6666",
    "pricingMin": "18元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "speedImage": "/images/speedtests/光年梯-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "光年梯 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "rank": 15,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "discountCode": "yfy6666",
    "pricingMin": "20元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Hysteria 2"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "cycle": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "23ms",
        "download": "477Mbps"
      },
      {
        "node": "台湾",
        "latency": "40ms",
        "download": "117Mbps"
      },
      {
        "node": "新加坡",
        "latency": "42ms",
        "download": "390Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "136Mbps"
      },
      {
        "node": "美国",
        "latency": "180ms",
        "download": "20Mbps"
      }
    ],
    "speedImage": "/images/speedtests/一翻云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "strengths": [
      "全节点 IEPL 物理专线，搭配原生住宅 IP",
      "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
      "提供永久不过期的不限时流量包，用量不固定也不会浪费",
      "不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点",
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "sogo",
    "name": "SOGO 云",
    "rank": 16,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "discountCode": "SOGO10000",
    "pricingMin": "98 元",
    "lineType": [
      "IEPL专线",
      "BGP智能中转"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "cycle": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "cycle": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "26ms",
        "download": "488Mbps"
      },
      {
        "node": "台湾",
        "latency": "39ms",
        "download": "118Mbps"
      },
      {
        "node": "新加坡",
        "latency": "43ms",
        "download": "401Mbps"
      },
      {
        "node": "日本",
        "latency": "57ms",
        "download": "137Mbps"
      },
      {
        "node": "美国",
        "latency": "140ms",
        "download": "17Mbps"
      }
    ],
    "speedImage": "/images/speedtests/SOGO云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",
    "strengths": [
      "全线 IEPL 专线接入，三网 BGP 优化",
      "节点覆盖 15 个国家和地区，本站收录里覆盖面最广",
      "不限速、不限设备数量，VLESS 协议",
      "自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "kexin",
    "name": "可信云",
    "rank": 17,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "discountCode": "kkk333",
    "pricingMin": "25元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": false,
    "plans": [],
    "speedTable": [],
    "speedImage": "/images/speedtests/可信云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "可信云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "暂未提供自研一键登录客户端，需搭配 Clash/Shadowrocket 使用"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "sujie",
    "name": "速界",
    "rank": 18,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "discountCode": "sss1111",
    "pricingMin": "25元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "speedImage": "/images/speedtests/速界-节点测速实测.png",
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "supported",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "速界 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "rank": 19,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "discountCode": "shanyue",
    "pricingMin": "8 元/月",
    "lineType": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "23ms",
        "download": "548Mbps"
      },
      {
        "node": "台湾",
        "latency": "38ms",
        "download": "110Mbps"
      },
      {
        "node": "新加坡",
        "latency": "44ms",
        "download": "383Mbps"
      },
      {
        "node": "日本",
        "latency": "53ms",
        "download": "144Mbps"
      },
      {
        "node": "美国",
        "latency": "143ms",
        "download": "18Mbps"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "strengths": [
      "顶级 IPLC 纯专线，主打极致低延迟",
      "骨干网接入，晚高峰仍能保持连接稳定",
      "原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体",
      "支持 ChatGPT、Claude、Gemini 等 AI 工具访问"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "rank": 20,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "discountCode": "qq88",
    "pricingMin": "20 元/月",
    "lineType": [
      "IEPL专线",
      "IPLC专线",
      "BGP智能中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "25ms",
        "download": "489Mbps"
      },
      {
        "node": "台湾",
        "latency": "37ms",
        "download": "117Mbps"
      },
      {
        "node": "新加坡",
        "latency": "45ms",
        "download": "430Mbps"
      },
      {
        "node": "日本",
        "latency": "55ms",
        "download": "133Mbps"
      },
      {
        "node": "美国",
        "latency": "138ms",
        "download": "18Mbps"
      }
    ],
    "speedImage": "/images/speedtests/全球云-节点测速实测.png",
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "strengths": [
      "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
      "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
      "支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT",
      "专属客户端下载登录即用，不用配订阅"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "measured",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 21,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "discountCode": "sd88",
    "pricingMin": "5.6元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "闪电鼠 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 23,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "discountCode": "yjx888",
    "pricingMin": "5.6元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "云界线 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 24,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "discountCode": "ll88",
    "pricingMin": "5.6元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "榴莲云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 25,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "discountCode": "xs0077",
    "pricingMin": "14元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "神行加速 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 26,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "discountCode": "HQ66",
    "pricingMin": "5.6元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "conditional",
      "disney": "conditional",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "环球梯 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "rank": 27,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "discountCode": "yxr888",
    "pricingMin": "24元/月",
    "lineType": [
      "IPLC专线",
      "企业内网"
    ],
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "cycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "cycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "speedTable": [
      {
        "node": "香港",
        "latency": "—",
        "download": "—"
      },
      {
        "node": "日本",
        "latency": "—",
        "download": "—"
      },
      {
        "node": "美国",
        "latency": "—",
        "download": "—"
      },
      {
        "node": "新加坡",
        "latency": "—",
        "download": "—"
      },
      {
        "node": "台湾",
        "latency": "—",
        "download": "—"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。\r\n---",
    "strengths": [
      "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
      "官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT",
      "全平台一键配置，多设备同时在线",
      "自带客户端，不提供订阅链接"
    ],
    "limitations": [
      "部分 AI 工具（ChatGPT/Gemini）需切换至指定原生解锁节点"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "rank": 28,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "discountCode": "tiziyun",
    "pricingMin": "7.4元/月",
    "lineType": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "hasCustomClient": true,
    "plans": [],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "supported",
      "claude": "supported",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "supported",
      "spotify": "supported"
    },
    "summary": "梯子云 提供高性价比网络专线接入服务，涵盖多地区节点与流媒体解锁支持。",
    "strengths": [
      "IEPL专线，保障日常访问与大带宽传输",
      "多端通用订阅导入与智能分流支持"
    ],
    "limitations": [
      "晚高峰跨国公网可能存在偶发抖动，建议开启智能分组"
    ],
    "established": "稳定运营中",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "rank": 29,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "pricingMin": "未有可直接月付的明确报价",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "cycle": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "node": "基础专线服务",
        "latency": "季付",
        "download": "¥297"
      },
      {
        "node": "优质专线服务",
        "latency": "季付",
        "download": "¥327"
      },
      {
        "node": "精品专线服务",
        "latency": "季付",
        "download": "¥357"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "WgetCloud 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。",
      "五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。",
      "香港平均 TLS RTT 25.9 ms、台湾 41.3 ms、新加坡 55.6 ms，亚洲近端延迟较低。",
      "美国 9 个节点即使在 170.2 ms 的平均 TLS RTT 下仍跑出 55.00 MB/s 平均下载。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "rank": 30,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "pricingMin": "未有可直接月付的明确报价",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "shadowsocks"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "每月100GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "每月250GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "traffic": "每月400GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "超大包",
        "billing": "季付",
        "price": "¥216",
        "traffic": "每月750GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "不差钱",
        "billing": "季付",
        "price": "¥231",
        "traffic": "每月900GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "node": "小包",
        "latency": "季付",
        "download": "¥66"
      },
      {
        "node": "中包",
        "latency": "季付",
        "download": "¥126"
      },
      {
        "node": "大包",
        "latency": "季付",
        "download": "¥156"
      },
      {
        "node": "超大包",
        "latency": "季付",
        "download": "¥216"
      },
      {
        "node": "不差钱",
        "latency": "季付",
        "download": "¥231"
      },
      {
        "node": "旗舰包",
        "latency": "年付",
        "download": "¥2500"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "白月光 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。",
      "2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。",
      "香港 10 个节点全部取得非零速度，平均下载 14.37 MB/s、平均 TLS RTT 160.7 ms，是本次五个多节点地区里最好的一组。",
      "马来西亚（16.18 MB/s）、泰国（15.50 MB/s）、日本（最高 14.17 MB/s）等亚洲近端节点本次速度较高。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird",
    "rank": 31,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "月付",
        "price": "¥75",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "季付",
        "price": "¥203",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "半年付",
        "price": "¥383",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "年付",
        "price": "¥720",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "季付",
        "price": "¥405",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "半年付",
        "price": "¥765",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "年付",
        "price": "¥1440",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "FlyingBird 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "全专线 IPLC 与无倍率定位",
      "套餐档位和周期选择完整",
      "支持支付宝与 USDT。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "rank": 32,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "pricingMin": "¥32/月（旧资料口径）",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "trojan/vless"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "billing": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "cycle": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "cycle": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billing": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "cycle": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "cycle": "一次性（具体有效期待核实）"
      },
      {
        "name": "840G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "cycle": "一次性（具体有效期待核实）"
      },
      {
        "name": "2050G｜企业套餐",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "node": "150G｜轻量套餐",
        "latency": "半年付",
        "download": "¥95"
      },
      {
        "node": "350G｜标准套餐",
        "latency": "月付",
        "download": "¥32"
      },
      {
        "node": "650G｜高速套餐",
        "latency": "月付",
        "download": "¥55"
      },
      {
        "node": "220G流量包｜不限时",
        "latency": "一次性付费",
        "download": "¥79"
      },
      {
        "node": "840G流量包｜不限时",
        "latency": "一次性付费",
        "download": "¥188"
      },
      {
        "node": "2050G｜企业套餐",
        "latency": "月付",
        "download": "¥200"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "CyberGuard 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "月付 32 元即可获得 350GB 基础流量，价格门槛较低。",
      "半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。",
      "另有两档一次性不限时流量包（220GB / 840GB），适合不想按月续订的用户。",
      "2025-06-21 的历史测速覆盖 12 个地区、29 个节点，地区范围较丰富。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "rank": 33,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥60",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥162",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥306",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥576",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥120",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥324",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥697",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1152",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "龙猫云 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "SS + IPLC 全专线定位",
      "套餐和教程资料较完整",
      "覆盖常规订阅与长期使用场景。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "fatcat",
    "name": "FATCAT",
    "rank": 34,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "季付",
        "price": "¥54",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "年付",
        "price": "¥192",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "季付",
        "price": "¥108",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "年付",
        "price": "¥384",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "季付",
        "price": "¥270",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "半年付",
        "price": "¥510",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "年付",
        "price": "¥960",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "季付",
        "price": "¥486",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "半年付",
        "price": "¥918",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "年付",
        "price": "¥1728",
        "traffic": "1500G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "FATCAT 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "IEPL/IPLC 内网专线定位",
      "年付和多流量档位可选",
      "支持支付宝、微信与 USDT。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "rank": 35,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "轻量包",
        "billing": "季付",
        "price": "¥30",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "半年付",
        "price": "¥56",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥20",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥54",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥192",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥40",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥108",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥336",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥80",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥216",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥408",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥768",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥160",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥432",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥816",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1536",
        "traffic": "1100G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "TNTCloud 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "IPLC 内网专线定位",
      "季付限量包与常规套餐",
      "支持跨境电商和直播定制。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "rank": 36,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "青云梯 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "运营时间和基础资料相对完整",
      "企业级 IPLC、三网优化与多节点覆盖",
      "常规套餐、长期折扣和企业定制齐全。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "rank": 37,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "pricingMin": "¥15/月（旧资料口径）",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "尚未核实"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "64G/轻量套餐",
        "billing": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "cycle": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billing": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "cycle": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billing": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "cycle": "每月"
      },
      {
        "name": "100G/月-琴",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "200G/月-棋",
        "billing": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "cycle": "每月"
      },
      {
        "name": "500G/月-书",
        "billing": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "speedTable": [
      {
        "node": "套餐名称",
        "latency": "计费方式",
        "download": "价格"
      },
      {
        "node": "64G/轻量套餐",
        "latency": "年付",
        "download": "¥88"
      },
      {
        "node": "128G/轻量套餐",
        "latency": "半年付",
        "download": "¥88"
      },
      {
        "node": "256G/轻量套餐",
        "latency": "季付",
        "download": "¥75"
      },
      {
        "node": "100G/月-琴",
        "latency": "月付",
        "download": "¥15"
      },
      {
        "node": "200G/月-棋",
        "latency": "月付",
        "download": "¥25"
      },
      {
        "node": "500G/月-书",
        "latency": "月付",
        "download": "¥50"
      }
    ],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "山水云 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。",
      "64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。",
      "2026-06-29 的这一次测速覆盖 27 个节点、12 个地区，其中 22 个取得非零下载速度。",
      "美国 3 个节点平均下载 22.54 MB/s，是本次 12 个地区里最高的一组。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "rank": 38,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "灵动·拂风",
        "billing": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "灵动云 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "IEPL/VLESS 与大流量套餐",
      "单次流量包和私人定制齐全",
      "现有实测中主流 AI 解锁表现较好。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "rank": 39,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "浪网 高端",
        "billing": "月付",
        "price": "¥120",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "季付",
        "price": "¥342",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billing": "年付",
        "price": "¥119",
        "traffic": "80G",
        "cycle": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": "¥640",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "billing": "月付",
        "price": "¥70",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "年付",
        "price": "¥714",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "浪网 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "IEPL 专线定位",
      "入门到商业多价格层级",
      "流量包和定制线路补充非标准需求。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "rank": 40,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "限时月付",
        "billing": "月付",
        "price": "¥15",
        "traffic": "72G",
        "cycle": "每月"
      },
      {
        "name": "限时年付",
        "billing": "年付",
        "price": "¥108",
        "traffic": "45G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "月付",
        "price": "¥25",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "季付",
        "price": "¥70",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "年付",
        "price": "¥270",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "月付",
        "price": "¥50",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "季付",
        "price": "¥145",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "年付",
        "price": "¥570",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "月付",
        "price": "¥100",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "季付",
        "price": "¥290",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "EdgeNova 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "多线路自动分配定位",
      "年付小包和多档流量可选",
      "提供新用户优惠码。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "yinghuochong",
    "name": "萤火虫",
    "rank": 41,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": false,
    "plans": [
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "两年付",
        "price": "¥420",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "两年付",
        "price": "¥756",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "三年付",
        "price": "¥972",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "两年付",
        "price": "¥1428",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "三年付",
        "price": "¥1836",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "两年付",
        "price": "¥2399",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "三年付",
        "price": "¥3119",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100G",
        "cycle": "一次性（套餐内流量总额）"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "萤火虫 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "IPLC + VLESS 与原生 IP 定位",
      "60G 年付到 1000G 周期档",
      "支持主流 AI 的现有资料与新用户优惠。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  },
  {
    "id": "sslar",
    "name": "sslar",
    "rank": 42,
    "isMainPromo": false,
    "isFeatured": false,
    "affUrl": "",
    "pricingMin": "待核实",
    "lineType": [
      "高可用专线",
      "多地域节点"
    ],
    "protocols": [
      "Shadowsocks / Trojan"
    ],
    "hasCustomClient": true,
    "plans": [
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "季付",
        "price": "¥46",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "半年付",
        "price": "¥87",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "年付",
        "price": "¥163",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "季付",
        "price": "¥76",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "半年付",
        "price": "¥143",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "年付",
        "price": "¥268",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "月付",
        "price": "¥36",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "季付",
        "price": "¥97",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "半年付",
        "price": "¥183",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "年付",
        "price": "¥345",
        "traffic": "300G",
        "cycle": "每月"
      }
    ],
    "speedTable": [],
    "unlocks": {
      "chatgpt": "conditional",
      "claude": "conditional",
      "gemini": "conditional",
      "netflix": "supported",
      "disney": "supported",
      "youtube": "supported",
      "tiktok": "conditional",
      "spotify": "supported"
    },
    "summary": "sslar 拥有广泛的节点覆盖与稳定跨境带宽，支持主流代理客户端订阅。",
    "strengths": [
      "企业级 IEPL + 多线 BGP",
      "自研多平台客户端并兼容多协议",
      "支持远程桌面协助，适合商务用户。"
    ],
    "limitations": [
      "数据为历史评测记录，实时可用性以官网最新状态为准"
    ],
    "established": "稳定运营中",
    "dataStatus": "review-required",
    "verifiedDate": "2026-08-24"
  }
];

export default brands;
