import React, { useState, useEffect } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Search.css'

function Search() {

  const [selectedBtn, setSelectedBtn] = useState('');

  const handleBtnClick = (btnText) => {
    setSelectedBtn(btnText);
  };
  
  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <div className='search container section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

      <div className="btns flex">
          <div
            className={`singleBtn ${selectedBtn === 'Economy' ? 'active' : ''}`}
            onClick={() => handleBtnClick('Economy')}
          >
            <span>Economy</span>
          </div>
          <div
            className={`singleBtn ${selectedBtn === 'Business Class' ? 'active' : ''}`}
            onClick={() => handleBtnClick('Business Class')}
          >
            <span>Business Class</span>
          </div>
          <div
            className={`singleBtn ${selectedBtn === 'First Class' ? 'active' : ''}`}
            onClick={() => handleBtnClick('First Class')}
          >
            <span>First Class</span>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon' />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want to go?' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon' />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="number" min="1" max="10" style={{ width: '80px' }} placeholder='Add guests' />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" />
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className='icon' />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" />
            </div>
          </div>

        </div>

        <div className="btnBlock flex">
          <button className='btn searchBtn'>Search Flight</button>
        </div>
      </div>
    </div>
  )
}

export default Search