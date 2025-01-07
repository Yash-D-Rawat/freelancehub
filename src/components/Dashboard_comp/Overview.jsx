import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import React from 'react'
import { categoryData, clients, details, paymentsData, proposalData } from '../data/Overview_data';
import { useTheme } from '../../Context/ThemeContext';

// Custom label render function with adjusted position and multiple lines
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 10; // Adjust the distance from the center
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      <tspan x={x} dy="-1em">{name}</tspan> {/* First line for the name */}
      <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan> {/* Second line for the percentage */}
    </text>
  );
};

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

const deadline = [
  {
    day: 'Today',
    task: 'Design a logo',
    time: 'Today 5:00 PM',
    client: 'ABC Corp'
  },
  {
    day: 'Today',
    task: 'Design a logo',
    time: 'Today 5:00 PM',
    client: 'ABC Corp'
  },
  {
    day: 'Today',
    task: 'Design a logo',
    time: 'Today 5:00 PM',
    client: 'ABC Corp'
  },
]

function Overview() {
  const { theme } = useTheme()
  return (
    <div className='py-6 px-8 w-[82%] overflow-y-auto'>
      <div className={`w-[100%] flex justify-end items-center gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>
        <img src="/images/yashavatar.png" alt="" className='rounded-full h-10' />
        <h1 className='text-2xl font-bold'>Yash Rawat</h1>
        <FontAwesomeIcon icon={faBell} className='size-7' />
        <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'>+ New Proposal</span>
      </div>
      <h1 className={`text-3xl font-bold my-3 ${theme === 'dark' ? 'text-[#CDCDCD]' : ''}`}>Overview</h1>
      <div className='flex justify-around w-full bg-gradient-to-r from-[#40AB7A] to-[#0A673B] p-4 rounded-lg'>
        {details.map((item) => {
          return <div className={`flex ${theme === 'dark' ? 'bg-black text-[#CDCDCD]' : 'bg-white'} items-center gap-6 px-5 py-3 rounded-lg`}>
            <div className='flex flex-col'>
              <h1 className='text-lg font-medium'>{item.title}</h1>
              <h1 className='text-3xl font-bold'>{item.num}</h1>
            </div>
            <item.icon style={{ color: `${item.colour}` }} className={`size-12`} />
          </div>
        })}
      </div>

      {/* Chart Analysis */}
      <div className='flex justify-between w-full mt-5'>
        {/* BarChart */}
        <div className='w-[40%] border-[2px] border-[#94A0A9] p-3 rounded-lg shadow-xl'>
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

        {/* PieChart */}
        <div className='w-[29%] border-[2px] py-3 px-3 border-[#94A0A9] rounded-lg shadow-xl'>
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
                label={renderCustomLabel}
              >
                {proposalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='w-[29%] border-[2px] py-3 px-1 border-[#94A0A9] rounded-lg shadow-xl'>
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
                label={renderCustomLabel}
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
      {/* Chart Analysis ends */}

      {/* Extas */}
      <div className='my-6'>
        {/* Top Clients */}
        <div className='w-[40%]'>
          <h1 className={`${theme === 'dark' ? 'text-[#CDCDCD]' : ''} font-bold text-xl mb-2`}>Top Clients</h1>
          <div className='flex w-full justify-between border-[2px] border-[#B2B2B2] p-2 rounded-xl'>
            {clients.map((item) => {
              return <div className='flex flex-col items-center'>
                <img src={item.img} alt="" className='rounded-full h-16' />
                <h1 className={`${theme === 'dark' ? 'text-[#CDCDCD]' : ''} font-bold`}>{item.name}</h1>
              </div>
            })}
          </div>
        </div>
      </div>
      {/* extras end */}

      <div className='flex justify-between'>
        {/* Active projects */}
        <div className='w-[60%]'>
          <h1 className='font-bold text-lg mb-2'>Active Projects</h1>
          <div className='w-full border-[1px] border-[#CDCDCD] px-4 rounded-lg'>
            <table className='w-full border-spacing-y-2' style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
              <thead>
                <tr className='text-left'>
                  <th className='font-bold text-[#089451]'>Project Name</th>
                  <th className='font-bold text-[#089451]'>Client</th>
                  <th className='font-bold text-[#089451]'>Status</th>
                  <th className='font-bold text-[#089451]'>Deadline</th>
                  <th className='font-bold text-[#089451]'>Payment</th>
                </tr>
              </thead>
              <tbody>
                {overview_proj.map((item, index) => (
                  <tr key={index} className='border-t border-[#CDCDCD]'>
                    <td className='font-bold'>{item.name}</td>
                    <td className='font-bold'>{item.client}</td>
                    <td className='font-bold'>{item.status}</td>
                    <td className='font-bold'>{item.deadline}</td>
                    <td className={`w-fit font-bold text-white rounded-xl text-center ${item.payment === 'Pending' ? 'bg-[#FFA500]' : 'bg-[#089451]'}`}>{item.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='w-[25%]'>
          <h1 className='font-bold text-lg mb-2'>Upcoming Deadlines</h1>
          <div className='flex w-full gap-10'>
            <div>
              <h1 className='text-[#089451] font-bold'>Today</h1>
              <h1>Design a logo</h1>
              <h1>Today at 5:00 PM</h1>
            </div>
            <div>
              ABC Corp
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full'>
        {/* to do list */}
        <div className='w-1/2'>
          <h1>To Do List</h1>
          <div className='flex'>
            <img src="" alt="" />
            <div>
              <h1>Finalinze Project Alpha Delieverables</h1>
              <h1>Technology</h1>
            </div>
          </div>
        </div>

        <div className='w-1/2'></div>
      </div>

    </div>
  )
}

export default Overview