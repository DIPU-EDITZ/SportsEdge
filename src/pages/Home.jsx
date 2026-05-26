import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    // Beautiful, responsive background handling centered perfectly for all devices
    <div className="relative min-h-screen w-full bg-[url('/backgroundImage.webp')] bg-cover bg-center bg-no-repeat flex flex-col pt-20">
      {/* Subtle top/bottom overlays to enhance contrast and ensure premium aesthetics */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      
      <Hero />
    </div>
  );
}

export default Home;
