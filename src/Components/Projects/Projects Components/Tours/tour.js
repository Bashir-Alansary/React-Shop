import React, { useState } from 'react';

const Tour = ({id, name, image, info, price, removeTour}) => {
  const[readMore, setReadMore] = useState(false);
  return(
    <article className='tour'>
      <div className='img-box'>
        <img src={image} alt={name} />
      </div>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore? info : `${info.substring(0, 200)}....`}
          <button className='read-more' onClick={()=> setReadMore(!readMore)}>{readMore? 'show less' : 'read more'}</button>
        </p>
        <button className='delete-btn' onClick={()=> removeTour(id)}>not interested</button>
      </footer>

    </article>
  )
};

export default Tour;