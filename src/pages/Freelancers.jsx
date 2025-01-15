import React from 'react'
import Freelancefilters from '../components/freelancer/Freelancefilters'
import Freelancerlists from '../components/freelancer/Freelancerlists'
import { useTheme } from '../Context/ThemeContext'
import Navbar from '../components/Navbar'

function Freelancers() {
    const { theme } = useTheme()
  return (
    <div className={`transition-all duration-300 ease-in-out ${theme === 'dark' ? 'bg-black' : 'bg-[#F2F5FA]'} h-screen flex`}>
        
        <Freelancefilters/>
        <Freelancerlists/>
    </div>
  )
}

export default Freelancers