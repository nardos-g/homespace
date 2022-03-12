import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
    const handleClick=()=>{
        console.log('hey there')
    }
    const navigate=useNavigate()

  return (
// Nave bar 
    <nav className="navbar" id="navBar">
      <div className="container">
        <h1 className="logo">DJK</h1>
        <ul className="nav">
            <Link to='/signin'> Sign Up</Link>   
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar