import React from 'react'
import Herosection from '../components/Herosection'
import Accountsteps from '../components/Accountsteps'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'
import { useTheme } from '../Context/ThemeContext'

function LandingPage() {
  const { theme } = useTheme()

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
    >
      <Navbar />
      <Herosection />
      <Accountsteps />
      <Services />
      <Testimonials />
      <Signup />
    </div>
  )
}

export default LandingPage
