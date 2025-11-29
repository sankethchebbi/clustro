import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-clustro-bg border-t-2 border-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
           <h2 className="font-sans font-black text-4xl uppercase mb-2">Clustro.</h2>
           <p className="font-mono text-sm text-gray-500 max-w-xs">
             Helping brands navigate the digital noise with brutal efficiency and custom code.
           </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 font-mono font-bold text-sm uppercase">
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 text-xs mb-1">Socials</span>
            <a href="https://x.com/clustrodotin" className="hover:text-clustro-accent hover:bg-black w-fit px-1">Twitter</a>
            <a href="#" className="hover:text-clustro-accent hover:bg-black w-fit px-1">LinkedIn</a>
            <a href="https://www.instagram.com/clustro.in/" className="hover:text-clustro-accent hover:bg-black w-fit px-1">Instagram</a>
          </div>
          <div className="flex flex-col gap-2">
             <span className="text-gray-400 text-xs mb-1">Legal</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-300 font-mono text-xs text-gray-400 flex justify-between">
        <span>© {new Date().getFullYear()} CLUSTRO AGENCY. ALL RIGHTS RESERVED.</span>
        <span className="bg-clustro-accent text-black px-1">DESIGNED WITH CHAOS.</span>
      </div>
    </footer>
  );
};

export default Footer;