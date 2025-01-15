import { faBell, faGauge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import React from 'react'
import { categoryData, clients, details, paymentsData, proposalData } from '../data/Overview_data';
import { useTheme } from '../../Context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Box, Divider, Drawer } from '@mui/material';
import { motion } from 'framer-motion';
import { IoMenu } from 'react-icons/io5';
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const overview_proj = [
  {
    name: 'Website Redesign',
    client: 'ABC Corp',
    status: 'In Progress',
    deadline: 'Jan 5, 2025',
    payment: 'Pending'
  },
  {
    name: 'Website Redesign',
    client: 'ABC Corp',
    status: 'In Progress',
    deadline: 'Jan 5, 2025',
    payment: 'Pending'
  },
  {
    name: 'Website Redesign',
    client: 'ABC Corp',
    status: 'In Progress',
    deadline: 'Jan 5, 2025',
    payment: 'Pending'
  },
]


const options = [
  { name: 'Overview', icon: faGauge },
  { name: 'Messages', icon: faComments },
  { name: 'My Projects', icon: faLightbulb },
  { name: 'My Biddings', icon: faRectangleList },
  { name: 'Earnings', icon: faMoneyBillTrendUp },
  { name: 'Manage Projects', icon: faCalendar },
];

// Custom label render function with adjusted position and multiple lines
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, theme }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={theme === 'dark' ? 'white' : 'black'}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      <tspan x={x} dy="-1em">{name}</tspan>
      <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan>
    </text>
  );
};

const Overview = ({ handlepage, page }) => {
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
      sx={{ width: 250, backgroundColor: theme === 'dark' ? '#089451':'black', height: '100%' }}
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
    <div className='p-4 md:py-6 md:px-8 md:w-[80%] overflow-y-auto no-scrollbar'>
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
          <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'><Link to={'/joblisting'}>+ Find a Job</Link></span>
        </div>
      </div>

      <h1 className={`text-3xl font-bold mt-8 mb-4 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Overview</h1>

      {/* numeric data */}
      <motion.div
        className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-r from-[#40AB7A] to-[#0A673B] p-4 rounded-lg'
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.4 } }
        }}
      >
        {details.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row ${theme === 'dark' ? 'bg-black text-[#CDCDCD]' : 'bg-white'} items-center md:items-center md:justify-around gap-6 px-5 py-3 rounded-lg `}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 120,
              delay: index * 0.4
            }}
          >
            <item.icon style={{ color: `${item.colour}` }} className='size-8 md:hidden md:text-4xl' />
            <div className='flex md:flex-col items-center md:items-start'>
              <h1 className='md:text-lg font-medium'>{item.title}</h1>
              <h1 className='text-xl md:text-3xl font-bold'>{item.num}</h1>
            </div>
            <item.icon style={{ color: `${theme === 'dark' && index == 3 ? 'white' : item.colour}` }} className='hidden md:block md:text-4xl' />
          </motion.div>
        ))}
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        {/* BarChart */}
        <div className='w-full border-[2px] border-[#94A0A9] p-3 rounded-lg shadow-xl'>
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Revenue Growth</h1>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={paymentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 14, fontWeight: 'bold' }}
              />
              <YAxis
                tick={{ fontSize: 14, fontWeight: 'bold' }}
              />
              <Tooltip />
              <Bar dataKey="amount" fill="#089451" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PieCharts */}
        <div className='w-full border-[2px] py-3 px-3 border-[#94A0A9] rounded-lg shadow-xl'>
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Proposal Success Rate</h1>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={proposalData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={50}
                label={(props) => renderCustomLabel({ ...props, theme })}
              >
                {proposalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='w-full border-[2px] py-3 px-3 border-[#94A0A9] rounded-lg shadow-xl'>
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Top Category</h1>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={(props) => renderCustomLabel({ ...props, theme })}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Extras */}
      <div className='my-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* Top Clients */}
        <div className='w-full'>
          <h1 className={`${theme === 'dark' ? 'text-[#CDCDCD]' : ''} font-bold text-xl mb-2`}>Top Clients</h1>
          <div className='flex w-full justify-between border-[2px] border-[#B2B2B2] p-2 rounded-xl'>
            {clients.map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img src={item.img} alt="" className='rounded-full h-16' />
                <h1 className={`${theme === 'dark' ? 'text-[#CDCDCD]' : ''} font-bold`}>{item.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Active Projects */}
        <div className='w-full'>
          <h1 className={`font-bold text-lg mb-2 ${theme === 'dark' ? 'text-white' : ''}`}>Active Projects</h1>
          <div className='w-full border-[1px] border-[#CDCDCD] px-4 rounded-lg overflow-auto'>
            <table className='w-full border-spacing-y-2' style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
              <thead>
                <tr className='text-left'>
                  <th className='font-bold text-[#089451]'>Project Name</th>
                  <th className='font-bold text-[#089451]'>Client</th>
                  <th className='font-bold text-[#089451]'>Deadline</th>
                  <th className='font-bold text-[#089451]'>Date</th>
                  <th className='font-bold text-[#089451]'>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Your data rows */}
                {overview_proj.map((item, index) => (
                  <tr key={index} className='border-t border-[#CDCDCD]'>
                    <td className={`${theme === 'dark' ? 'text-white' : ''} font-bold`}>{item.name}</td>
                    <td className={`${theme === 'dark' ? 'text-white' : ''} font-bold`}>{item.client}</td>
                    <td className={`${theme === 'dark' ? 'text-white' : ''} font-bold`}>{item.status}</td>
                    <td className={`${theme === 'dark' ? 'text-white' : ''} font-bold`}>{item.deadline}</td>
                    <td className={`w-fit font-bold text-white rounded-xl text-center ${item.payment === 'Pending' ? 'bg-[#FFA500]' : 'bg-[#089451]'}`}>{item.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Overview;
