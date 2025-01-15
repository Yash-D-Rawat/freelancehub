import React, { useState, useEffect } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [selectedLink, setSelectedLink] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const user = localStorage.getItem('users');
        setIsLoggedIn(!!user);
        console.log(isLoggedIn)
    }, []);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        setIsSidebarOpen(false);

        // Redirect to login if not logged in and accessing restricted pages
        if (!isLoggedIn && link !== 'home' && link !== 'signup' && link !== 'login') {
            navigate('/login');
        }
    };

    return (
        <div className={`fixed top-0 left-0 z-50 w-full hidden md:flex items-center justify-between p-4
        ${theme === 'dark' ? 'bg-black bg-opacity-50' : 'bg-opacity-50'} 
        backdrop-blur-md shadow-lg rounded-lg`}>
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#089451]'}`}>Freelance Hub</h1>

            <ul className="hidden sm:flex gap-6 font-bold">
                <li
                    className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'home' ? 'border-b-2 border-[#FFA500]' : ''}`}
                    onClick={() => handleLinkClick('home')}
                >
                    <Link to='/'>Home</Link>
                </li>

                {isLoggedIn && (
                    <>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'dashboard' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('dashboard')}
                        >
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'joblisting' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('joblisting')}
                        >
                            <Link to='/joblisting'>Find Jobs</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'freelancerlist' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('freelancerlist')}
                        >
                            <Link to='/freelancerlist'>Find Freelancer</Link>
                        </li>
                    </>
                )}

                {!isLoggedIn && (
                    <>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'dashboard' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('dashboard')}
                        >
                            <Link to='/'>Dashboard</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'joblisting' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('joblisting')}
                        >
                            <Link to='/'>Find Jobs</Link>
                        </li>
                        <li
                            className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-[#089451]'} ${selectedLink === 'freelancerlist' ? 'border-b-2 border-[#FFA500]' : ''}`}
                            onClick={() => handleLinkClick('freelancerlist')}
                        >
                            <Link to='/'>Find Freelancer</Link>
                        </li>
                    </>
                )}
            </ul>

            <div className='flex gap-4 items-center'>
                <button
                    className={`p-2 rounded-full border-2 border-white bg-transparent ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                    onClick={toggleTheme}
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
                {!isLoggedIn && <>
                    <span
                        className={`cursor-pointer text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#089451]'}`}
                    >
                        <Link to='/signup'>Sign Up</Link>
                    </span>
                    <span
                        className={`cursor-pointer text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-[#089451]'}`}
                    >
                        <Link to='/login'>Login</Link>
                    </span>
                </>}
            </div>
        </div>
    );
}

export default Navbar;
