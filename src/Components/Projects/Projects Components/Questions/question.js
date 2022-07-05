import React, { useState } from 'react'
import{AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import "./style.css";

function Question({title, info}) {
    const[showInfo, setShowInfo] = useState (false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={()=>setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            <p className={showInfo ? 'active' : 'out'}>{info}</p>
        </article>
    )
}

export default Question;
