import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { myprojects } from '../data/Projects_data';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Divider, Drawer } from '@mui/material';
import { IoMenu } from 'react-icons/io5';

const options = [
    { name: 'Overview', icon: '' },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Calendar', icon: faCalendar },
];

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Myprojects({ handlepage, page }) {
    const { theme, toggleTheme } = useTheme();
    const [value, setValue] = React.useState(0);
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const tabVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: { type: 'spring', stiffness: 200, damping: 20 },
        }),
    };

    return (
        <div className='py-6 px-8 w-screen md:w-[82%] overflow-y-auto'>
            <div className={`w-full flex  md:flex-row justify-between items-center gap-4 md:gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>
                <div className='flex items-center gap-5'>
                    <IoMenu onClick={toggleDrawer(true)} className="md:hidden cursor-pointer text-2xl" />
                    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <img src="/images/yashavatar.png" alt="Avatar" className='rounded-full h-10' />
                    <h1 className='text-2xl font-bold hidden md:block'>Yash Rawat</h1>
                </div>
                <div className='flex items-center gap-4 md:w-[30%] justify-evenly'>
                    <button
                        className={`p-2 rounded-full border-2 bg-transparent ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <FontAwesomeIcon icon={faBell} className='text-xl hidden md:block' />
                    <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'>+ New Proposal</span>
                </div>
            </div>

            <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'}  text-4xl font-bold mb-2 mt-7`}>My Projects</h1>
            <p className='text-[#757575] text-lg font-semibold mb-5'>Manage your ongoing and completed work in one place.</p>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="responsive tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#FFA500",
                            height: "4px"
                        },
                        "& .MuiTabScrollButton-root": {
                            color: "#089451"
                        }
                    }}
                >
                    <Tab label="All Projects" {...a11yProps(0)} style={{ color: '#089451', fontWeight: 'bold' }} />
                    <Tab label="Ongoing Projects" {...a11yProps(1)} style={{ color: '#089451', fontWeight: 'bold' }} />
                    <Tab label="Completed Projects" {...a11yProps(2)} style={{ color: '#089451', fontWeight: 'bold' }} />
                    <Tab label="Saved Projects" {...a11yProps(3)} style={{ color: '#089451', fontWeight: 'bold' }} />
                </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <motion.div
                    key="all"
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={value}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
                >
                    {myprojects.map((item) => {
                        let progress;
                        let colour;
                        if(item.status === 'completed'){
                            progress = 100
                            colour = 'bg-[#545454]'
                        }
                        else{
                            progress = Math.floor(Math.random() * (100 - 10 + 1)) + 10
                            if(item.status === 'ongoing'){
                                colour = 'bg-[#0f4c14]'
                            }
                            else {
                                colour = 'bg-[#545454]'
                            }
                        }
                    
                        return <div className='rounded-lg'>
                            <div className={`${item.status === 'ongoing' ? 'bg-[#089451]' : ''}  
                                ${item.status === 'completed' ? 'bg-[#949494]' : ''} 
                                ${item.status === 'saved' ? (theme === 'dark' ? 'bg-white' : 'bg-black') : ''} 
                                rounded-lg py-4 px-5 h-56 flex flex-col justify-around`}>
                                <h1 className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white'}  rounded-xl w-fit px-2 py-1 text-xs`}>{item.date}</h1>
                                <div className={`${theme === 'dark' && item.status === 'saved' ? 'text-black' : 'text-white'} `}>
                                    <h1 className=' text-lg'>{item.name}</h1>
                                    <h1 className=' text-2xl font-bold'>{item.task}</h1>
                                </div>
                                <span className={` 
                                    ${item.status === 'ongoing' ? 'bg-[#0f4c14] text-white' : ''}  
                                    ${item.status === 'completed' ? 'bg-[#595552] text-white' : ''} 
                                    ${item.status === 'saved' ? (theme === 'dark' ? 'bg-[#c7d0d8] ' : 'bg-white') : ''} 
                                    rounded-xl w-fit px-2 py-1 text-xs`}>{item.status}</span>

                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                    <motion.div
                                        className={`${colour} h-2.5 rounded-full`}
                                        initial={{ width: '0%' }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    />
                                </div>
                            </div>
                        </div>
                    })}
                </motion.div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <motion.div
                    key="ongoing"
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {myprojects.map((item) => {
                        if (item.status === 'ongoing') {
                            return (
                                <div className='rounded-lg'>
                                    <div className={`${item.status === 'ongoing' ? 'bg-[#089451]' : ''}  
                                        ${item.status === 'completed' ? 'bg-[#949494]' : ''} 
                                        ${item.status === 'saved' ? 'bg-black' : ''} 
                                        rounded-lg py-4 px-5 h-56 flex flex-col justify-around`}>
                                        <h1 className='bg-white rounded-xl w-fit px-2 py-1 text-xs'>{item.date}</h1>
                                        <div>
                                            <h1 className='text-white text-lg'>{item.name}</h1>
                                            <h1 className='text-white text-2xl font-bold'>{item.task}</h1>
                                        </div>
                                        <span className={` 
                                            ${item.status === 'ongoing' ? 'bg-[#0f4c14] text-white' : ''}  
                                            ${item.status === 'completed' ? 'bg-[#595552] text-white' : ''} 
                                            ${item.status === 'saved' ? 'bg-white text-black' : ''} 
                                            rounded-xl w-fit px-2 py-1 text-xs`}>{item.status}</span>

                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                            <motion.div
                                                className="bg-[#0f4c14] h-2.5 rounded-full"
                                                initial={{ width: '0%' }}
                                                animate={{ width: `${Math.floor(Math.random() * (100 - 10 + 1)) + 10}%` }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </motion.div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <motion.div
                    key="completed"
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {myprojects.map((item) => {
                        if (item.status === 'completed') {
                            return (
                                <div className='rounded-lg'>
                                    <div className={`${item.status === 'ongoing' ? 'bg-[#089451]' : ''}  
                                        ${item.status === 'completed' ? 'bg-[#949494]' : ''} 
                                        ${item.status === 'saved' ? 'bg-black' : ''} 
                                        rounded-lg py-4 px-5 h-56 flex flex-col justify-around`}>
                                        <h1 className='bg-white rounded-xl w-fit px-2 py-1 text-xs'>{item.date}</h1>
                                        <div>
                                            <h1 className='text-white text-lg'>{item.name}</h1>
                                            <h1 className='text-white text-2xl font-bold'>{item.task}</h1>
                                        </div>
                                        <span className={` 
                                            ${item.status === 'ongoing' ? 'bg-[#0f4c14] text-white' : ''}  
                                            ${item.status === 'completed' ? 'bg-[#595552] text-white' : ''} 
                                            ${item.status === 'saved' ? 'bg-white text-black' : ''} 
                                            rounded-xl w-fit px-2 py-1 text-xs`}>{item.status}</span>

                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                            <motion.div
                                                className="bg-[#545454] h-2.5 rounded-full"
                                                initial={{ width: '0%' }}
                                                animate={{ width: `${100}%` }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </motion.div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
                <motion.div
                    key="saved"
                    variants={tabVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={value}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                >
                    {myprojects.map((item, i) => {
                        if (item.status === 'saved') {
                            const progress = i * 9; // Calculate progress as i * 7

                            return (
                                <div key={item.id} className='rounded-lg'>
                                    <div className={`${item.status === 'ongoing' ? 'bg-[#089451]' : ''}  
                            ${item.status === 'completed' ? 'bg-[#949494]' : ''} 
                            ${item.status === 'saved' ? (theme === 'dark' ? 'bg-white' : 'bg-black') : ''} 
                            rounded-lg py-4 px-5 h-56 flex flex-col justify-around`}
                                    >
                                        <h1 className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white'}  rounded-xl w-fit px-2 py-1 text-xs`}>
                                            {item.date}
                                        </h1>
                                        <div className={`${theme === 'dark' && item.status === 'saved' ? 'text-black' : 'text-white'}`}>
                                            <h1 className='text-lg'>{item.name}</h1>
                                            <h1 className='text-2xl font-bold'>{item.task}</h1>
                                        </div>
                                        <span className={` 
                                ${item.status === 'ongoing' ? 'bg-[#0f4c14] text-white' : ''}  
                                ${item.status === 'completed' ? 'bg-[#595552] text-white' : ''} 
                                ${item.status === 'saved' ? (theme === 'dark' ? 'bg-[#c7d0d8]' : 'bg-white') : ''} 
                                rounded-xl w-fit px-2 py-1 text-xs`}
                                        >
                                            {item.status}
                                        </span>

                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                                            <motion.div
                                                className="bg-[#545454] h-2.5 rounded-full"
                                                initial={{ width: '0%' }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </motion.div>
            </CustomTabPanel>


        </div>
    );
}

export default Myprojects;
