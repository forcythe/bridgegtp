import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { PostCard } from '@/components/PostCard';
import { CtaBanner } from '@/components/CtaBanner';
import { getAllCategories, getPostsByCategory } from '@/lib/blog';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const cat = getAllCategories().find((c) => c.slug === params.slug);
  if (!cat) return { title: 'Category not found' };
  return {
    title: `${cat.name} — Insights`,
    description: `Bridge insights tagged ${cat.name}.`,
    alternates: { canonical: `/blog/category/${cat.slug}` },
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const cat = getAllCategories().find((c) => c.slug === params.slug);
  if (!cat) notFound();
  const posts = getPostsByCategory(params.slug);

  return (
    <>
      <Nav />
      <main id="main" className="bg-section-cream">
        <section className="container-wide section-y">
          <div className="max-w-3xl mb-12">
            <Link href="/blog" className="link-arrow text-gold mb-6 inline-flex">
              <span aria-hidden>←</span> All Insights
            </Link>
            <p className="eyebrow eyebrow-red mt-6 mb-5">Category</p>
            <h1
              className="font-heading font-bold text-navy leading-[1.05] tracking-[-0.025em] mb-3"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              {cat.name}
            </h1>
            <p className="text-navy/55 text-lg">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>

        <CtaBanner
          title="Want to talk to us about Africa?"
          ctaLabel="Speak to Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
