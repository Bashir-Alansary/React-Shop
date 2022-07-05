import React from 'react'
import "./style.css";
function PagesHead({title}) {
    return (
        <div className='page-head'>
            <div className='pagehead-container'>
                <div className='overlay'>
                    <div className='pagehead-content'>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagesHead;