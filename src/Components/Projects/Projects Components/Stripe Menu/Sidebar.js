import React from 'react';
import sublinks from "../../../../Data/stripeData";
import {FaTimes} from "react-icons/fa";
import { useGlobalContext } from './context';
function Sidebar() {
  const{isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <div className={isSidebarOpen ? 'stripe-sidebar siderbar-active' : 'stripe-sidebar'}>
      <div className='container'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='content'>
          {
            sublinks.map(sublink => {
              const{links, page} = sublink;
              return(
                <div className='box' key={Math.random()}>
                  <h4>{page}</h4>
                  <ul className='sidebar-links'>
                    {
                      links.map(link => {
                        const{url, icon, label} = link;
                        return(
                          <li key={Math.random()}>
                            <a href={url}>{icon} {label} </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
