import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import Filters from '../components/projectslisting/Filters'
import Projectslisting from '../components/projectslisting/Projectslisting'

function FindJobs() {
  const { theme } = useTheme()
  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-black' : 'bg-white'} h-screen flex`}>
        <Filters/>
        <Projectslisting/>
    </div>
  )
}

export default FindJobs