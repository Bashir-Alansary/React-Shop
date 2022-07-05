import React from 'react';
import { useGlobalContext } from './context';
import{FaBars} from 'react-icons/fa';

function Navbar() {
  const{openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = ((tempBtn.left + tempBtn.right) / 2) - 128;
    openSubmenu(page, center);
  };

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className='stripe-nav' onMouseOver={handleSubmenu}>
      <div className='container'>
        <div className='nav-header'>
          <img src='images/Projects images/StripeImages/logo.png' alt='stripe' className='logo' />
          <button className='toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <div className='sign-content'>
          <button className='sign-btn'>sign in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
