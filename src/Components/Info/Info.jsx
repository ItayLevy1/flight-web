import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { RxCalendar } from 'react-icons/rx'
import { BsShieldCheck, BsBookmarkCheck } from 'react-icons/bs'

import './Info.css'

function Info() {

  useEffect(() => {
    Aos.init({ duration: 9000 })
  })

  return (
    <div className='info section'>
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos='fade-up' data-aos-duration='2500'>Traval to make memories all around the world</h2>
          <div className="cardsDiv grid">
            <div data-aos='fade-right' data-aos-duration='2500' className="singleCard grid">
              <div className="iconDiv flex">
                <RxCalendar size='25' className='icon' />
              </div>
              <span className='cardTitle'>Book & Relax</span>
              <p>You can also call airlines from your phone and
                book a flight ticket!</p>
            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="singleCard grid">
              <div className="iconDiv flex">
                <BsShieldCheck size='25' className='icon' />
              </div>
              <span className='cardTitle'>Smart Checklist</span>
              <p>You can also call airlines from your phone and
                book a flight ticket!</p>
            </div>

            <div data-aos='fade-left' data-aos-duration='2500' className="singleCard grid">
              <div className="iconDiv flex">
                <BsBookmarkCheck size='25' className='icon' />
              </div>
              <span className='cardTitle'>Save More</span>
              <p>You can also call airlines from your phone and
                book a flight ticket!</p>
            </div>
          </div>

          <button data-aos='fade-down' data-aos-duration='2500' className='btn'>View All</button>
        </div>
      </div>
    </div>
  )
}

export default Info