import React from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'De Kracht van Authentieke Bedrijfsvideo\'s',
    excerpt: 'In een wereld vol gepolijste corporate content, valt authenticiteit op. Ontdek waarom echte verhalen meer impact hebben dan perfect geregisseerde scenes.',
    date: '2026-01-15',
    image: '/assets/bts/Bts.jpg',
    category: 'Insights'
  },
  {
    id: '2',
    title: 'Van Concept tot Scherm: Onze Creatieve Proces',
    excerpt: 'Een kijkje achter de schermen van hoe wij jouw bedrijfsverhaal tot leven brengen. Van eerste gesprek tot finale delivery.',
    date: '2026-01-08',
    image: '/assets/bts/bts 1.jpg',
    category: 'Behind The Scenes'
  },
  {
    id: '3',
    title: 'Waarom Lokale Bedrijven Premium Video Verdienen',
    excerpt: 'De kwaliteit die normaal alleen grote merken kunnen betalen, is nu beschikbaar voor lokale bedrijven. Hier is waarom dat belangrijk is.',
    date: '2025-12-20',
    image: '/assets/bts/bts 2.jpg',
    category: 'Industry'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="relative bg-brand-black py-40">
      <div className="container mx-auto px-8 md:px-12">
        <div className="mb-20">
          <h2 className="font-serif text-5xl md:text-7xl italic mb-4">
            Insights & <span className="text-brand-green">Stories</span>
          </h2>
          <div className="w-20 h-[1px] bg-brand-green"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 rounded-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-4 py-1 bg-brand-green/90 backdrop-blur-sm">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-brand-black">
                    {post.category}
                  </span>
                </div>
              </div>

              <time className="text-[10px] tracking-widest uppercase text-brand-cream/40 font-bold mb-3 block">
                {new Date(post.date).toLocaleDateString('nl-BE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>

              <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-brand-green transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-brand-cream/70 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-xs tracking-widest uppercase text-brand-green font-bold">
                  Lees Meer
                </span>
                <span className="w-10 h-[1px] bg-brand-green group-hover:w-16 transition-all"></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
