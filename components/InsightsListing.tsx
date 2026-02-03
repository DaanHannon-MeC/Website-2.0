import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { insightsPosts } from '../data/insightsPosts';
import Header from './Header';
import Footer from './Footer';

const InsightsListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  // Get unique categories
  const categories = ['Alle', ...Array.from(new Set(insightsPosts.map(post => post.category)))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'Alle'
    ? insightsPosts
    : insightsPosts.filter(post => post.category === selectedCategory);

  // Get featured post (most recent)
  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-brand-black">
      <Header isScrolled={true} />

      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Header Section */}
          <div className="mb-12 md:mb-20">
            <div className="max-w-4xl">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl italic mb-4 md:mb-6 leading-tight md:leading-none">
                Insights & <span className="text-brand-green">Stories</span>
              </h1>
              <div className="w-16 md:w-24 h-[2px] bg-brand-green mb-6 md:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-cream/70 leading-relaxed font-light">
                Eerlijke verhalen over videoproductie, transparante prijzen, en praktische tips.
                Geen corporate bullshit, gewoon straight talk van een filmmaker met 10 jaar ervaring.
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-10 md:mb-16 flex flex-wrap gap-2 md:gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 text-xs md:text-sm tracking-widest uppercase font-bold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-green text-brand-black'
                    : 'bg-brand-cream/5 text-brand-cream/60 hover:bg-brand-cream/10 hover:text-brand-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post - Full Width Hero */}
          {featuredPost && (
            <Link
              to={`/${featuredPost.slug}`}
              className="block mb-12 md:mb-20 group"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={featuredPost.image}
                  alt={`${featuredPost.title} - Videoproductie Mechelen door Zeget'is`}
                  className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 md:top-6 md:left-6 px-3 py-1.5 md:px-6 md:py-2 bg-brand-green/90 backdrop-blur-sm">
                  <span className="text-[10px] md:text-xs tracking-widest uppercase font-bold text-brand-black">
                    {featuredPost.category}
                  </span>
                </div>

                {/* Featured Label */}
                <div className="absolute top-3 right-3 md:top-6 md:right-6 px-3 py-1.5 md:px-6 md:py-2 bg-brand-black/80 backdrop-blur-sm border border-brand-cream/20">
                  <span className="text-[10px] md:text-xs tracking-widest uppercase font-bold text-brand-cream">
                    Featured
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent">
                  <time className="text-[9px] md:text-xs tracking-widest uppercase text-brand-cream/60 font-bold block mb-2 md:mb-4">
                    {new Date(featuredPost.date).toLocaleDateString('nl-BE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>

                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-2 md:mb-4 group-hover:text-brand-green transition-colors duration-300 leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-brand-cream/80 leading-relaxed mb-3 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl line-clamp-2 md:line-clamp-none">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-xs md:text-sm tracking-widest uppercase text-brand-green font-bold">
                      Lees Artikel
                    </span>
                    <span className="w-8 md:w-12 h-[2px] bg-brand-green group-hover:w-12 md:group-hover:w-20 transition-all"></span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Magazine Grid Layout */}
          {regularPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
              {regularPosts.map((post, index) => {
                // Magazine-style layout: alternating sizes
                const isLarge = index % 3 === 0;
                const gridClass = isLarge
                  ? 'md:col-span-8'
                  : 'md:col-span-4';

                return (
                  <article
                    key={post.id}
                    className={`group ${gridClass}`}
                  >
                    <Link to={`/${post.slug}`}>
                      <div className="relative overflow-hidden mb-4 md:mb-6 rounded-sm">
                        <img
                          src={post.image}
                          alt={`${post.title} - ${post.category} Zeget'is Mechelen`}
                          className={`w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 ${
                            isLarge ? 'aspect-[16/9]' : 'aspect-[4/5] md:aspect-[4/5]'
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 md:top-4 md:left-4 px-3 py-1 md:px-4 md:py-1 bg-brand-green/90 backdrop-blur-sm">
                          <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-brand-black">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <time className="text-[9px] md:text-[10px] tracking-widest uppercase text-brand-cream/40 font-bold mb-2 md:mb-3 block">
                        {new Date(post.date).toLocaleDateString('nl-BE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>

                      <h3 className={`font-serif mb-3 md:mb-4 group-hover:text-brand-green transition-colors duration-300 leading-tight ${
                        isLarge ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-2xl md:text-3xl'
                      }`}>
                        {post.title}
                      </h3>

                      <p className="text-sm md:text-base text-brand-cream/70 leading-relaxed mb-4 md:mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="text-[10px] md:text-xs tracking-widest uppercase text-brand-green font-bold">
                          Lees Meer
                        </span>
                        <span className="w-8 md:w-10 h-[1px] bg-brand-green group-hover:w-12 md:group-hover:w-16 transition-all"></span>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          )}

          {/* No Posts Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-cream/60 text-xl">
                Geen posts gevonden in deze categorie.
              </p>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="mt-16 md:mt-24 lg:mt-32 max-w-4xl mx-auto">
            <div className="border-t border-brand-cream/10 pt-10 md:pt-16">
              <div className="bg-brand-green/5 border border-brand-green/20 p-6 sm:p-8 md:p-12 rounded-sm text-center">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic mb-3 md:mb-4 text-brand-cream">
                  Mis geen <span className="text-brand-green">insights</span>
                </h3>
                <p className="text-sm md:text-base text-brand-cream/70 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                  Nieuwe posts over videoproductie, transparante prijzen, en eerlijke tips.
                  Geen spam, gewoon waarde.
                </p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 bg-brand-green text-brand-black font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-brand-green/90 transition-all"
                >
                  Blijf op de hoogte
                  <span className="text-lg md:text-xl">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsightsListing;
