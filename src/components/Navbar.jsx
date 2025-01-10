import React, { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa'; // For light and dark theme icons
import { Link } from 'react-router-dom';

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [selectedLink, setSelectedLink] = useState('home'); // Track selected link
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // To handle sidebar toggle

    // Handle link click to set active link
    const handleLinkClick = (link) => {
        setSelectedLink(link);
        setIsSidebarOpen(false); // Close sidebar on link click
    };

    return (
        <div className={`fixed top-0 left-0 z-50 w-full hidden md:flex items-center justify-between p-4
        ${theme === 'dark' ? 'bg-black bg-opacity-50' : 'bg-opacity-50'} 
        backdrop-blur-md shadow-lg rounded-lg`}>
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Freelance Hub</h1>

            {/* Navbar Links for larger screens */}
            <ul className="hidden sm:flex gap-6 font-bold">
                <li
                    className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${selectedLink === 'home' ? 'border-b-2 border-[#FFA500]' : ''}`}
                    onClick={() => handleLinkClick('home')}
                >
                    Home
                </li>
                <li
                    className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${selectedLink === 'howItWorks' ? 'border-b-2 border-[#FFA500]' : ''}`}
                    onClick={() => handleLinkClick('howItWorks')}
                >
                    How it Works
                </li>
                <li
                    className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${selectedLink === 'dashboard' ? 'border-b-2 border-[#FFA500]' : ''}`}
                    onClick={() => handleLinkClick('dashboard')}
                >
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li
                    className={`cursor-pointer text-lg ${theme === 'dark' ? 'text-white' : 'text-black'} ${selectedLink === 'aboutUs' ? 'border-b-2 border-[#FFA500]' : ''}`}
                    onClick={() => handleLinkClick('aboutUs')}
                >
                    About Us
                </li>
            </ul>

            {/* Theme Toggle Button */}
            <button
                className={`p-2 rounded-full border-2 border-white bg-transparent ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                onClick={toggleTheme}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    );
}

export default Navbar;
