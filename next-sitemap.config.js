/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://mostly.ai/docs',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,
    generateIndexSitemap: false,
    sitemapBaseFileName: "sitemap-docs",
    exclude: ['*/_meta']
  }