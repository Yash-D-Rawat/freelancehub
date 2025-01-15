import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoMenu } from 'react-icons/io5';
import { FaHome, FaMapMarkerAlt, FaMoon, FaSun } from 'react-icons/fa';
import { MdEmojiEvents, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useTheme } from '../Context/ThemeContext';

export default function Sidenav() {
    const [open, setOpen] = React.useState(false);
    const {theme, toggleTheme} = useTheme();

    const toggleDrawer = (newOpen) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(newOpen);
    };

    const items = [
        { page: 'Home', icon: FaHome, link: '/' },
        { page: 'Dashboard', icon: MdEmojiEvents, link: '/dashboard' },
        { page: 'Find Job', icon: FaMapMarkerAlt, link: '/joblisting' },
        { page: 'Find Freelancer', icon: MdOutlineMiscellaneousServices, link: '/freelancerlist' },
        { page: 'Sign Up', icon: MdOutlineMiscellaneousServices, link: '/signup' },
        { page: 'Login', icon: MdOutlineMiscellaneousServices, link: '/login' },
    ];

    const DrawerList = (
        <Box
            sx={{ width: 250, height: '100%', backgroundColor: `${theme === 'dark'? 'black':'#45b280'}`}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            
        >
            <div className='flex flex-col mt-6 gap-6 cursor-pointer text-white font-bold text-xl'>
                {items.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon className='text-[#FFA500] size-7'/>
                                </ListItemIcon>
                                <ListItemText primary={item.page} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </div>
        </Box>
    );

    return (
        <div className={`md:hidden flex items-center justify-evenly w-full fixed top-0 left-0 z-50 p-4
        ${theme === 'dark' ? 'bg-black bg-opacity-50' : 'bg-opacity-50'} 
        backdrop-blur-md shadow-lg rounded-lg`}>
            <IoMenu onClick={toggleDrawer(true)} className="cursor-pointer text-2xl" />
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>

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
