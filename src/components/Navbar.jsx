import React from 'react'
import { useTheme } from '../Context/ThemeContext';

function Navbar() {
    const { toggleTheme } = useTheme();

    return (
        <div className='sticky top-0 z-50'>
            <button className='bg-blue-500' onClick={toggleTheme}>mode</button>
        </div>
    )
}

export default Navbar