import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Dashboard_comp/Sidebar'
import Overview from '../components/Dashboard_comp/Overview'

import { useTheme } from '../Context/ThemeContext'
import Messages from '../components/Dashboard_comp/messages/Messages'
import Myprojects from '../components/projects/Myprojects'
import MyBiddings from '../components/MyBiddings'
import Earnings from '../components/Dashboard_comp/earnings/Earnings'

function Dashboard() {
  const { theme } = useTheme()
  const [page, setpage] = useState('Overview')

  const handlepage = (page)=>{
    setpage(page);
  }
  useEffect(() => {
    console.log('Current theme in Dashboard:', theme); // This should log 'light' or 'dark'
  }, [theme]);
  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-black' : 'bg-white'} h-screen flex`}>
      <Sidebar handlepage = {handlepage} page={page} />
      {(page == 'Overview') && <Overview handlepage = {handlepage} page={page}/>}
      {(page == 'Messages') && <Messages handlepage = {handlepage} page={page}/>}
      {(page == 'My Projects') && <Myprojects handlepage = {handlepage} page={page}/>}
      {(page == 'My Biddings') && <MyBiddings handlepage = {handlepage} page={page}/>}
      {(page == 'Earnings') && <Earnings handlepage = {handlepage} page={page}/>}
    </div>
  )
}

export default Dashboard