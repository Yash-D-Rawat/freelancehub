import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Drawer, Tab, Tabs } from '@mui/material';
import React from 'react';
import { FaMoon, FaStar, FaSun } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge, faBell } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../Context/ThemeContext';
import PropTypes from 'prop-types';
import { freelancers } from '../data/Freelancer';
import { Link } from 'react-router-dom';

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

function Freelancerlists() {
    const { theme, toggleTheme } = useTheme();
    const [value, setValue] = React.useState(0);
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
        <div className="p-2 md:py-6 md:px-8 md:w-[80%] overflow-y-auto no-scrollbar ">
            <div className={`w-full flex md:flex-row justify-between items-center gap-4 md:gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>
                <div className="flex items-center gap-5">
                    <img src="/images/yashavatar.png" alt="Avatar" className="rounded-full h-10" />
                    <h1 className="text-2xl font-bold hidden md:block">Yash Rawat</h1>
                </div>
                <div className="flex items-center gap-4 md:w-[20%] justify-evenly">
                    <button
                        className={`p-2 rounded-full border-2 bg-transparent ${theme === 'dark' ? 'text-white border-white' : 'text-black border-black'}`}
                        onClick={toggleTheme}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <FontAwesomeIcon icon={faBell} className="text-xl hidden md:block" />
                    {/* <span className="text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg">+ New Proposal</span> */}
                </div>
            </div>

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
                    <Tab label="All Freelancers" {...a11yProps(0)} style={{ color: '#089451', fontWeight: 'bold' }} />
                    <Tab label="Favourite Freelancers" {...a11yProps(1)} style={{ color: '#089451', fontWeight: 'bold' }} />
                    <Tab label="Previously Hired Freelancers" {...a11yProps(2)} style={{ color: '#089451', fontWeight: 'bold' }} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <motion.div>
                    {freelancers.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                
                            >
                                <Link
                                    to={`/profile/${index}`}
                                    className="w-full md:flex justify-between mb-10"
                                >
                                    {/* Left Freelancer Info */}
                                    <motion.div
                                        initial={{ x: '-100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100%' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`md:w-[65%] ${theme === 'dark' ? 'bg-[#2c2c2c]' : 'bg-white'} p-3 rounded-t-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <div className={`md:flex justify-between `}>
                                            <div className={`md:flex gap-4 `} >
                                                <img src={item.img} alt="" className="block md:rounded-full md:hidden w-full justify-self-center rounded-2xl md:h-14 mb-4" />
                                                <img src={item.img} alt="" className="hidden rounded-full md:block h-14 mb-4" />
                                                <div className=''>
                                                    <div className={`flex justify-between font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} `}>
                                                        {item.name}
                                                        <div className="flex md:hidden gap-2 h-fit items-center ml-3">
                                                            <FaStar className="text-[#FFA500] size-6" />
                                                            <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                                        </div>
                                                    </div>
                                                    <h1 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'}`}>{item.location}</h1>
                                                    <p className={`mt-3 mb-5 ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} font-semibold `}>{item.description}</p>

                                                    <div className="flex gap-3">
                                                        <button className="text-white rounded-2xl px-3 py-1 bg-gradient-to-r from-[#40AB7A] to-[#0A673B]">
                                                            Start Chat
                                                        </button>
                                                        <button className="px-3 py-1 text-[#40AB7A] border-2 border-[#40AB7A] rounded-2xl">
                                                            Favourite
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="hidden md:flex gap-2 h-fit items-center ml-3">
                                                <FaStar className="text-[#FFA500] size-6" />
                                                <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Right Skills Info */}
                                    <motion.div
                                        initial={{ x: '100%' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '-100%' }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`md:w-[30%] ${theme === 'dark' ? 'bg-[#2c2c2c] text-white' : 'bg-white text-[#2a5243]'} p-3 rounded-b-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                    >
                                        <h1 className="text-xl font-bold  mb-4">Top Skills</h1>
                                        <div className="flex flex-wrap gap-1 md:grid-cols-2 md:grid">
                                            {item.topSkills.map((skill, skillIndex) => {
                                                return (
                                                    <div
                                                        key={skillIndex}
                                                        className={`cursor-pointer ${theme === 'dark' ? 'bg-[#2a5243]' : 'bg-[#F4F4F4]'}  w-fit  text-sm font-medium py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform mb-2`}
                                                    >
                                                        {skill}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                <motion.div>
                    {freelancers.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full md:flex justify-between mb-10"
                            >
                                {/* Left Freelancer Info */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`md:w-[65%] ${theme === 'dark' ? 'bg-[#2c2c2c]' : 'bg-white'} p-3 rounded-t-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <div className={`md:flex justify-between `}>
                                        <div className={`md:flex gap-4 `} >
                                            <img src={item.img} alt="" className="block md:rounded-full md:hidden w-full justify-self-center rounded-2xl md:h-14 mb-4" />
                                            <img src={item.img} alt="" className="hidden rounded-full md:block h-14 mb-4" />
                                            <div className=''>
                                                <div className={`flex justify-between font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} `}>
                                                    {item.name}
                                                    <div className="flex md:hidden gap-2 h-fit items-center ml-3">
                                                        <FaStar className="text-[#FFA500] size-6" />
                                                        <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                                    </div>
                                                </div>
                                                <h1 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'}`}>{item.location}</h1>
                                                <p className={`mt-3 mb-5 ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} font-semibold `}>{item.description}</p>

                                                <div className="flex gap-3">
                                                    <button className="text-white rounded-2xl px-3 py-1 bg-gradient-to-r from-[#40AB7A] to-[#0A673B]">
                                                        Start Chat
                                                    </button>
                                                    <button className="px-3 py-1 text-[#40AB7A] border-2 border-[#40AB7A] rounded-2xl">
                                                        Favourite
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden md:flex gap-2 h-fit items-center ml-3">
                                            <FaStar className="text-[#FFA500] size-6" />
                                            <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Skills Info */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '-100%' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`md:w-[30%] ${theme === 'dark' ? 'bg-[#2c2c2c] text-white' : 'bg-white text-[#2a5243]'} p-3 rounded-b-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <h1 className="text-xl font-bold  mb-4">Top Skills</h1>
                                    <div className="flex flex-wrap gap-1 md:grid-cols-2 md:grid">
                                        {item.topSkills.map((skill, skillIndex) => {
                                            return (
                                                <div
                                                    key={skillIndex}
                                                    className={`cursor-pointer ${theme === 'dark' ? 'bg-[#2a5243]' : 'bg-[#F4F4F4]'}  w-fit  text-sm font-medium py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform mb-2`}
                                                >
                                                    {skill}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                <motion.div>
                    {freelancers.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full md:flex justify-between mb-10"
                            >
                                {/* Left Freelancer Info */}
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`md:w-[65%] ${theme === 'dark' ? 'bg-[#2c2c2c]' : 'bg-white'} p-3 rounded-t-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <div className={`md:flex justify-between `}>
                                        <div className={`md:flex gap-4 `} >
                                            <img src={item.img} alt="" className="block md:rounded-full md:hidden w-full justify-self-center rounded-2xl md:h-14 mb-4" />
                                            <img src={item.img} alt="" className="hidden rounded-full md:block h-14 mb-4" />
                                            <div className=''>
                                                <div className={`flex justify-between font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} `}>
                                                    {item.name}
                                                    <div className="flex md:hidden gap-2 h-fit items-center ml-3">
                                                        <FaStar className="text-[#FFA500] size-6" />
                                                        <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                                    </div>
                                                </div>
                                                <h1 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'}`}>{item.location}</h1>
                                                <p className={`mt-3 mb-5 ${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'} font-semibold `}>{item.description}</p>

                                                <div className="flex gap-3">
                                                    <button className="text-white rounded-2xl px-3 py-1 bg-gradient-to-r from-[#40AB7A] to-[#0A673B]">
                                                        Start Chat
                                                    </button>
                                                    <button className="px-3 py-1 text-[#40AB7A] border-2 border-[#40AB7A] rounded-2xl">
                                                        Favourite
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hidden md:flex gap-2 h-fit items-center ml-3">
                                            <FaStar className="text-[#FFA500] size-6" />
                                            <h1 className="text-[#FFA500] text-xl">{item.rating}</h1>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Skills Info */}
                                <motion.div
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '-100%' }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`md:w-[30%] ${theme === 'dark' ? 'bg-[#2c2c2c] text-white' : 'bg-white text-[#2a5243]'} p-3 rounded-b-xl md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                                >
                                    <h1 className="text-xl font-bold  mb-4">Top Skills</h1>
                                    <div className="flex flex-wrap gap-1 md:grid-cols-2 md:grid">
                                        {item.topSkills.map((skill, skillIndex) => {
                                            return (
                                                <div
                                                    key={skillIndex}
                                                    className={`cursor-pointer ${theme === 'dark' ? 'bg-[#2a5243]' : 'bg-[#F4F4F4]'}  w-fit  text-sm font-medium py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform mb-2`}
                                                >
                                                    {skill}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </CustomTabPanel>
        </div>
    );
}

export default Freelancerlists;
