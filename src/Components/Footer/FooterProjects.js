import React from 'react'

function FooterProjects({projects}) {
  return (
     <div className='box ft-projects'>
        <div className='box-content'>
            <h4>Other Projects</h4>
            <ul className='projects-links'>
            {
                projects.map(item => <li key={item.id}><a href={item.link} target="_blank">{item.name}</a></li>)
            }
            </ul>
        </div>
    </div>
  )
}

export default FooterProjects;
