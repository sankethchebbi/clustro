import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import BrutalistButton from './ui/BrutalistButton';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-sans font-black text-3xl tracking-tighter uppercase relative">
              Clustro
              <span className="absolute -top-1 -right-3 text-clustro-accent text-4xl leading-none">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono font-bold text-sm hover:bg-clustro-accent hover:text-black px-2 py-1 transition-colors border border-transparent hover:border-black"
              >
                {item.label}
              </a>
            ))}
            <BrutalistButton variant="primary" className="py-2 px-6 text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
              Let's Talk
            </BrutalistButton>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-black hover:bg-clustro-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-black absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold font-mono border-b border-gray-200 hover:bg-clustro-accent hover:pl-6 transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="p-4">
              <BrutalistButton variant="primary" fullWidth onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView();
              }}>
                Start Project
              </BrutalistButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;