import React from 'react'
import CocktailList from '../CoctailComponents/CoctailList'
import SearchForm from '../CoctailComponents/SearchForm'

const Home = () => {
  return (
    <div className='cocktails-home'>
     <div className='cocktails-container'>
        <SearchForm />
        <CocktailList />
     </div>
    </div>
  )
}

export default Home