export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://arvindsylvakodathi.com/sitemap.xml',
  }
}
