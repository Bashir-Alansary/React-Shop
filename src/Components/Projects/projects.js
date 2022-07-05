import React from 'react';
import Project from './project';
import './style.css';
function Projects() {
  return (
    <div className='projects'>
      <div className='overlay'>
        <div className='container'>
          <div className='content'>
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
