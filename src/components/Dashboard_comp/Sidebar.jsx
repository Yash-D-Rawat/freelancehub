import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@mui/material';
import { IoMenu } from 'react-icons/io5';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Calendar', icon: faCalendar },
];

export default function Sidenav({ handlepage, page }) {
    const [open, setOpen] = React.useState(false);
    const { theme, toggleTheme } = useTheme();

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

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex flex-col mt-10 gap-6 cursor-pointer'>
                {options.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                            delay: index * 0.2,
                        }}
                        onClick={() => { handlepage(item.name) }}
                        className={`flex items-center gap-3 ${(theme === 'dark' && page === item.name) ? 'bg-black' : (page === item.name ? 'bg-gradient-to-r from-[#40AB7A] to-[#0A673B]' : '')} px-4 py-2 rounded-lg`}
                    >
                        {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#FFA500' }} className='size-6' />}
                        <h1 className='text-black text-xl font-bold'>{item.name}</h1>
                    </motion.div>
                ))}
                <Divider style={{ backgroundColor: 'black' }} />
            </div>
        </Box>
    );

    return (
        <>
            
            

            {/* Desktop View */}
            <div className={`hidden md:flex ${theme === 'dark' ? 'bg-[#089451]' : 'bg-black'} w-[20%] justify-center h-full`}>
                <div className='w-[70%] flex flex-col mt-10 gap-6 cursor-pointer'>
                    {options.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 50,
                                delay: index * 0.2,
                            }}
                            onClick={() => { handlepage(item.name) }}
                            className={`flex items-center gap-3 ${(theme === 'dark' && page === item.name) ? 'bg-black' : (page === item.name ? 'bg-gradient-to-r from-[#40AB7A] to-[#0A673B]' : '')} px-4 py-2 rounded-lg`}
                        >
                            {item.icon && <FontAwesomeIcon icon={item.icon} style={{ color: '#FFA500' }} className='size-6' />}
                            <h1 className='text-white text-xl font-bold'>{item.name}</h1>
                        </motion.div>
                    ))}
                    <Divider style={{ backgroundColor: 'white' }} />
                </div>
            </div>
        </>
    );
}
