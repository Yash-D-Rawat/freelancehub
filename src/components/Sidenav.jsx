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
        { page: 'Event Map', icon: FaMapMarkerAlt, link: '/' },
        { page: 'About Us', icon: MdOutlineMiscellaneousServices, link: '/' },
    ];

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {items.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.page} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
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
