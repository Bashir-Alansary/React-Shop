import React, { useState } from 'react'
import people from "../../../../Data/reviewsData";
import{FaQuoteRight, FaChevronRight, FaChevronLeft} from"react-icons/fa";
function Review() {
    const[index, setIndex] = useState(0);
    const{name, job, image, text} = people[index];
    
    const checkIndex = (index) => {
        if(index < 0) {
            return people.length - 1;
        }
        if(index > people.length - 1) {
           return 0;
        }
        return index;
    }

    const nextPerson = () => {
        let newIndex = index + 1;
        setIndex(checkIndex(newIndex));
    }

    const prevPerson = () => {
        let newIndex = index - 1;
        setIndex(checkIndex(newIndex));
    }

    const randomPerson = () => {
        let randamIndex = Math.floor(Math.random() * people.length);
        if(randamIndex === index) {
            randamIndex = index + 1;
        }
        setIndex(checkIndex(randamIndex));
    }

    return (
        <article className='review'>
            <div className='img-box'>
                <img src={image} alt={name} />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <div className='txt-box'>
                <h4>{name}</h4>
                <p className='job'>{job}</p>
                <p className='text'>{text}</p>
            </div>
            <div className='btns'>
                <button className='lt-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='rt-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
                <button className='random-btn' onClick={randomPerson}>
                    suprise me
                </button>
            </div>

        </article>

    )
}

export default Review;
