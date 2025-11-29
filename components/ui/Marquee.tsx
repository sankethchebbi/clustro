import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = '' }) => {
  return (
    <div className={`marquee-container bg-black py-4 border-y-2 border-black overflow-hidden ${className}`}>
      <div className="marquee-content whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-white font-mono font-bold text-xl md:text-2xl mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;