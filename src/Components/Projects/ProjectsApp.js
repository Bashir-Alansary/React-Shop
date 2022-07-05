import React from 'react'
import PagesHead from '../PagesHead/pagesHead';
import Projects from './projects';
import './style.css';
function ProjectsApp() {
  return (
        <>
        <PagesHead title = 'React projects' />
        <Projects />
        </>
  )
}

export default ProjectsApp;
