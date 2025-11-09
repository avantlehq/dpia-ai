/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dpia.ai',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: 'https://dpia.ai',
      hreflang: 'x-default',
    },
    {
      href: 'https://dpia.ai/en',
      hreflang: 'en',
    },
    {
      href: 'https://dpia.ai/sk',
      hreflang: 'sk',
    },
    {
      href: 'https://dpia.ai/de',
      hreflang: 'de',
    },
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}