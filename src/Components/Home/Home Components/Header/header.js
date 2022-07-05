import React, {useEffect} from 'react'
import "./style.css";
import { BsCaretRight } from "react-icons/bs";
import Aos from 'aos';
import "aos/dist/aos.css";

function Header() {

    useEffect(()=> {
      Aos.init({duration: 2000});
    }, [])

  return (
    <div className='header'>
        <div className='container'>
            <div className='content'>
                <div className='txt-box'>
                    <div className='txt-box-content'>
                        <h1 className='title' data-aos="fade-right">React Projects<br/>
                            Bashir<span className='grediant-word'> Alansary</span>
                        </h1>
                        <p className='description'>
                            15 react projects using Html, CSS, JavaScript, React designed by 
                            Eng: Bashir Alansary 15 react projects using Html, CSS, JavaScript,
                        </p>
                        <div className='btns' data-aos="fade-up">
                            <button className='get-started-btn'>Get Started</button>
                            <button className='portfolio-btn'>
                                <BsCaretRight className='btn-icon' />
                                <span>see portfolio</span>
                            </button>
                        </div>
                        <div className='back-image'>
                            <img src='images/Home images/Header images/txt3.png' />
                        </div>
                    </div>
                </div>
                <div className='img-box'>
                    <img src='images/Home images/Header images/Header.webp' data-aos="fade-left"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;