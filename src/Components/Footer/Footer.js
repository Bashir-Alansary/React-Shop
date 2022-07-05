import React, { useState } from 'react'
import FooterInfo from './FooterInfo';
import FooterProjects from './FooterProjects';
import { footerProjects, footerInfo } from '../../Data/footerData';
import "./style.css";
import FooterLogo from './FooterLogo';

function Footer() {
  const[projects, setProjects] = useState(footerProjects);
  const[infoList, setInfoList] = useState(footerInfo);
  return (
    <div className='footer'>
        <div className='overlay'>
            <div className='container'>
                <div className='content'>
                 <FooterProjects projects={projects} />
                  <FooterLogo />
                  <FooterInfo infoList = {infoList} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
