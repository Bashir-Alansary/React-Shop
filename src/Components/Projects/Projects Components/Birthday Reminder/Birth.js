import React, { useState } from 'react'
import birthdayRiminderData from '../../../../Data/birthdayRiminderData';
import PagesHead from '../../../PagesHead/pagesHead';
import List from './list';
import "./style.css";

function Birth() {
    const[people, setPeople] = useState(birthdayRiminderData);
  return (
    <>
     <PagesHead title="Birthday Reminder" />
     <main className='birhday'>
        <section className='container'>
            <h3 className='length'>{people.length} birthdays todays</h3>
            <List people={people} />
            <button onClick={()=>setPeople([])}>Clear all</button>
        </section>
      </main>
    </>
  )
}

export default Birth;
