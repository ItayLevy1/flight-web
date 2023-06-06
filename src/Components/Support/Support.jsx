import React, { useEffect }  from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import gridImg from '../../assets/gridImg.svg'

import './Support.css'

function Support() {

  useEffect(() =>{
    Aos.init({duration: 9000})
  })

  return (
    <div className='support container section'>
        <div className="sectionContainer">
          
          <div className="titleDiv">
            <small>travel support</small>
            <h2>Plan your travel with confidence</h2>
            <p>Find help with booking and travel plans, 
              see what to expect along the journey!</p>
          </div>

          <div className="infoDiv grid">
            <div className="textDiv grid">

              <div data-aos='fade-up' data-aos-duration='2500' className="singleInfo infOne">
                <span className='number colorOne'>01</span>
                <h4>Travel requirements for Dubai</h4>
                <p>Find help with booking and travel plans, 
                  see what to expect along the journey to your favorite destinations!</p>
              </div>

              <div data-aos='fade-up' data-aos-duration='2500' className="singleInfo">
                <span className='number colorOne'>02</span>
                <h4>Chauffeur services at your arrival</h4>
                <p>Find help with booking and travel plans, 
                  see what to expect along the journey to your favorite destinations!</p>
              </div>

              <div data-aos='fade-up' data-aos-duration='2500' className="singleInfo infOne">
                <span className='number colorOne'>03</span>
                <h4>Multi-risk travel insurance</h4>
                <p>Find help with booking and travel plans, 
                  see what to expect along the journey to your favorite destinations!</p>
              </div>

            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="imgDiv">
              <img src={gridImg} alt="" />
            </div>
          </div>

        </div>
    </div>
  )
}

export default Support