const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function audit() {
  console.log('--- AUDITING /brands/guangsu/ ---');
  const res = await fetchPage('http://localhost:4323/brands/guangsu/');
  console.log('Status code:', res.statusCode);
  if (res.statusCode !== 200) {
    console.error('FAILED: Status code is not 200');
    return;
  }

  const html = res.data;

  // 1. Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  console.log('Page Title:', titleMatch ? titleMatch[1] : 'NONE');

  // 2. Meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  console.log('Meta Description:', descMatch ? descMatch[1] : 'NONE');

  // 3. Extract monograph-container content
  const startIdx = html.indexOf('class="monograph-container"');
  if (startIdx === -1) {
    console.error('FAILED: .monograph-container not found!');
    return;
  }
  const endIdx = html.indexOf('</aside>');
  const monographHtml = html.substring(startIdx, endIdx);

  // Strip tags and scripts to count pure Chinese characters
  const textOnly = monographHtml.replace(/<[^>]+>/g, ' ');
  const chineseChars = textOnly.match(/[\u4e00-\u9fa5]/g);
  console.log('Rendered Monograph Pure Chinese Characters:', chineseChars ? chineseChars.length : 0);

  // 4. Verify 10 chapter anchors
  const requiredAnchors = [
    'verdict',
    'plans-analysis',
    'architecture',
    'speedtest-report',
    'unlocks-matrix',
    'clients-guide',
    'decision-personas',
    'troubleshooting',
    'faq-chapter',
    'conclusion-cta'
  ];

  console.log('\n--- Checking 10 Chapter Anchors in DOM ---');
  for (const anchor of requiredAnchors) {
    const hasId = html.includes(`id="${anchor}"`);
    const hasHref = html.includes(`href="#${anchor}"`);
    console.log(`- Anchor #${anchor}: target id=${hasId ? '✅' : '❌'}, TOC link=${hasHref ? '✅' : '❌'}`);
  }

  // 5. Verify JSON-LD
  console.log('\n--- Checking JSON-LD Structured Data ---');
  const jsonLdMatch = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      console.log('JSON-LD valid JSON: ✅');
      const types = (parsed['@graph'] || [parsed]).map(item => item['@type']);
      console.log('Found @types:', types);
      
      const faqItem = (parsed['@graph'] || []).find(item => item['@type'] === 'FAQPage');
      if (faqItem && faqItem.mainEntity) {
        console.log(`FAQPage contains ${faqItem.mainEntity.length} questions: ✅`);
      }
    } catch (e) {
      console.error('JSON-LD parse error:', e.message);
    }
  } else {
    console.log('JSON-LD script tag not found');
  }

  // 6. Check images referenced on page
  console.log('\n--- Checking Local Image Assets ---');
  const imgMatches = html.match(/src="(\/images\/[^"]+)"/g) || [];
  const uniqueImgs = [...new Set(imgMatches.map(m => m.replace(/src="([^"]+)"/, '$1')))];
  for (const imgUrl of uniqueImgs) {
    const localPath = path.join('public', imgUrl);
    const exists = fs.existsSync(localPath);
    console.log(`- Image ${imgUrl}: ${exists ? 'EXISTS ✅' : 'MISSING ❌'}`);
  }

  // 7. Check Affiliate URL security attributes
  console.log('\n--- Checking Affiliate Link Attributes ---');
  const affUrl = 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y';
  if (html.includes(affUrl)) {
    const hasNofollow = html.includes('rel="nofollow sponsored noopener"');
    console.log(`Affiliate link present: ✅, carries rel="nofollow sponsored noopener": ${hasNofollow ? '✅' : '❌'}`);
  }

  // 8. Check Discount Code
  console.log('\n--- Checking Discount Code ---');
  const hasCode = html.includes('AMM');
  console.log(`Discount code AMM present: ${hasCode ? '✅' : '❌'}`);

  console.log('\nAudit complete!');
}

audit();
