import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Dashboard from './pages/Dashboard';

import FindJobs from './pages/FindJobs';



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
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
