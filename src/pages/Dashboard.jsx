import React, { useEffect } from 'react'
import Sidebar from '../components/Dashboard_comp/Sidebar'
import Overview from '../components/Dashboard_comp/Overview'
import Navbar from '../components/Navbar'
import { useTheme } from '../Context/ThemeContext'
import Messages from '../components/Dashboard_comp/messages/Messages'

function Dashboard() {
  const { theme } = useTheme()
  useEffect(() => {
    console.log('Current theme in Dashboard:', theme); // This should log 'light' or 'dark'
  }, [theme]);
  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-black' : 'bg-white'} h-screen flex`}>
      <Navbar />
      <Sidebar />
      {/* <Overview /> */}
      <Messages/>
    </div>
  )
}

export default Dashboard