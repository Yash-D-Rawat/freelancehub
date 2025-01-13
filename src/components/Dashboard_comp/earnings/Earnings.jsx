import React from 'react'
import { useTheme } from '../../../Context/ThemeContext';
import { Box, Divider, Drawer, Tooltip } from '@mui/material';
import { IoMenu } from 'react-icons/io5';
import { FaMoon, FaSun, FaHandHoldingUsd } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList, faGauge } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { BsHourglassSplit } from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { paymentsData } from '../../data/Overview_data';
import { earnings } from '../../data/Payment';
import { DataGrid } from '@mui/x-data-grid';
import { CheckCircle, HourglassEmpty } from '@mui/icons-material';

const options = [
    { name: 'Overview', icon: faGauge },
    { name: 'Messages', icon: faComments },
    { name: 'My Projects', icon: faLightbulb },
    { name: 'My Biddings', icon: faRectangleList },
    { name: 'Earnings', icon: faMoneyBillTrendUp },
    { name: 'Calendar', icon: faCalendar },
];

const columns = [
    { field: 'date', headerName: 'Date', width: 180 },
    { field: 'client', headerName: 'Client', width: 250 },
    { field: 'amount', headerName: 'Amount', width: 150, },
    { field: 'project', headerName: 'Project', width: 300 },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
            const status = params.value;
            const statusStyles = {
                backgroundColor: status === 'completed' ? 'green' : 'orange', // Green for completed, orange for pending
                color: 'white', // Text color white
                fontWeight: '600', // Semibold text
                fontSize: '16px', // Slightly larger than default row text
                padding: '7px 10px', // Padding for better visibility
                borderRadius: '20px', // Rounded corners for the cell
                textAlign: 'center' // Center the text
            };
            return <span style={statusStyles}>{status === 'completed' ? <CheckCircle /> : <HourglassEmpty />} {status}</span>;
        }
    }
];



const details = [
    {
        title: 'Total Earnings',
        num: '$15,230',
        icon: FaHandHoldingUsd,
        colour: '#089451'
    },
    {
        title: 'Pending Payments',
        num: '$5,230',
        icon: BsHourglassSplit,
        colour: '#FFA500'
    }
]

function Earnings({ handlepage, page }) {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = React.useState(false);

    const gridStyles = {
        '.MuiDataGrid-columnHeaders': {
            // Header background color

            fontSize: '18px', // Larger font size for the header
            fontWeight: '800', // Semibold font weight for header
            color: '#089451', // Header text color
            borderBottom: '2px solid #ccc' // Optional: Add a border below the header
        },
        '.MuiDataGrid-cell': {
            fontSize: '16px', // Slightly larger font for rows
            fontWeight: '600', // Semibold font weight for rows
            color: theme === 'dark' ? 'white': '',
            
        },
        '.MuiDataGrid-row': {

            '&:hover': {
                transform: 'scale(1.05)', // Apply scale effect on hover
                transition: 'transform 0.4s ease', // Smooth transition for scaling
                zIndex: 1, // Ensure hovered row is on top of other rows
            }
        }
    };

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
                    <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'>+ New Proposal</span>
                </div>
            </div>

            <h1 className={`text-3xl font-bold mt-8 mb-4 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Earnings Overview</h1>
            {/* numeric data */}
            <div className='flex w-full'>
                <div className='w-1/2'>
                    <motion.div
                        className=' grid grid-cols-2 w-full gap-4 bg-gradient-to-r from-[#40AB7A] to-[#0A673B] p-4 rounded-lg'
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
                                <item.icon style={{ color: `${item.colour}` }} className='hidden md:block md:text-4xl' />
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className='w-full mt-5 border-[2px] border-[#94A0A9] p-3 rounded-lg shadow-xl'>
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
                </div>
            </div>

            <div className='w-full p-4 mt-6'>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid

                        rows={earnings}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}

                        disableSelectionOnClick
                        sx={gridStyles}
                        filterModel={{
                            items: [
                                { columnField: 'status', operatorValue: 'contains', value: '' }
                            ],
                        }}
                    />
                </Box>
            </div>

        </div>
    )
}

export default Earnings