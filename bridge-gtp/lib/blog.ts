import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;       // ISO date string
  author: string;
  category: string;   // e.g. "Africa Insights", "Talent", "Markets"
  tags?: string[];
  cover?: string;     // /public path to a cover image (optional)
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingMinutes: number;
};

export type Category = {
  slug: string;
  name: string;
  count: number;
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Read all posts from /content/blog/*.mdx.
 * Sorted newest-first. Drafts are excluded in production.
 */
export function getAllPosts(): Post[] {
  // If the content directory doesn't exist yet (first deploy with no posts),
  // return an empty list rather than crashing.
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  const posts: Post[] = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;
      return {
        ...fm,
        slug: file.replace(/\.mdx$/, ''),
        content,
        readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
      };
    })
    .filter((p) => process.env.NODE_ENV === 'development' || !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return posts;
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function getAllCategories(): Category[] {
  const counts = new Map<string, { name: string; count: number }>();
  for (const post of getAllPosts()) {
    const slug = slugify(post.category);
    const existing = counts.get(slug);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(slug, { name: post.category, count: 1 });
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(slug: string): Post[] {
  return getAllPosts().filter((p) => slugify(p.category) === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return all.slice(0, limit);
  return all
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSameCategory = a.category === current.category ? 1 : 0;
      const bSameCategory = b.category === current.category ? 1 : 0;
      return bSameCategory - aSameCategory;
    })
    .slice(0, limit);
}

export { slugify };
