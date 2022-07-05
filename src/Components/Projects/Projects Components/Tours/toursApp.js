import React, { useEffect, useState } from 'react'
import Loading from './loading';
import Tours from './tours';
import './style.css';
import axios from 'axios';
import PagesHead from '../../../PagesHead/pagesHead';

const url ='https://course-api.com/react-tours-project';

function ToursApp() {
    const[loading, setLoading] = useState(true);
    const[tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id != id);
        setTours(newTours);
    }

    const fetshTours = () => {
        setLoading(true);
        axios.get(url)
        .then((res) => {
            setLoading(false);
            setTours(res.data);
        })
        .catch((err)=> {
            setLoading(false);
            console.log(err);
        })
    }

    useEffect(()=> {
        fetshTours();
    }, [])

    if(loading) {
        return(
           <>
           <PagesHead title="Tours"/>
            <main>
                <Loading />
            </main>
           </>
        )
    }

    if(tours.length === 0) {
        return(
            <>
            <PagesHead title="Tours"/>
            <main>
                <div className='no-tours'>
                    <h2>No tours here</h2>
                    <button className='refresh' onClick={()=>fetshTours()}>Refresh</button>
                </div>
            </main>
            </>
        )
    }
    
  return (
      <>
      <PagesHead title="Tours"/>
    <main>
        <Tours tours={tours} removeTour = {removeTour} />
    </main>
    </>
  )
}

export default ToursApp;
