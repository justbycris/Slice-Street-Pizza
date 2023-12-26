import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} alt="Pizza Logo"/>
            <div className="hiddenLinks">
            <Link to="/home">home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/home">home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>
    </div>
  )
}

