import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { links, social} from '../../../../Data/navbar2Data';
import{FaBars} from "react-icons/fa";
import PagesHead from '../../../PagesHead/pagesHead';
import './style.css';
function Navbar2() {
    const[showLinks, setShowLinks] = useState(false);
    const linksRef = useRef(null);
    const linksContentRef = useRef(null);

    useEffect(()=>{
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks) {
            linksContentRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContentRef.current.style.height = "0px";
        }
    }, [showLinks]);
  return (
    <>
    <PagesHead title='Navbar' />
    <main className='navbar2-page'>
        <nav className='navbar2'>
            <div className='container'>
                <div className='nav-header'>
                    <img src="images/Projects images/Navbar2Images/logo.png" alt='logo' />
                    <button className={showLinks ? "nav-toggle toggle-active" : "nav-toggle"} onClick={()=>{setShowLinks(!showLinks)}}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-content" ref={linksContentRef}>
                    <ul className='links' ref={linksRef}>
                        {
                            links.map(link => {
                                const{id, url, text} = link;
                                return(
                                    <li key={id}>
                                        <Link to={url} className='link'>{text}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                    {
                        social.map(item => {
                            const{id, url, icon} = item;
                            return(
                                <li key={id}>
                                    <a href={url} className="icon">{icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    </main>
    </>
  )
}

export default Navbar2;
