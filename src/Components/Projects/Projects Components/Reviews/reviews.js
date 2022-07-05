import React from 'react'
import PagesHead from '../../../PagesHead/pagesHead';
import Review from './review';
import "./style.css";
function Reviews() {
    return (
        <>
        <PagesHead title="Reviews" />
        <main className='reviews'>
            <section className='container'>
                <Review />
            </section>
        </main>
        </>
    )
}

export default Reviews;
