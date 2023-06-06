import React, { useEffect } from 'react'
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  MoveOut,
  Sticky
} from 'react-scroll-motion';
import Aos from 'aos'
import 'aos/dist/aos.css'

import Asset1 from '../../assets/Asset1.svg'
import Asset2 from '../../assets/Asset2.svg'
import Asset3 from '../../assets/Asset3.svg'
import Asset4 from '../../assets/Asset4.svg'

import './Home.css'

function Home() {

  useEffect(() =>{
    Aos.init({duration: 2000})
  })

  return (
    <ScrollContainer>
      <ScrollPage>
      <Animator>
          <div className="heading">
            <h2 data-aos='fade-up' data-aos-duration='2500' className="content">
              <p className='cap'>c<span className='any'>reate</span></p>
              <p className='cap'>e<span className='any'>ver</span></p>
              <p className='cap'>l<span className='any'>asting</span></p>
              <p className='cap'>m<span className='any'>emories</span></p>
              <p className='cap'>w<span className='any'>ith us</span></p>
            </h2>
          </div>
        </Animator>
        <Animator animation={batch( Sticky(), MoveOut(2000, -750))}>
          <div className="imgContainer">
            <img src={Asset3} alt="img2" className='img2' />
          </div>
        </Animator>
        <Animator animation={batch( Sticky(), MoveOut(-2500, -1600))}>
          <div className="imgContainer">
            <img src={Asset2} alt="img3" className='img3' />
          </div>
        </Animator>
        <Animator>
          <div className="imgContainer">
            <img src={Asset4} alt="img4" className='img4' />
            <img src={Asset1} alt="img1" className='img1' />
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default Home
