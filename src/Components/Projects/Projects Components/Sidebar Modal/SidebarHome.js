import React from 'react'
import{useGlobalContext} from "./context";
import{FaBars} from 'react-icons/fa';
function SidebarHome() {
    const {openSidebar, openModal} = useGlobalContext();
    return (
      <div className='sidebar-home'>
          <button className='toggle-btn' onClick={openSidebar}>
              <FaBars />
          </button>
          <button className='btn' onClick={openModal}>show modal</button>
      </div>
    )
}

export default SidebarHome;
