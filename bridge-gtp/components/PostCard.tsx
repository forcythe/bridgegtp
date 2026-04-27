import Link from 'next/link';
import type { Post } from '@/lib/blog';
import { slugify } from '@/lib/blog';

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={[
        'group relative bg-white border border-navy/10 rounded-md overflow-hidden transition-all duration-300',
        'hover:border-gold hover:shadow-elev-3 hover:-translate-y-1',
        featured ? 'lg:col-span-2 lg:flex' : '',
      ].join(' ')}
    >
      <div
        aria-hidden
        className={[
          'bg-gradient-to-br from-navy-700 to-navy relative',
          featured ? 'aspect-video lg:aspect-auto lg:w-1/2' : 'aspect-[16/9]',
        ].join(' ')}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading text-[10px] font-bold uppercase tracking-[0.2em] text-gold/70">
            {post.category}
          </span>
        </div>
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />
      </div>

      <div className={['p-6 md:p-8', featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''].join(' ')}>
        <div className="flex items-center gap-3 mb-3 text-[11px] font-heading font-bold uppercase tracking-[0.16em] text-gold">
          <Link href={`/blog/category/${slugify(post.category)}`} className="hover:text-gold-dark transition-colors">
            {post.category}
          </Link>
          <span aria-hidden className="w-1 h-1 rounded-full bg-navy/30" />
          <span className="text-navy/50">{post.readingMinutes} min read</span>
        </div>

        <h3
          className={[
            'font-heading font-bold text-navy leading-[1.15] tracking-[-0.015em] mb-3',
            featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl',
          ].join(' ')}
        >
          <Link href={`/blog/${post.slug}`} className="hover:text-red transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-navy/65 leading-[1.65] mb-5">{post.description}</p>

        <div className="flex items-center justify-between text-xs text-navy/55">
          <span>{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span aria-hidden className="font-heading font-bold text-gold transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </article>
  );
}
