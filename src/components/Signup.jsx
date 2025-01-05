import React from 'react';
import { useTheme } from '../Context/ThemeContext';

function Signup() {
  const { theme } = useTheme()
  return (
    <div className="flex w-[65%] justify-between rounded-[5rem] border-[1px] px-16 py-10 mb-10 mt-10">
      {/* Left Section */}
      <div className="w-[50%] flex flex-col gap-6 px-2">
        <h1 className="text-[2.5rem] font-bold">Create your Account</h1>

        {/* Name Input */}
        <div className="w-[80%] flex flex-col gap-1">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            id="name"
            type="text"
            className="bg-[#45B280] text-white text-xl font-semibold px-6 py-3 rounded-3xl"
            placeholder="Yash Rawat"
          />
        </div>

        {/* Email Input */}
        <div className="w-[80%] flex flex-col gap-1">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            id="email"
            type="email"
            className="bg-[#45B280] text-white text-xl font-semibold px-6 py-3 rounded-3xl"
            placeholder="yash@gmail.com"
          />
        </div>

        {/* Password Input */}
        <div className="w-[80%] flex flex-col gap-1">
          <label htmlFor="password" className="text-lg">Password</label>
          <input
            id="password"
            type="password"
            className="bg-black text-white text-xl font-semibold px-6 py-3 rounded-3xl"
            placeholder="******"
          />
        </div>

        {/* Sign Up Button */}
        <button className="bg-[#FFA500] text-white text-xl font-bold px-8 py-3 rounded-3xl mt-4 hover:bg-[#3a9b69] w-[80%]">
          Sign Up
        </button>
      </div>

      {/* Right Section (Placeholder for Future Content) */}
      <div className="w-fit flex justify-center relative">
        <img src={theme === 'dark' ? 'images/logindark.jpg' : `/images/login.png`} alt="" className='w-[30vw]' />
        <div className='absolute left-10 w-[80%] flex flex-col justify-around h-[90%]'>
          <h1 className='text-white font-bold text-4xl text-wrap'>What Our Jobkeepers Say</h1>
          <h1 className='text-white text-xl'>"Searching and finding your dream job is now easier than ever. Just browse a job and apply if you need to."</h1>
          <div>
            <h1 className='font-bold text-white text-2xl'>Nishita Sanghavi</h1>
            <h1 className='text-white'>UI Designer at Google</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
