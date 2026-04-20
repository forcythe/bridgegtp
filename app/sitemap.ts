import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Dynamic sitemap served at /sitemap.xml.
 * Next.js handles the XML generation from this array.
 *
 * When you add new routes, add them here. Anchor-only sections on the homepage
 * are NOT listed separately (search engines treat them as part of the same URL).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // When you add /privacy, /terms, /cookies etc., register them here:
    // {
    //   url: `${SITE_URL}/privacy`,
    //   lastModified: now,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
  ];
}
