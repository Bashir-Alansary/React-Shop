import React from 'react'
import Loading from '../CoctailComponents/Loading';
import { useGlobalContext } from '../context';
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const{cocktails, loading} = useGlobalContext();
  if(loading) {
    return <Loading />
  }
  
  if(cocktails.length < 1){
    return <div className='cocktails-no-items'>No Items..</div> 
  }

  return (
    <section className='cocktails'>
      <div className='cocktails-content'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList