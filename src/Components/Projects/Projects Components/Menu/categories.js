import React from 'react'

function Categories({filterItems, allCategories}) {
  return (
    <div className='categories-content'>
      {
        allCategories.map(category => 
          <button key={Math.random()} onClick={()=> filterItems(category)}>{category}</button>
        )
      }      
    </div>
  )
}

export default Categories;
