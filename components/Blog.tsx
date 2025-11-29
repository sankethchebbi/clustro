import React, { useState } from 'react';
import { BLOG_POSTS, TESTIMONIALS } from '../constants';
import { BlogPost } from '../types';
import BrutalistButton from './ui/BrutalistButton';
import BlogPostOverlay from './ui/BlogPostOverlay';
import { Quote } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-clustro-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials */}
        <div className="mb-24">
          <h2 className="font-sans font-black text-4xl md:text-6xl uppercase mb-12 text-center">
            Real Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white border-2 border-black p-8 shadow-brutal">
                <Quote className="w-8 h-8 mb-4 text-clustro-accent fill-current" />
                <p className="font-sans font-bold text-xl md:text-2xl mb-6 uppercase leading-tight">
                  "{t.quote}"
                </p>
                <div className="font-mono text-sm border-t-2 border-gray-200 pt-4">
                  <span className="font-bold bg-black text-white px-1 mr-2">{t.author}</span>
                  {t.role} @ {t.company}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="border-t-2 border-black pt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
                <h2 className="font-sans font-black text-5xl md:text-7xl uppercase mb-2">
                  Intelligence
                </h2>
                <p className="font-mono text-gray-600">Download our brain.</p>
             </div>
             {/* Decorative element instead of dead button */}
             <div className="hidden md:block font-mono font-bold bg-black text-clustro-accent px-4 py-2">
               ARCHIVE_ACCESS: GRANTED
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black bg-white">
            {BLOG_POSTS.map((post, idx) => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className={`p-6 md:p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-black last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group flex flex-col h-full`}
              >
                <div className="mb-6 overflow-hidden border-2 border-black h-48 relative">
                  <div className="absolute inset-0 bg-clustro-accent opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold text-clustro-accent">
                   <span className="bg-black px-2 py-1">{post.category}</span>
                   <span className="text-black">{post.readTime}</span>
                </div>
                <h3 className="font-sans font-bold text-2xl uppercase mb-3 group-hover:underline decoration-4 decoration-clustro-accent underline-offset-4">
                  {post.title}
                </h3>
                <p className="font-mono text-sm text-gray-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="font-mono text-xs font-bold mt-auto flex justify-between items-center">
                  <span>{post.date}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-2 py-1">READ_INTEL &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <BlogPostOverlay post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default Blog;