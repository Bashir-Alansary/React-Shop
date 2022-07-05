import React, { useState, useEffect } from 'react'
import PagesHead from '../../../PagesHead/pagesHead';
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from '../Tours/loading';
import axios from 'axios';
import{BsChevronDoubleRight} from"react-icons/bs";
import "./style.css";

const url = 'https://course-api.com/react-tabs-project';

function Tabs() {
    const[loading, setLoading] = useState(true);
    const[jobs, setJobs] = useState([]);
    const[value, setValue] = useState(0);
    
    const fetshJobs = () => {
        axios.get(url)
        .then((res) => {
            setJobs(res.data);
            setLoading(false)}
            );
    }

    useEffect(()=> {
        fetshJobs();
    }, []);

    console.log(jobs);
    if(loading) {
        return(
            <main className='tabs-loading'>
                <h2>Loading...</h2>
            </main>
        )
    }
    const{company, dates, duties, title} = jobs[value];
    return(
        <main className='tabs'>
            <PagesHead title="Tab" />
            <section className='tabs-content'>
                <div className='tabs-btns'>
                    {
                        jobs.map((job, index) =>{
                            return(
                                <button key={Math.random()} className={`job-btn ${index === value && 'active-btn'}`} onClick={()=>setValue(index)}>
                                    {job.company}
                                </button>
                            )
                        })
                    }
                </div>
                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {
                        duties.map(duty => <p key={Math.random()}><BsChevronDoubleRight className="duty-icon" /> {duty}</p>)
                    }
                </article>
            </section>
        </main>
    )
}

export default Tabs;