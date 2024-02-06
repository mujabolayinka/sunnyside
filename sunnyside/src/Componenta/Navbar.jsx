import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='carrier'>
        <div className='sunny'>
            <h3>sunnyside</h3>
        </div>
        <div className='carry'>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
        </ul>
        <div className='cont'>
            <button>Contacts</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar