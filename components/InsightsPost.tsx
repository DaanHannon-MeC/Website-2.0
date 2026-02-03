import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { insightsPosts } from '../data/insightsPosts';
import Header from './Header';
import Footer from './Footer';

const InsightsPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = insightsPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.seo.schema.headline,
    "description": post.seo.schema.description,
    "image": post.image,
    "datePublished": post.seo.schema.datePublished,
    "author": {
      "@type": "Person",
      "name": post.seo.schema.author
    },
    "publisher": {
      "@type": "Organization",
      "name": post.seo.schema.publisher
    }
  };

  return (
    <div className="min-h-screen bg-brand-black">
      <Header isScrolled={true} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Article Header */}
      <article className="pt-32 pb-20">
        {/* Hero Image */}
        <div className="container mx-auto px-8 md:px-12 mb-12">
          <div className="relative overflow-hidden rounded-sm max-w-6xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover filter grayscale"
            />
            <div className="absolute top-6 left-6 px-6 py-2 bg-brand-green/90 backdrop-blur-sm">
              <span className="text-xs tracking-widest uppercase font-bold text-brand-black">
                {post.category}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-8 md:px-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-brand-cream/40">
              <li>
                <Link to="/" className="hover:text-brand-green transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/insights" className="hover:text-brand-green transition-colors">
                  Insights
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-cream/60">{post.title}</li>
            </ol>
          </nav>

          {/* Meta Info */}
          <div className="mb-8">
            <time className="text-xs tracking-widest uppercase text-brand-cream/40 font-bold block mb-4">
              {new Date(post.date).toLocaleDateString('nl-BE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl italic mb-8 text-brand-cream leading-tight">
            {post.title}
          </h1>

          {/* Excerpt with decorative element */}
          <div className="relative mb-16">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-green to-transparent opacity-30"></div>
            <p className="text-xl md:text-2xl text-brand-cream/70 leading-relaxed font-light italic pl-8 border-l-2 border-brand-green/30">
              {post.excerpt}
            </p>
          </div>

          {/* Divider with decorative dots */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-2 h-2 bg-brand-green rounded-full"></div>
            <div className="flex-1 h-[1px] bg-brand-green/30"></div>
            <div className="w-2 h-2 bg-brand-green rounded-full"></div>
          </div>

          {/* Article Body with Magazine Layout */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Intro with drop cap */}
            <div
              className="text-brand-cream/80 leading-relaxed space-y-6 first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-brand-green first-letter:leading-none first-letter:mt-1"
              dangerouslySetInnerHTML={{ __html: post.content.intro }}
            />

            {/* Sections with alternating layouts */}
            {post.content.sections.map((section, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === post.content.sections.length - 1;

              return (
                <div key={index} className="mt-16 md:mt-24">
                  {/* Section number */}
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-brand-green/30 font-bold text-sm tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 h-[1px] bg-brand-cream/10"></div>
                  </div>

                  {/* Alternating layout */}
                  <div className={`${isEven ? 'md:grid md:grid-cols-12 md:gap-12' : ''}`}>
                    {/* Heading */}
                    <div className={isEven ? 'md:col-span-5' : ''}>
                      <h2 className="font-serif text-3xl md:text-5xl italic mb-6 text-brand-cream leading-tight">
                        {section.heading}
                      </h2>
                      {isEven && (
                        <div className="hidden md:block mt-8">
                          <div className="w-12 h-12 border-2 border-brand-green/30 rotate-45"></div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className={isEven ? 'md:col-span-7' : ''}>
                      <div
                        className="text-brand-cream/80 leading-relaxed space-y-6 text-lg"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />

                      {/* Decorative quote line for odd sections */}
                      {!isEven && !isLast && (
                        <div className="mt-12 flex items-center gap-4">
                          <div className="w-16 h-[2px] bg-brand-green"></div>
                          <span className="text-brand-green/60 text-sm italic">•••</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 pt-12 border-t border-brand-cream/10">
            <div className="bg-brand-green/5 border border-brand-green/20 p-12 rounded-sm">
              <h3 className="font-serif text-3xl md:text-4xl italic mb-4 text-brand-cream">
                Klaar voor je <span className="text-brand-green">verhaal</span>?
              </h3>
              <p className="text-brand-cream/70 mb-8 leading-relaxed">
                Laten we in een 'Zeget'is' call (30 minuten) bespreken wat jouw project nodig heeft.
                Geen verplichtingen, gewoon eerlijk advies.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-brand-green text-brand-black font-bold uppercase tracking-widest text-sm hover:bg-brand-green/90 transition-all"
              >
                Plan je gesprek
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-16">
            <Link
              to="/insights"
              className="inline-flex items-center gap-3 text-brand-green hover:gap-4 transition-all group"
            >
              <span className="text-xl">←</span>
              <span className="text-sm tracking-widest uppercase font-bold">
                Terug naar Insights
              </span>
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="container mx-auto px-8 md:px-12 mt-32">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-serif text-4xl md:text-5xl italic mb-12">
              Meer <span className="text-brand-green">Insights</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {insightsPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden mb-4 rounded-sm">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full aspect-[4/3] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 px-4 py-1 bg-brand-green/90 backdrop-blur-sm">
                        <span className="text-[10px] tracking-widest uppercase font-bold text-brand-black">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-serif text-2xl mb-2 group-hover:text-brand-green transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-brand-cream/60 text-sm">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default InsightsPost;
