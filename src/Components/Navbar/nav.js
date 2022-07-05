import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {menuItems} from '../../Data/navbarMenuItems';
import{RiBarChartHorizontalLine} from"react-icons/ri";
import{MdOutlineClose} from"react-icons/md";
import "./style.css";
import Aos from 'aos';
import "aos/dist/aos.css";

function Navbar() {
  const[navStyle, setNavStyle] = useState(false);
  const[phoneIconClicked, setPhoneIconClicked] = useState(false);

  useEffect(()=>{
    document.addEventListener('scroll', () => {
      if(window.scrollY > 65) {
        setNavStyle(true);
      } else {
        setNavStyle(false);
      }
    })
  })

  useEffect(()=> {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className={navStyle ? 'navbar nav-active' : 'navbar'}>
        <div className='container'>
          <div className='content'>
            <div className='logo'>
                <img src="images/logo.png" data-aos="fade-up-right" />
            </div>
              <div className='phone-icon-content'>
                <div className='phone-icon' onClick={()=>setPhoneIconClicked(!phoneIconClicked)}>
                  {phoneIconClicked ? <MdOutlineClose className='icon-bar' /> : <RiBarChartHorizontalLine className='icon-bar' />}
                </div>
              </div>
            <ul className={phoneIconClicked? 'links links-active' : 'links'}>
                {
                  menuItems.map(item =>
                  <li key={item.id}><NavLink className={item.class} to={item.url} onClick={()=>setPhoneIconClicked(!phoneIconClicked)}>{item.title}</NavLink></li>
                  )}
            </ul>
          </div>
          </div>
    </div>
  )
}

export default Navbar;