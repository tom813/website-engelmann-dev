const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

const pages = [
  '/',
  '/jobs'
];

const domain = 'https://www.scalarsoft.de';

const sitemap = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' })
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

pages.forEach(page => {
  const url = sitemap.ele('url');
  url.ele('loc', `${domain}${page}`);
  // Optional: Hinzufügen von <lastmod>, <changefreq>, <priority>
});

const xml = sitemap.end({ pretty: true});

fs.writeFileSync('public/sitemap.xml', xml);
