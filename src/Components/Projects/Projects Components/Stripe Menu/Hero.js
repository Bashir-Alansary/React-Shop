import React from 'react'
import { useGlobalContext } from './context';

function Hero() {
  const{closeSubmenu} = useGlobalContext();
  return (
        <div className='hero' onMouseOver={closeSubmenu}>
          <div className='container'>
            <div className='content'>
              <div className='info'>
                <h3>We Provide All Health Care Solution</h3>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
              </div>
              <div className='img-box'>
                <img src='images/Projects images/StripeImages/doctor.png' alt='doctor' />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Hero;
