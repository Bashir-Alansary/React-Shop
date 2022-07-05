import React, { useState } from 'react'
import Question from './question';
import data from "../../../../Data/questionsData";
import "./style.css";
import PagesHead from '../../../PagesHead/pagesHead';

function Questions() {
    const[questions, setQuestions] = useState(data);
    return (
        <>
        <PagesHead title='Questions And Answers' />
        <main className='questions'>
            <div className='container'>
                <section className='info'>
                    {
                        questions.map(question => <Question key={question.id} {...question} />)
                    }
                </section>
            </div>
        </main>
        </>
    )
}

export default Questions;
