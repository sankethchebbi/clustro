import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/ui/Marquee';
import { MARQUEE_TEXT } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee text={MARQUEE_TEXT} />
        <Services />
        <Methodology />
        <Marquee text=" // DATA DRIVEN // RESULTS ORIENTED // NO BS // "/>
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;