import React from 'react'
import { useGlobalContext } from './context';
import{FaTimes} from'react-icons/fa';
import {links, social} from "../../../../Data/sidebarData";

function Sidebar() {
  const{isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <div className={isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <h3>Logo</h3>
        <div className='close-content'>
          <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
        </div>
      </div>
      <ul className='sidebar-links'>
        {
          links.map(link => {
            const{id, url, text, icon} = link;
            return(
              <li key={id}><a href={url}><span className='icon'>{icon}</span>{text}</a></li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map(item => {
            const{id, url, icon} = item;
            return(
              <li key={id}><a href={url}>{icon}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar;
