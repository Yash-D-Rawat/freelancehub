import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { myprojects, projectlistings } from '../data/Projects_data';
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

function Projectlisting({ handlepage, page }) {
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

      <h1 className={`${theme === 'dark' ? 'text-white' : 'text-[#2a5243]'}  text-4xl font-bold mb-2 mt-7`}>Find Your Next Gig</h1>
      <p className='text-[#757575] text-lg font-semibold mb-5'>Explore jobs that match your interest.</p>

      <motion.div
        key="all"
        variants={tabVariants}
        initial="enter"
        animate="center"
        exit="exit"
        custom={value}
        className="grid grid-cols-1 sm:grid-cols-2  gap-6"
      // Ensures uniform height for grid items
      >
        {projectlistings.map((item) => {
          return (
            <div className="rounded-xl flex flex-col p-2 justify-between h-[28rem] border-[#adadad] border-[1px]">
              <div
                className={`relative rounded-xl h-[92%] py-4 px-5 flex flex-col justify-around bg-gray-600 bg-url bg-[url('/images/proj1.png')] bg-cover bg-center`}
              >
                <div className="h-full w-full bg-black opacity-70 absolute top-0 left-0 rounded-xl"></div>
                <div className="flex flex-col gap-3">
                  <p className="bg-white text-sm px-2 py-1 rounded-xl w-fit z-10">{item.time}</p>
                  <p className="text-white z-10">{item.name}</p>
                  <p className="text-white text-2xl font-bold z-10">{item.task}</p>
                  <p className="bg-[#dcdcdc] text-sm px-2 py-1 rounded-xl w-fit z-10">{item.category}</p>
                </div>
                <p className="bg-opacity-50 bg-white rounded-lg p-2 z-10 mt-2">{item.description}</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-2xl px-3'>${item.minamount} - ${item.maxamount}</p>
                <button className='bg-gradient-to-r from-[#40AB7A] to-[#0A673B] text-white font-semibold rounded-2xl px-2'>Place Bid</button>
              </div>
            </div>
          );
        })}
      </motion.div>



    </div>
  );
}

export default Projectlisting;
