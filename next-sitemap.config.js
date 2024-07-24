/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.URL || 'https://huwa-webpage.vercel.app/',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: true, //
    // ...other options
  }