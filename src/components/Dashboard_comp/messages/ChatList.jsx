import { Box, Divider, Drawer } from '@mui/material';
import React from 'react';
import { chatlistdata } from '../../data/Overview_data';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../../../Context/ThemeContext';
import { IoMenu } from 'react-icons/io5';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
        },
    }),
};

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'Proposals', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Manage Projects', icon: faCalendar },
];

function ChatList({ select, setSelect, setShowChat, page, handlepage }) {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = React.useState(false);

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
            sx={{ width: 250, backgroundColor: 'black', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='flex items-center flex-col mt-10 gap-6 cursor-pointer'>
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
                <Divider style={{ backgroundColor: 'black' }} />
            </div>
        </Box>
    );

    return (
        <div className="w-full md:w-[28%] p-10 overflow-y-auto no-scrollbar overflow-hidden border-r-2">

            <div className="relative flex gap-3 items-center w-full mb-6">
                <IoMenu onClick={toggleDrawer(true)} className="md:hidden cursor-pointer text-2xl" />
                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                <input
                    type="text"
                    placeholder="Search..."
                    className={`${theme === 'dark' ? 'bg-[#323233]' : ''} w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#089451] focus:border-transparent`}
                />
                <FaSearch className="absolute left-12 md:left-3 top-[35%] text-gray-500" />
            </div>
            {chatlistdata.map((item, index) => (
                <motion.div
                    onClick={() => { setSelect(index); setShowChat(true); }}
                    key={index}
                    className="w-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <div className={`rounded-lg py-3 px-2 ${index === select ? (theme === 'dark' ? 'md:bg-[#545454]' : 'md:bg-[#E8E8E8]') : ''} flex gap-2 items-center justify-start my-1 w-full`}>
                        <img src={item.image} alt="" className="rounded-full h-12" />
                        <div className="w-full">
                            <h1 className={`${theme === 'dark' ? 'text-white' : ''} font-bold text-lg`}>{item.name}</h1>
                            <p className={`truncate w-[90%] ${theme === 'dark' ? (item.color === 'text-black' ? 'text-white' : item.color) : item.color} font-bold text-sm`}>{item.latestMessage}</p>
                        </div>
                    </div>
                    <Divider />
                </motion.div>
            ))}
        </div>
    );
}

export default ChatList;
