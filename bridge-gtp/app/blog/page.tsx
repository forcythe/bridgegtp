import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { CtaBanner } from '@/components/CtaBanner';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Insights — Africa, talent, markets',
  description:
    'Bridge Insights — analysis on African markets, talent, and how the continent actually works. Written by people on the ground.',
  alternates: { canonical: '/blog' },
};

function BlogJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_CONFIG.name} — Insights`,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${SITE_CONFIG.author.url}/#organization` },
    inLanguage: 'en-GB',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const [featured, ...rest] = posts;

  return (
    <>
      <BlogJsonLd />
      <Nav />
      <main id="main" className="bg-section-cream">
        <section className="container-wide section-y" aria-labelledby="blog-heading">
          <div className="max-w-3xl mb-16">
            <p className="eyebrow eyebrow-red mb-5">Insights</p>
            <h1
              id="blog-heading"
              className="font-heading font-bold text-navy leading-[1.05] tracking-[-0.025em] mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
            >
              How Africa actually works.
            </h1>
            <p className="text-navy/70 text-lg md:text-xl leading-[1.65]">
              Notes from the ground on talent, markets, and the work of building in Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Posts */}
            <div className="lg:col-span-9">
              {posts.length === 0 ? (
                <div className="bg-white border border-navy/10 rounded-md p-12 text-center">
                  <p className="text-navy/60 text-lg">First articles publishing soon.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {featured && <PostCard post={featured} featured />}
                  {rest.map((p) => <PostCard key={p.slug} post={p} />)}
                </div>
              )}
            </div>

            {/* Categories sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-gold mb-5">
                  Categories
                </p>
                {categories.length === 0 ? (
                  <p className="text-navy/50 text-sm">No categories yet.</p>
                ) : (
                  <ul className="flex flex-col gap-1">
                    {categories.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/blog/category/${c.slug}`}
                          className="flex items-center justify-between py-3 border-b border-navy/8 font-heading font-bold text-navy hover:text-red transition-colors"
                        >
                          <span>{c.name}</span>
                          <span className="text-xs text-navy/45 font-normal">{c.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>
          </div>
        </section>

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
