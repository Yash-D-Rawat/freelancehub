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


function Overview() {
  const {theme} = useTheme()
  return (
    <div className='py-6 px-8 w-[82%]'>
      <div className={`w-[100%] flex justify-end items-center gap-8 ${theme === 'dark' ? 'text-[#CDCDCD]':''}`}>
        <img src="/images/yashavatar.png" alt="" className='rounded-full h-10' />
        <h1 className='text-2xl font-bold'>Yash Rawat</h1>
        <FontAwesomeIcon icon={faBell} className='size-7' />
        <span className='text-white font-semibold text-lg bg-gradient-to-r from-[#40AB7A] to-[#0A673B] px-3 py-2 rounded-lg'>+ New Proposal</span>
      </div>
      <h1 className={`text-3xl font-bold my-3 ${theme === 'dark'?'text-[#CDCDCD]':''}`}>Overview</h1>
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
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark'?'text-[#CDCDCD]':''}`}>Revenue Growth</h1>
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
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark'?'text-[#CDCDCD]':''}`}>Proposal Success Rate</h1>
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
          <h1 className={`font-bold text-xl mb-3 ${theme === 'dark'?'text-[#CDCDCD]':''}`}>Top Category</h1>
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
      <div className='my-4'>
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
            
    </div>
  )
}

export default Overview