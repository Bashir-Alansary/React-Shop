import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';

function SubMenu() {
  const{isSubmenuOpen, location, page: { page, links }} = useGlobalContext();
  const submenuRef = useRef(null);
  
  useEffect(()=>{
    const submenuElement = submenuRef.current;
    submenuElement.style.left = location + 'px';
  }, [location]);

  return (
        <div className={isSubmenuOpen? 'submenu submenu-active' : 'submenu'} ref={submenuRef}>
          <h4>{page}</h4>
          <ul className='submenu-links'>
            {
              links.map(link => {
                const{label, url} = link;
                return(
                  <li key={Math.random()}>
                    <a href={url}>{label}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
  )
}

export default SubMenu;
