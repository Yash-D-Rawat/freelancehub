import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* Define the route for the landing page */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
