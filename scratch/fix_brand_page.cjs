const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/brands/[slug].astro');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the main column opening to use clean conditions:
const startMarker = '<div class="brand-main-col">';
const endMarker = '<!-- Sidebar Sticky Column -->';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const currentMainCol = content.substring(startIndex, endIndex);

  // Let's extract the standard brand sections
  // The standard sections are: speedtest, unlocks, plans, pros-cons, faq
  // In the original file, it was:
  // <section class="card-section rev" id="speedtest"> ... </section>
  // <section class="card-section rev rev-d1" id="unlocks"> ... </section>
  // ...
  // <section class="card-section rev" id="faq"> ... </section>

  // Let's replace the whole block between <div class="brand-main-col"> and </div> before <!-- Sidebar Sticky Column -->
  const newMainCol = `<div class="brand-main-col">
          {isGuangsu && (
            <div class="monograph-container">
              {guangsuReviewDossier.chapters.map((chapter) => (
                <section class="card-section rev monograph-section" id={chapter.anchor}>
                  <div class="section-title-wrap">
                    <h2 class="d3 mono-chapter-title">{chapter.title}</h2>
                    {chapter.badge && <span class="badge-measured">{chapter.badge}</span>}
                  </div>
                  <p class="section-sub mono-summary">{chapter.summary}</p>
                  <div class="mono-content-body" set:html={chapter.contentHtml} />
                </section>
              ))}
            </div>
          )}

          {!isGuangsu && (
            <div class="standard-brand-sections">
              {/* Real Speed Test Showcase */}
              <section class="card-section rev" id="speedtest">
                <div class="section-title-wrap">
                  <h2 class="d3">⚡ 节点测速实测报告</h2>
                  {brand.speedImage ? (
                    <span class="badge-measured">真机抓包实测</span>
                  ) : (
                    <span class="badge-vendor">数据来源：官方标称/历史存档</span>
                  )}
                </div>

                {brand.speedImage ? (
                  <div class="speedtest-showcase">
                    <p class="speedtest-intro">
                      以下为本站在特定测试宽带环境下针对 <strong>{brand.name}</strong> 节点跑出的实时并发带宽与握手延迟测速快照：
                    </p>
                    <div class="speedtest-img-container">
                      <a href={brand.speedImage} target="_blank" title="点击查看高清测速原图">
                        <img
                          src={brand.speedImage}
                          alt={\`\${brand.name} 节点测速实测报告图\`}
                          loading="lazy"
                          decoding="async"
                          class="speed-img"
                        />
                      </a>
                    </div>
                    <p class="img-caption">
                      * 提示：点击图片可查看高分辨率原始测速图。测速工具：MAI-TEST-BOT / 联通千兆环境。
                    </p>
                  </div>
                ) : null}

                {brand.speedTable && brand.speedTable.length > 0 ? (
                  <div class="table-responsive">
                    <table class="data-table">
                      <thead>
                        <tr>
                          <th>测试节点 / 地区</th>
                          <th>握手延迟 (Latency)</th>
                          <th>峰值下载速率 (Speed)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brand.speedTable.map((row) => (
                          <tr>
                            <td><strong>{row.node}</strong></td>
                            <td><span class="latency-val">{row.latency}</span></td>
                            <td><span class="speed-val">{row.download}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  !brand.speedImage && (
                    <p class="note-box">
                      该品牌暂未录入单节点速度快照，实际速率以您本地宽带（电信/联通/移动）到落地节点的路由情况为准。
                    </p>
                  )
                )}
              </section>

              {/* Streaming & AI Unlocks */}
              <section class="card-section rev rev-d1" id="unlocks">
                <h2 class="d3">🎬 流媒体与 AI 工具解锁矩阵</h2>
                <p class="section-sub">
                  根据真实节点测试与用户反馈归纳，以下为常用海外流媒体及主流人工智能服务在 <strong>{brand.name}</strong> 节点下的解锁表现：
                </p>

                <div class="unlock-grid">
                  <div class:list={['unlock-box', brand.unlocks.chatgpt]}>
                    <span class="u-name">ChatGPT (OpenAI)</span>
                    <span class="u-status">
                      {brand.unlocks.chatgpt === 'supported' ? '✅ 原生支持' : '⚠️ 视节点而定'}
                    </span>
                  </div>
                  <div class:list={['unlock-box', brand.unlocks.claude]}>
                    <span class="u-name">Claude (Anthropic)</span>
                    <span class="u-status">
                      {brand.unlocks.claude === 'supported' ? '✅ 原生支持' : '⚠️ 视节点而定'}
                    </span>
                  </div>
                  <div class:list={['unlock-box', brand.unlocks.netflix]}>
                    <span class="u-name">Netflix (网飞)</span>
                    <span class="u-status">
                      {brand.unlocks.netflix === 'supported' ? '✅ 全区解锁' : '⚠️ 视节点而定'}
                    </span>
                  </div>
                  <div class:list={['unlock-box', brand.unlocks.youtube]}>
                    <span class="u-name">YouTube 4K</span>
                    <span class="u-status">✅ 秒开流畅</span>
                  </div>
                  <div class:list={['unlock-box', brand.unlocks.disney]}>
                    <span class="u-name">Disney+</span>
                    <span class="u-status">
                      {brand.unlocks.disney === 'supported' ? '✅ 完整解锁' : '⚠️ 视节点而定'}
                    </span>
                  </div>
                  <div class:list={['unlock-box', brand.unlocks.tiktok]}>
                    <span class="u-name">TikTok / 跨境业务</span>
                    <span class="u-status">
                      {brand.unlocks.tiktok === 'supported' ? '✅ 支持' : '⚠️ 需原生节点'}
                    </span>
                  </div>
                </div>

                {/* Unlock Screenshots if any (e.g. 光速云) */}
                {brand.unlockImages && brand.unlockImages.length > 0 && (
                  <div class="unlock-gallery-wrap">
                    <h3 class="d4">📸 流媒体与 ChatGPT 原生解锁测试截图存证</h3>
                    <div class="unlock-gallery">
                      {brand.unlockImages.slice(0, 4).map((imgUrl, uIdx) => (
                        <a href={imgUrl} target="_blank" class="unlock-thumb-link" title="点击查看解锁全图">
                          <img src={imgUrl} alt={\`\${brand.name} 流媒体与AI解锁实测截图 \${uIdx + 1}\`} loading="lazy" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </section>

              {/* Pricing & Plans Table */}
              {brand.plans && brand.plans.length > 0 && (
                <section class="card-section rev rev-d1" id="plans">
                  <h2 class="d3">💰 套餐规格与资费对照表</h2>
                  <p class="section-sub">
                    以下为 <strong>{brand.name}</strong> 官方公布的核心套餐明细（未计算限时优惠码折扣）：
                  </p>

                  <div class="table-responsive">
                    <table class="data-table">
                      <thead>
                        <tr>
                          <th>套餐名称</th>
                          <th>计费周期</th>
                          <th>套餐价格</th>
                          <th>流量配额</th>
                          <th>周期说明</th>
                        </tr>
                      </thead>
                      <tbody>
                        {brand.plans.map((p) => (
                          <tr>
                            <td><strong>{p.name}</strong></td>
                            <td><span class="cycle-pill">{p.billing}</span></td>
                            <td><strong class="price-val">{p.price}</strong></td>
                            <td>{p.traffic}</td>
                            <td class="text-muted">{p.cycle}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* Pros and Cons */}
              <section class="card-section rev" id="pros-cons">
                <h2 class="d3">⚖️ 核心优势与限制说明</h2>
                <div class="pros-cons-grid">
                  <div class="pros-box">
                    <h3 class="pros-title">🌟 核心亮点</h3>
                    <ul>
                      {brand.strengths.map((s) => (
                        <li>
                          <Icon name="check" class="ic-xs check-green" />
                          <span>{s}</span>
                        </li>
                      ))}
                      <li>
                        <Icon name="check" class="ic-xs check-green" />
                        <span>线路架构：{brand.lineType.join(' + ')}</span>
                      </li>
                      {brand.hasCustomClient && (
                        <li>
                          <Icon name="check" class="ic-xs check-green" />
                          <span>提供专属自研客户端，免去繁琐订阅转换与规则配置</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div class="cons-box">
                    <h3 class="cons-title">⚠️ 注意事项与边界</h3>
                    <ul>
                      {brand.limitations.map((lim) => (
                        <li>
                          <Icon name="close" class="ic-xs close-red" />
                          <span>{lim}</span>
                        </li>
                      ))}
                      <li>
                        <Icon name="close" class="ic-xs close-red" />
                        <span>跨境网络不可抗力因素较多，新用户强烈建议先月付体验</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section class="card-section rev" id="faq">
                <h2 class="d3">❓ 常见问题与答疑 (FAQ)</h2>
                <div class="brand-faq-list">
                  <details class="brand-faq-item" open>
                    <summary class="faq-summary">
                      <span>{brand.name} 适合哪些人群选择？</span>
                      <Icon name="plus" class="ic-xs" />
                    </summary>
                    <div class="faq-content">
                      <p>
                        {brand.name} 适合看重 <strong>{brand.lineType[0]}</strong> 晚高峰低延迟、需要流畅播放 4K 视频、访问海外科研资料或轻度 AI 办公的用户。
                        {brand.hasCustomClient ? '由于具备自研客户端，也是完全不想折腾规则导入的小白用户的良好选择。' : '对于极客用户，可将订阅链接直接导入 Clash Verge Rev 或 Shadowrocket 自由编写分流。'}
                      </p>
                    </div>
                  </details>

                  <details class="brand-faq-item">
                    <summary class="faq-summary">
                      <span>如何获取 {brand.name} 的最新可用优惠码？</span>
                      <Icon name="plus" class="ic-xs" />
                    </summary>
                    <div class="faq-content">
                      <p>
                        {brand.discountCode ? (
                          <>
                            本站已为您整理 {brand.name} 官方可用优惠码：<code>{brand.discountCode}</code>。您可以在本页点击“复制优惠码”，在官网结账页面粘贴即可立享折扣。
                          </>
                        ) : (
                          '该品牌目前暂无长期通用优惠码。建议您直接在官网查看是否有阶段性新人促销或年付折算活动。'
                        )}
                      </p>
                    </div>
                  </details>

                  <details class="brand-faq-item">
                    <summary class="faq-summary">
                      <span>购买后无法连接或订阅导入失败怎么办？</span>
                      <Icon name="plus" class="ic-xs" />
                    </summary>
                    <div class="faq-content">
                      <p>
                        1. 检查本地电脑/手机系统时间是否精准同步（时间偏差超过 60 秒会导致 VLESS/Trojan 握手失败）；<br />
                        2. 在官网用户后台刷新订阅令牌，重新拷贝通用订阅链接；<br />
                        3. 如仍有问题，可登录官网工单中心联系官方 7×24 小时技术客服协助。
                      </p>
                    </div>
                  </details>
                </div>
              </section>
            </div>
          )}
        </div>\n\n        `;

  content = content.substring(0, startIndex) + newMainCol + content.substring(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully cleanly rebuilt brand main col');
} else {
  console.error('Markers not found!');
}
