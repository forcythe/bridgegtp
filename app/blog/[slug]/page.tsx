import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { CtaBanner } from '@/components/CtaBanner';
import { getAllPosts, getPost, getRelatedPosts, slugify } from '@/lib/blog';
import { SITE_CONFIG, SITE_URL } from '@/lib/site-config';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

function ArticleJsonLd({
  post,
}: {
  post: NonNullable<ReturnType<typeof getPost>>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author, url: SITE_URL },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <ArticleJsonLd post={post} />
      <Nav />
      <main id="main" className="bg-section-cream">
        <article className="pt-12 md:pt-20">
          <header className="container-wide max-w-3xl mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6 text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-gold">
              <Link
                href={`/blog/category/${slugify(post.category)}`}
                className="hover:text-gold-dark transition-colors"
              >
                {post.category}
              </Link>
              <span aria-hidden className="w-1 h-1 rounded-full bg-navy/30" />
              <span className="text-navy/50">{post.readingMinutes} min read</span>
            </div>
            <h1
              className="font-heading font-bold text-navy leading-[1.08] tracking-[-0.025em] mb-6"
              style={{ fontSize: 'clamp(34px, 4.6vw, 60px)' }}
            >
              {post.title}
            </h1>
            <p className="text-navy/70 text-xl leading-[1.6] mb-8">{post.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-navy/55 pt-6 border-t border-navy/10">
              <span className="font-heading font-bold text-navy">{post.author}</span>
              <span aria-hidden className="w-1 h-1 rounded-full bg-navy/30" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          </header>

          <div className="container-wide max-w-3xl pb-20 md:pb-28">
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    ],
                  },
                }}
              />
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-navy/10">
                <p className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold mb-3">Tags</p>
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((t) => <li key={t} className="pill">{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-white section-y border-t border-navy/8" aria-labelledby="related-heading">
            <div className="container-wide">
              <p className="eyebrow mb-5">Continue Reading</p>
              <h2 id="related-heading" className="section-title text-navy mb-12">
                More from {SITE_CONFIG.shortName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {related.map((p) => <PostCard key={p.slug} post={p} />)}
              </div>
            </div>
          </section>
        )}

        <CtaBanner
          title="Hiring in Africa? Talk to us."
          ctaLabel="Speak to Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
