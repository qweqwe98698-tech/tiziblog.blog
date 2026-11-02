const fs = require('fs');
const path = require('path');

const targetPages = [
  'dist/index.html',
  'dist/vpn/index.html',
  'dist/jichang/index.html',
  'dist/clash/index.html',
  'dist/nodes/index.html',
  'dist/tizi/index.html',
  'dist/free/index.html',
  'dist/tutorial/index.html',
  'dist/brands/index.html',
  'dist/speedtest/index.html',
  'dist/faq/index.html',
  'dist/warnings/index.html',
  'dist/brands/guangsu/index.html'
];

console.log('--- STARTING PRE-LAUNCH SEO AUDIT ---');
let allPass = true;

for (const relPath of targetPages) {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING:', relPath);
    allPass = false;
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf8');
  
  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '';
  const hasDupSuffix = (title.match(/梯子Blog/g) || []).length > 1;
  
  // H1
  const h1Matches = html.match(/<h1[\s\S]*?<\/h1>/gi) || [];
  
  // Canonical
  const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/);
  const canonical = canonicalMatch ? canonicalMatch[1] : '';
  const canonicalValid = canonical.startsWith('https://tiziblog.blog/') && canonical.endsWith('/');
  
  // Description
  const descMatch = html.match(/<meta name="description" content="(.*?)"/);
  const desc = descMatch ? descMatch[1] : '';
  
  // JSON-LD
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  let jsonLdValid = false;
  if (jsonLdMatch) {
    try {
      JSON.parse(jsonLdMatch[1]);
      jsonLdValid = true;
    } catch (e) {
      jsonLdValid = false;
    }
  }

  console.log('PAGE:', relPath);
  console.log('  Title:', title);
  console.log('  Single H1 count:', h1Matches.length);
  console.log('  Canonical:', canonical, canonicalValid ? '✓' : 'FAIL');
  console.log('  Desc length:', desc.length);
  console.log('  JSON-LD valid:', jsonLdValid ? '✓' : 'FAIL');
  console.log('  Duplicate Title Suffix:', hasDupSuffix ? 'FAIL' : '✓ OK');

  if (!title || h1Matches.length !== 1 || !canonicalValid || !desc || !jsonLdValid || hasDupSuffix) {
    allPass = false;
  }
}

console.log('--- ALL PASS:', allPass, '---');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.html')) {
      results.push(file);
    }
  });
  return results;
}

const htmlFiles = getFiles('dist');
let totalAff = 0;
let riskyAff = 0;

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const affMatches = content.match(/<a[^>]*href=["'][^"']*(?:aff|code=|invite)[^"']*["'][^>]*>/gi) || [];
  for (const m of affMatches) {
    totalAff++;
    if (!m.includes('nofollow') || !m.includes('sponsored')) {
      console.error('RISKY AFF LINK IN', f, ':', m);
      riskyAff++;
    }
  }
}

console.log('AUDIT AFF LINKS: Total = ' + totalAff + ', Risky = ' + riskyAff);
