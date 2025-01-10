import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';

function Herosection() {
  const { theme } = useTheme();
  
  // States to hold the current value of each counter
  const [freelancers, setFreelancers] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [projects, setProjects] = useState(0);

  // Function to animate numbers incrementally
  const animateNumber = (target, setter) => {
    let start = 0;
    const increment = Math.ceil(target / 200); // How much to increment per frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setter(target); // Ensure the final number is exactly the target
      } else {
        setter(start);
      }
    }, 10);
  };

  // useEffect hook to trigger the animation once when component mounts
  useEffect(() => {
    animateNumber(3000, setFreelancers);
    animateNumber(10000, setJobs);
    animateNumber(5000, setProjects);
  }, []);

  return (
    <div className={`relative h-screen w-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Empowering Creativity,</h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">One Connection at a</h1>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Time</h1>
        <p className="text-lg sm:text-xl mb-8">Find top talent or your next big project with ease</p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">{freelancers}+ </h2>
            <p className="text-lg sm:text-xl">Freelancers</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">{jobs}+ </h2>
            <p className="text-lg sm:text-xl">Jobs</p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">{projects}+ </h2>
            <p className="text-lg sm:text-xl">Projects</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}

export default Herosection;
