import React from 'react';
import { motion } from 'framer-motion';
import BrutalistButton from './ui/BrutalistButton';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-clustro-bg pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b-2 border-black">
      <div className="absolute top-10 right-10 w-32 h-32 bg-clustro-accent rounded-full blur-3xl opacity-50 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 bg-black text-white font-mono text-sm mb-6 border border-black">
              AGENCY V2.0
            </div>
            <h1 className="font-sans font-black text-6xl md:text-8xl leading-[0.9] uppercase mb-8">
              We Structure <br/>
              <span className="font-sans font-black text-6xl md:text-8xl leading-[0.9] uppercase mb-8">Digital Chaos.</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-gray-700 max-w-lg mb-10 border-l-4 border-clustro-accent pl-6">
              Full-service digital agency focused on high-impact marketing and custom ERP solutions. We don't do fluff. We build systems that print money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <BrutalistButton onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Scale Now
              </BrutalistButton>
              <BrutalistButton variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView()}>
                Explore Services
              </BrutalistButton>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative hidden md:block"
          >
            <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-4">
                <span className="font-mono font-bold text-2xl">EST. 2025</span>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4 font-sans font-bold text-4xl uppercase leading-tight">
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="w-8 h-8" /> Marketing
                </div>
                <div className="flex items-center gap-2 pl-8 text-gray-400">
                  <ArrowDownRight className="w-8 h-8" /> Influencers
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="w-8 h-8" /> Development
                </div>
                <div className="flex items-center gap-2 pl-8 text-gray-400">
                  <ArrowDownRight className="w-8 h-8" /> Consulting
                </div>
              </div>
              <div className="mt-8 pt-4 border-t-2 border-black flex justify-between font-mono text-xs">
                <span>STATUS: ONLINE</span>
                <span>CAPACITY: 80%</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;