import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'

import logo from '../../assets/logo.svg'

import './Navbar.css'

function Navbar() {

  const [active, setActive] = useState("nav_menu");
  const [icon] = useState("nav_toggler");

  const navToggle = () => {
    if (active === "nav_menu") {
      setActive("nav_menu nav_active");
    } else setActive("nav_menu");
  };

  return (
    <nav className="nav">
      <div className="nav_brand">
        <a href="/"><img src={logo} alt="Logo" className='logo' /> 
        <span className='logo_text'>celmw</span> </a>
      </div>
      <ul className={active}>
        <li onClick={navToggle} className="nav_item">
          <a href="#" className="nav_link">
            About
          </a>
        </li>
        <li onClick={navToggle} className="nav_item">
          <a href="#" className="nav_link">
            Offers
          </a>
        </li>
        <li onClick={navToggle} className="nav_item">
          <a href="#" className="nav_link">
            Seats
          </a>
        </li>
        <li onClick={navToggle} className="nav_item">
          <a href="#" className="nav_link">
            Destinations
          </a>
        </li>
        <li onClick={navToggle} className="nav_item">
          <a href="#" className="nav_link">
            Contact
          </a>
        </li>
        <li onClick={navToggle} className="nav_item">
          <button className='btn' >Log In</button>
          <button className='btn' >Sign In</button>
        </li>
      </ul>

      <div onClick={navToggle} className={icon}>
        <CgMenuGridO className='icon' size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
