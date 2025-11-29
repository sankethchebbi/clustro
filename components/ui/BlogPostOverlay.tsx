import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock } from 'lucide-react';
import { BlogPost } from '../../types';
import BrutalistButton from './BrutalistButton';

interface BlogPostOverlayProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogPostOverlay: React.FC<BlogPostOverlayProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-50 bg-white overflow-y-auto"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 md:p-6 bg-white border-b-2 border-black">
           <div className="font-mono font-bold text-sm uppercase hidden md:block">
             Reading // {post.category}
           </div>
           <BrutalistButton onClick={onClose} className="!py-2 !px-4 flex items-center gap-2">
             <span className="hidden md:inline">Close Intel</span> <X className="w-5 h-5" />
           </BrutalistButton>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-24">
          <div className="py-12 md:py-16">
            <h1 className="font-sans font-black text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 font-mono text-sm border-y-2 border-black py-4 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {post.readTime}
              </div>
              <div className="ml-auto bg-clustro-accent px-2 text-black font-bold">
                {post.category}
              </div>
            </div>

            <div className="mb-12 border-2 border-black shadow-brutal-lg">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-auto object-cover max-h-[500px] grayscale contrast-125"
              />
            </div>

            <article className="prose prose-xl prose-headings:font-sans prose-headings:font-black prose-p:font-mono prose-p:text-gray-800 max-w-none">
              <p className="font-bold text-xl md:text-2xl mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
            
            <div className="mt-16 pt-12 border-t-4 border-black text-center">
              <h3 className="font-sans font-bold text-3xl uppercase mb-6">Need this expertise?</h3>
              <BrutalistButton 
                variant="primary" 
                className="text-xl px-12 py-6"
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 500);
                }}
              >
                Start A Project
              </BrutalistButton>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogPostOverlay;