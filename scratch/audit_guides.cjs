const fs = require('fs');
const path = require('path');

// Read guides from compiled or source
const guidesSource = fs.readFileSync('src/data/guides.ts', 'utf8');

// Basic counts for each guide
console.log('--- 梯子Blog 核心专题万字级深度验收审计 ---');

const guideSlugs = [
  'decision-tree',
  'iepl-vs-iplc-vs-bgp',
  'airport-anti-scam',
  'chatgpt-streaming-unlock',
  'client-setup-rules'
];

guideSlugs.forEach(slug => {
  const htmlPath = path.join('dist', 'guides', slug, 'index.html');
  if (fs.existsSync(htmlPath)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    
    // Strip HTML tags to get pure text
    const textOnly = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const chineseChars = (textOnly.match(/[\u4e00-\u9fa5]/g) || []).length;
    const totalChars = textOnly.length;
    const fileSize = fs.statSync(htmlPath).size;
    
    // Check internal links
    const internalLinks = [...html.matchAll(/href="(\/(?:guides|brands|speedtest|clients)[^"]*)"/g)].map(m => m[1]);
    const uniqueInternalLinks = [...new Set(internalLinks)];
    
    console.log(`\n========================================`);
    console.log(`文章 Slug: ${slug}`);
    console.log(`HTML 文件大小: ${(fileSize / 1024).toFixed(2)} KB`);
    console.log(`总有效文本字符数: ${totalChars}`);
    console.log(`纯中文字符数: ${chineseChars}`);
    console.log(`站内深度内部链接数: ${uniqueInternalLinks.length} 个独立 URL`);
    console.log(`示例内部链接:`, uniqueInternalLinks.slice(0, 5));
  } else {
    console.error(`Missing HTML for ${slug}`);
  }
});
