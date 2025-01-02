import React from 'react';

function Accountsteps() {
  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up to explore opportunities and unlock your potential.',
      imgSrc: '/images/account.png',
      altText: 'Account creation illustration',
    },
    {
      title: 'Choose Your Role',
      description: 'Select if you want to hire freelancers or sell your services.',
      imgSrc: '/images/account.png',
      altText: 'Role selection illustration',
    },
    {
      title: 'Start Hiring or Selling',
      description: 'Post jobs, bid on projects, and collaborate seamlessly.',
      imgSrc: '/images/account.png',
      altText: 'Start working illustration',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center my-14">
      <h1 className="font-bold text-6xl">Get Started in 3 Easy</h1>
      <h1 className="font-bold text-6xl">Steps</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-[90%] md:w-[27%] bg-[#F5F5F5] pt-20 pb-14 rounded-3xl flex flex-col items-center"
          >
            <h1 className="text-4xl font-bold mb-8 w-1/2">{step.title}</h1>
            <h1 className="text-xl text-wrap text-[#635F5D] w-[60%]">{step.description}</h1>
            <img
              className="absolute bottom-[85%] rounded-full"
              src={step.imgSrc}
              alt={step.altText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accountsteps;
