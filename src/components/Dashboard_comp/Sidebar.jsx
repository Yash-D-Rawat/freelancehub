import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComments, faLightbulb, faMoneyBillTrendUp, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { Divider } from '@mui/material'
import { useTheme } from '../../Context/ThemeContext'

const option = [
  {
    name: 'Dashboard',
    icon: ''
  },
  {
    name: 'Messages',
    icon: faComments
  },
  {
    name: 'My Projects',
    icon: faLightbulb
  },
  {
    name: 'Proposals',
    icon: faRectangleList
  },
  {
    name: 'Earnings',
    icon: faMoneyBillTrendUp
  },
  {
    name: 'Calendar',
    icon: faCalendar
  },

]
function Sidebar() {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'dark' ? 'bg-[#089451]' : 'bg-black'} w-[18%] flex justify-center h-full`}>
      <div className='w-[70%] flex flex-col mt-10 gap-6'>
        
        {option.map((item, index)=>{
          return <div className={`flex justify-center items-center gap-3 ${theme === 'dark' ? 'bg-black ': 'bg-gradient-to-r from-[#40AB7A] to-[#0A673B]'} px-1 py-2 rounded-lg`} key={index}>
          <FontAwesomeIcon icon={item.icon} style={{color:'#FFA500'}} className='size-6'/>
          <h1 className='text-white text-xl font-bold'>{item.name}</h1>
        </div>
        })}
        <Divider style={{backgroundColor: 'white'}} />
      </div>
      
      
    </div>
  )
}

export default Sidebar