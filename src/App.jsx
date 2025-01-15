import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Dashboard from './pages/Dashboard';

import FindJobs from './pages/FindJobs';
import Freelancers from './pages/Freelancers';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Define the route for the landing page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/joblisting" element={<FindJobs />} />
          <Route path="/freelancerlist" element={<Freelancers />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
