import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { getAllPosts, getAllCategories } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE_URL}/about`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/executive-talent`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/graduate-trainee`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/contact`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${SITE_URL}/blog`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getAllCategories().map((c) => ({
    url: `${SITE_URL}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes, ...categoryRoutes];
}
