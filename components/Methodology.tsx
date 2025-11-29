import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Reconnaissance',
    desc: 'Deep audit of your current infrastructure, data hygiene, and market position. We find the leaks.'
  },
  {
    id: '02',
    title: 'Calculated Strategy',
    desc: 'We architect a custom solution. No templates. Whether it is an ERP module or a viral campaign, it is built for you.'
  },
  {
    id: '03',
    title: 'Brutal Execution',
    desc: 'Deployment. We push code, launch ads, and restructure databases. Fast, aggressive, and error-free.'
  },
  {
    id: '04',
    title: 'Optimization',
    desc: 'We do not walk away. We monitor data, kill what does not work, and double down on what prints money.'
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-white border-b-2 border-black relative">
      <div className="absolute left-0 top-0 w-4 md:w-8 h-full bg-clustro-accent border-r-2 border-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-8 md:pl-16">
        <div className="mb-16">
          <h2 className="font-sans font-black text-5xl md:text-7xl uppercase mb-6 relative inline-block">
            The Method
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-clustro-accent -z-10 transform -rotate-1"></span>
          </h2>
          <p className="font-mono text-xl text-gray-600 max-w-2xl">
            Chaos is opportunity. 
          </p>
          <p className="font-mono text-xl max-w-2xl">
            <span className="bg-clustro-accent text-black px-1">
              We bring the order.
            </span>
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row border-t-2 border-black last:border-b-2 hover:bg-clustro-bg transition-colors group"
            >
              <div className="md:w-32 py-6 md:py-12 md:border-r-2 md:border-black flex items-start">
                <span className="font-mono font-bold text-4xl text-transparent text-stroke-black group-hover:text-black transition-colors" style={{ WebkitTextStroke: '1px black' }}>
                  {step.id}
                </span>
              </div>
              <div className="flex-1 py-6 md:py-12 md:pl-12 pr-4">
                <h3 className="font-sans font-black text-3xl md:text-4xl uppercase mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {step.title}
                </h3>
                <p className="font-mono text-gray-600 max-w-xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;