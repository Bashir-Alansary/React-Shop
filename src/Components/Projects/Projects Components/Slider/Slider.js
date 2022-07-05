import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import PagesHead from '../../../PagesHead/pagesHead';
import data from "../../../../Data/sliderData";
import "./style.css";

function Slider() {
    const[people, setPeople] = useState(data);
    const[index, setIndex] = useState(0);
    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, people]);

      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
    return (
        <>
        <PagesHead title="Slider" />
        <main className='slider'>
            <section className='slider-content'>
                {
                    people.map((person, personIndex) => {
                        const{id, image, title, quote, name} = person;
                        let position = 'nextSlide';
                        if(personIndex === index) {
                            position = 'activeSlide';
                        } 
                        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                            position = 'lastSlide';
                        }
                        return(
                            <article key={id} className={position}>
                                <div className='img-box'>
                                    <img src={image} alt = {name} />
                                </div>
                                <div className='txt-box'>
                                    <div className="txt-content">
                                        <h4>{name}</h4>
                                        <p className='title'>{title}</p>
                                        <p className='quote'>{quote}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
               <div className='control'>
                <button className='prev' onClick={()=>setIndex(index - 1)}>
                        <FiChevronLeft />
                    </button>
                    <button className='next' onClick={()=>setIndex(index + 1)}>
                        <FiChevronRight />
                    </button>
               </div>
            </section>
        </main>
        </>
    )
}

export default Slider;

