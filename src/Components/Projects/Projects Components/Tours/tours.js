import React from 'react';
import Tour from './tour';
const Tours = ({tours, removeTour}) => {
  return (
    <section className='tours'>
      <div className='tours-content'>
        {
          tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />
          })
        }
      </div>
    </section>  
  )
};

export default Tours;