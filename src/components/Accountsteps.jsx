import React from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake , faBriefcase, faBell} from '@fortawesome/free-solid-svg-icons';

const AccountSteps = () => {
  const { theme } = useTheme();

  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up to explore opportunities and unlock your potential.',
      imgSrc: faBell,
      colour: 'bg-[#FFA500]'
    },
    {
      title: 'Choose Your Role',
      description: 'Select if you want to hire freelancers or sell your services.',
      imgSrc: faHandshake,
      colour: 'bg-[#FFA500]'
    },
    {
      title: 'Start Hiring or Selling',
      description: 'Post jobs, bid on projects, and collaborate seamlessly.',
      imgSrc: faBriefcase,
      colour: 'bg-[#FFA500]'
    }
  ];

  return (
    <div className={`transition-all duration-300 ease-in-out flex flex-col justify-center items-center text-center my-14 ${theme === 'dark' ? 'bg-black text-[#00BF63]' : 'bg-white text-black'
      }`}>
      {/* <button
        onClick={toggleTheme}
        className={`mb-8 px-4 py-2 rounded font-bold ${theme === 'dark'
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
      >
        Toggle Theme
      </button> */}
      <h1 className={`font-bold text-6xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Get Started in 3 Easy</h1>
      <h1 className={`font-bold text-6xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Steps</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ease-in-out relative w-[90%] md:w-[27%] pt-20 pb-14 rounded-3xl flex flex-col items-center ${theme === 'dark'
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-white hover:bg-gray-50 shadow-lg'
              }`}
          >
            <h1 className="text-4xl font-bold mb-8 w-1/2">{step.title}</h1>
            <h1 className={`text-xl text-wrap w-[60%] ${theme === 'dark' ? 'text-gray-300' : 'text-[#635F5D]'
              }`}>
              {step.description}
            </h1>
            <FontAwesomeIcon icon={step.imgSrc} style={{color: 'black'}}
              className={`absolute bottom-[85%] rounded-full size-20 ${step.colour} p-4`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSteps;