import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import "./Item.css"
import { useShopContext } from '../../Context/ShopContext';

export default function Item({id, img, name, oldPrice, newPrice}) {
  const{increaseItemAmount, setAddedMsg, setDisabledBtn, addToWishlist, wishlist, compareList, addToCompareList} = useShopContext();

  const linkClick = () => {
    window.scrollTo(0,0);
    setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
    setDisabledBtn(false);
  }

  return (
    <div className='item'>
      <div className='item-div'>
        <div className='content'>
          <Link className='imgbx link' to={"/product/"+ id}  onClick={linkClick}>
            <img src={img} />
          </Link>
          <div className='text'>
            <Link className='link' to={"/product/"+ id}  onClick={linkClick}>
              <h3>{name}</h3>
            </Link>
            <div className='price'>
              <span className='new-price'>{newPrice}</span>
              <span className='old-price'>{oldPrice}</span>
            </div>
          </div>
          <div className='item-icons compare'>
            <span className='icon-name'>
              {compareList[id] === "compare" ? "it is in compare" : "Add to compare"}
            </span>
            {compareList[id] === "compare"? <Link to="/compare" className="link icon-btn"><MdDoneOutline/> </Link>
            :<button onClick={()=>{addToCompareList(id)}} className='icon-btn'>
              <DiGitCompare />
            </button>}
          </div>
          <div className='item-icons wishlist'>
            <span className='icon-name'>
              {wishlist[id] === "favorite"? "it is in wishlist" : "Add to wishlist"}
            </span>
            {wishlist[id] === "favorite"? <Link to="/wishlist" className="link icon-btn"><FaHeart /> </Link>
            :<button onClick={()=>{addToWishlist(id)}} className='icon-btn'>
              <FiHeart />
            </button>}
          </div>

          <div className="main-btn">
            <button className='special-btn' onClick={()=>increaseItemAmount(id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
