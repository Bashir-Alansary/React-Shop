import React, {useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function FooterLogo() {
  
  useEffect(()=> {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='box ft-logo' data-aos="fade-up">
        <div className='box-content'>
            <div className='img-box'>
            <img src="images/logo.png" />
            </div>
            <h4>React Projects</h4>
        </div>
    </div>
  )
}

export default FooterLogo;
