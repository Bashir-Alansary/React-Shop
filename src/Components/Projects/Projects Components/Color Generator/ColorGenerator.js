import React, { useState } from 'react'
import PageHead from "../../../PagesHead/pagesHead";
import SingleColor from './SingleColor';
import Values from 'values.js';
import "./style.css";
function ColorGenerator() {
    const[color, setColor] = useState('');
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            let colors = new Values(color).all(10);
            setList(colors);
            setError(false)
        } catch {
            setError(true);
        }
    }

    return(
        <>
        <PageHead title="Color Generator"/>
        <main className='color-generator'>
            <section className='form-content'>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='#f15025' 
                        value={color} 
                        className={error? 'error' : null}
                        onChange={(e)=>setColor(e.target.value)}
                    />
                    <button type='submit' className='btn'>Submit</button>
                </form>
            </section>
            <section className='colors'>
                {
                    list.map((color, index)=> {
                        console.log(color);
                        return(
                            <SingleColor key={Math.random()} {...color} index={index} />
                        )
                    })
                }
            </section>
        </main>
        </>
    )
}

export default ColorGenerator