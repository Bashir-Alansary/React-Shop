import React from 'react';
import Projects from '../Projects/projects';
import Header from './Home Components/Header/header';
import Tools from './Home Components/Tools/Tools';

function Home() {
  return (
    <div className='home'>
      <Header />
      <Projects />
      <Tools />
    </div>
  )
}

export default Home;
