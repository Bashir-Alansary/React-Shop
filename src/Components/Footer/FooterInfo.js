import React from 'react'

function FooterInfo({infoList}) {
  return (
    <div className='box ft-info'>
        <div className='box-content'>
            <h4>Other Projects</h4>
            <ul className='info-links'>
            <li><a href='#'>Medical</a></li>
            <li><a href='#'>Pharmacy</a></li>
            </ul>
            <ul className='social-links'>
            {
                infoList.map(item => <li key={item.id}><a href={item.link} target="_blank"><img src={item.image} alt={item.name}/></a></li>)
            }
            </ul>
        </div>
    </div>
  )
}

export default FooterInfo;
