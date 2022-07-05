import React from 'react'
import CartContent from './CartContent';
import Navbar from './Navbar';
import { useGlobalContext } from './context';
import PagesHead from '../../../PagesHead/pagesHead';
import "./style.css";
 
function Cart() {
    const{loading} = useGlobalContext();
    if (loading) {
    return (
        <>
        <PagesHead title="Cart" />
        <div className='loading'>
            <h1>Loading...</h1>
        </div>
        </>
        )
    }
    return (
        <>
            <PagesHead title="Cart" />
            <div className='cart'>
            <Navbar />
            <CartContent />
            </div>
        </>
    )
}

export default Cart;
