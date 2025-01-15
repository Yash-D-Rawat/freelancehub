import React from 'react'
import Herosection from '../components/Herosection'
import Accountsteps from '../components/Accountsteps'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Signup from '../components/Signup'
import Navbar from '../components/Navbar'
import { useTheme } from '../Context/ThemeContext'
import PaymentGateway from '../components/PaymentGateway'
import Sidenav from '../components/Sidenav'
import Footer from '../components/Footer'

function LandingPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex flex-col items-center justify-center
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <Navbar />
      <Sidenav/>
      <main className="w-full flex flex-col gap-8">
        <section className="w-full sm:w-11/12 md:w-full">
          <Herosection />
        </section>
        <section className="w-full sm:w-11/12 md:w-full">
          <Accountsteps />
        </section>
        <section className="w-full sm:w-11/12 md:w-full">
          <Services />
        </section>
        <section className="w-full sm:w-11/12 md:w-full">
          <Testimonials />
        </section>
        {/* <section className="w-full sm:w-11/12 md:w-full">
          <Signup />
        </section>
        <section className="w-full sm:w-11/12 md:w-full">
          <PaymentGateway />
        </section> */}
        <section className="w-full sm:w-11/12 md:w-full">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

