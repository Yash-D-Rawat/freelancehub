import React from 'react';
import { useTheme } from '../Context/ThemeContext';

function Herosection() {
  const {theme} = useTheme();
  return (
    <div className={`relative h-screen w-full ${theme === 'dark' ? 'bg-black': 'bg-white'}`}>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-7xl font-bold mb-4">Empowering Creativity,</h1>
        <h1 className="text-7xl font-bold mb-4">One Connection at a</h1>
        <h1 className="text-7xl font-bold mb-4">Time</h1>
        <p className="text-xl">Find top talent or your next big project with ease</p>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Herosection;
