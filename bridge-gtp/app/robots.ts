import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Dynamic robots.txt served at /robots.txt.
 * Points crawlers at the sitemap and allows everything by default.
 * Disallow private paths (e.g. /admin, /api) here when they exist.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // When private routes are added, list them here:
        // disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
