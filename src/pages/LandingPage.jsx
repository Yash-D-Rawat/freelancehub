import React from 'react'
import Herosection from '../components/Herosection'
import Accountsteps from '../components/Accountsteps'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Signup from '../components/Signup'

function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Herosection />
        <Accountsteps />
        <Services />
        <Testimonials/>
        <Signup/>
    </div>
  )
}

export default LandingPage