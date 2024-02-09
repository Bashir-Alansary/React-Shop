import React, {useState} from 'react'
import "./ProductDetails.css"
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { useShopContext } from '../../Context/ShopContext';

export default function ProductDetails({product}) {
  
  const {id, name, category, newPrice, oldPrice, sizes, tags} = product;
  const {addedAmount, setAddedAmount, addAddedAmount, addedMsg, setAddedMsg, disabledBtn, setDisabledBtn} = useShopContext();

  const decreaseAddedAmount = () => {
    if (addedAmount > 1) {
      setAddedAmount(addedAmount - 1)
    } else {
      setAddedAmount(1);
    }
  }

  const checkAvailableSize = (index) => {
    if (index === 0) {
      setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
      setDisabledBtn(false);
    } else {
      setAddedMsg({text: "sold Out", class: "msg warning", availablity: true});
      setDisabledBtn(true);
    }
  }

  return (
    <div className='product-details'>
      <div className='stars'>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStarHalf /></span>
        <span className='num'>(4.5)</span>
      </div>
      <h1>{name}</h1>
      <span className='category'>{category}</span>
      <hr />
      <div className='price'>
        <span className='new-price price'>{newPrice}$</span>
        <span className='old-price price'>{oldPrice}$</span>
      </div>
      <div className='info'>
        <p>
          Captivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard.
          The real mother of pearl buttons and embroidered crocodile...
        </p>
      </div>
      <ul className='sizes'>
        {
          sizes.map((size, index) => {
            return(
                <button key={index}className = "size" onClick={()=>checkAvailableSize(index)} >{size}</button>
            )
          })
        }
      </ul>
      <div className="add-to-cart">
        <div className='inputs-content'>
          <div className={disabledBtn? 'amount disabled' : 'amount'}>
            <div className='num'>
              <input type="number" min={0} value={addedAmount} onChange={(e)=>setAddedAmount(e.target.value)} />
            </div>
            <div className='control'>
              <button onClick={()=>setAddedAmount(addedAmount + 1)}>+</button>
              <button onClick={decreaseAddedAmount}>-</button>
            </div>
          </div>
          <button className={disabledBtn? 'add disabled' : 'add'} disabled={disabledBtn ? true : false} onClick={()=>addAddedAmount(id)}>{disabledBtn ? "sold out" : 'add'}</button>
        </div>
        <p className={addedMsg.class}>{addedMsg.availablity && <b>Availabilty: </b>}<span>{addedMsg.text}</span></p>
      </div>
      <div className='tags'>
        <h3>tags:</h3>
        <ul className='tags-links'>
          {
            tags.map(tag => {
              return(
                <li className='tag-link' key={Math.random()}>{tag},</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
