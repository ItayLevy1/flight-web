import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import logo from '../../assets/logo.svg'

import { BsInstagram } from 'react-icons/bs';
import { FiGithub, FiLinkedin } from 'react-icons/Fi';

import './Footer.css'

function Footer() {

  useEffect(() => {
    Aos.init({ duration: 9000 })
  })

  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
          <div className="logoDiv">
            <a href="/"><img src={logo} alt="Logo" className='logo' />
              <span className='logo_text'>celmw</span> </a>
          </div>
          <p>If the ride is more FLY, then you must BUY.</p>
          <div className="socialIcon flex">
            <a href="https://www.instagram.com/itaylevy2/" mr='10px'><BsInstagram className='icon' /></a>
            <a href="https://www.aedin.com/in/itaylevy2/" mr='10px'><FiLinkedin className='icon' /></a>
            <a href="https://github.com/ItayLevy1"><FiGithub className='icon' /></a>
          </div>
        </div>


        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Check-In</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="#">How to</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Baggage</a>
          </li>
          <li>
            <a href="#">Route Map</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="/">Chauffuer</a>
          </li>
          <li>
            <a href="#">Our partners</a>
          </li>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Transportation</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>IL Design | Developed by <span>Itay Levy</span> </p>
      </div>
    </div>
  )
}

export default Footer
