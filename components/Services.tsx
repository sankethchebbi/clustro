import React from 'react';
import { SERVICES } from '../constants';
import { Megaphone, Users, Cpu, Database } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Megaphone: <Megaphone className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  Database: <Database className="w-10 h-10" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-sans font-black text-5xl md:text-7xl uppercase mb-4">
            Our Arsenal
          </h2>
          <p className="font-mono text-xl text-gray-600 max-w-2xl">
            Everything you need to dominate your sector.
          </p>
          {/* <p className="font-mono text-xl text-gray-600 max-w-2xl">
            Nothing you don't.
          </p> */}
          <p className="font-mono text-xl max-w-2xl">
            <span className="bg-clustro-accent text-black px-1">
              Nothing you don't.
            </span>
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className="group border-2 border-black p-8 bg-clustro-bg hover:bg-clustro-accent transition-colors duration-300 relative"
            >
              <div className="absolute top-4 right-4 font-mono font-bold text-2xl opacity-20 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </div>
              <div className="mb-6 p-4 border-2 border-black inline-block bg-white shadow-brutal group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-sans font-black text-3xl uppercase mb-4">
                {service.title}
              </h3>
              <p className="font-mono text-sm md:text-base mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black text-white text-xs font-mono uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;