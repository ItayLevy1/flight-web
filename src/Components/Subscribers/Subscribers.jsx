import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './Subscribers.css'

function Subscribers() {

  useEffect(() =>{
    Aos.init({duration: 9000})
  })


  return (
    <div className='subscribe section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
        <h2>Subscribe newsletters & get latest news</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers