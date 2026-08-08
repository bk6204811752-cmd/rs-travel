import { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt for rstravelsjsr.com
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'PetalBot', 'Bytespider', 'MJ12bot', 'DotBot'],
        disallow: ['/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/fonts/'],
      },
    ],
    sitemap: [
      'https://www.rstravelsjsr.com/sitemap.xml',
    ],
  };
}
