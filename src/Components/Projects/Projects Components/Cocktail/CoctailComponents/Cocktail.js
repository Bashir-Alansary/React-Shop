import React from 'react'
import { Link } from 'react-router-dom'
import {BsInfo} from "react-icons/bs"

const Cocktail = ({image, name, id, info, glass}) => {
  return (
    <article className='cocktail'>
      <div className='img-box'>
        <div className='overlay'>
          <Link to={`/cocktail/${id}`} className='view-info'>
            <BsInfo />
          </Link>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className='txt-box'>
       <div>
        <h3>{name}</h3>
        <h4>{glass}</h4>
       </div>
        <div>
         <p>{info}</p>
          <div>
            <Link to={`/cocktail/${id}`} className='details'>
              details
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Cocktail