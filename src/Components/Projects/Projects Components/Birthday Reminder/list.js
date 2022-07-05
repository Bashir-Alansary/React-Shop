import React from 'react';

const List = ({people}) => {
  return (
    <>
      {
          people.map(person => {
              const{id, name, age, image} = person;
              return(
                  <article key={id} className="person">
                      <div className='person-content'>
                        <div className='img-bx'>
                          <img src={image} />
                        </div>
                        <div className='txt-box'>
                          <h4>{name}</h4>
                          <p>{age} years</p>
                        </div>
                      </div>
                  </article>
              )
          })
      }
    </>
  );
};

export default List;