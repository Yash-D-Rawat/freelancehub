import React, { useEffect, useRef } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faBriefcase, faBell } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AccountSteps = () => {
  const { theme } = useTheme();
  const stepsRef = useRef([]);

  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up to explore opportunities and unlock your potential.',
      imgSrc: faBell,
      colour: 'bg-[#45b280]',
    },
    {
      title: 'Choose Your Role',
      description: 'Select if you want to hire freelancers or sell your services.',
      imgSrc: faHandshake,
      colour: 'bg-[#FFA500]',
    },
    {
      title: 'Start Hiring or Selling',
      description: 'Post jobs, bid on projects, and collaborate seamlessly.',
      imgSrc: faBriefcase,
      colour: 'bg-[#45b280]',
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      stepsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className={`transition-all duration-300 ease-in-out flex flex-col justify-center items-center text-center my-14 ${theme === 'dark' ? 'bg-black text-[#00BF63]' : 'bg-white text-black'}`}>
      <h1 className={`font-bold text-3xl md:text-5xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get Started in 3 Easy</h1>
      <h1 className={`font-bold text-3xl md:text-5xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Steps</h1>
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepsRef.current[index] = el)}
            className={`transition-all duration-300 ease-in-out relative w-[90%] sm:w-[45%] md:w-[27%] mb-20 md:mb-0 pt-14 pb-10 md:pt-20 md:pb-14 rounded-3xl flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-lg'}`}
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 w-3/4 ">{step.title}</h1>
            <p className={`text-md md:text-xl text-wrap w-[80%] md:w-[60%] ${theme === 'dark' ? 'text-gray-300' : 'text-[#635F5D]'}`}>
              {step.description}
            </p>
            <FontAwesomeIcon
              icon={step.imgSrc}
              style={{ color: 'black' }}
              className={`absolute bottom-[80%] md:bottom-[85%] rounded-full size-16 md:size-20 ${step.colour} p-3 md:p-4`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSteps;
