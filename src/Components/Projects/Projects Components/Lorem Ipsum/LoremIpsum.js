import React, { useState } from 'react';
import PageHead from "../../../PagesHead/pagesHead";
import data from '../../../../Data/loremIpsumData';
import "./style.css";

function LoremIpsum() {
    const[count, setCount] = useState(0);
    const[text, setText] = useState([]);

    const handleChange = (e) => {
        setCount(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if(amount <= 0) {
            amount = 1;
        }
        if(amount > 8) {
            amount = 8;
        }
        setText(data.slice(0, amount));
    }

    return (
        <>
        <PageHead title="Lorem Ipsum" />
        <main className='lorem'>
            <div className='container'>
                <section className='form-content'>
                    <form onSubmit={handleSubmit}>
                        <label>Paragraphs: </label>
                        <input type="number" value={count} onChange={handleChange}/>
                        <button type='submit' className='btn'>generate</button>
                    </form>
                </section>
                <section className='paragraphs'>
                    {
                        text.map(paragragh => <p key={Math.random()}>{paragragh}</p>)
                    }
                </section>
            </div>
        </main>
        </>
    )
}

export default LoremIpsum;