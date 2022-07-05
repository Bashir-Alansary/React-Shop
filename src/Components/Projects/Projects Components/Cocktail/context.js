import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[loading, setLoading] = useState(false);
  const[searchTerm, setSearchTerm] = useState('b');
  const[cocktails, setCocktails] = useState([]);

  const fetshDrinks = async () => {
    setLoading(true);
    axios.get(url + searchTerm)
    .then((res) => {
        setLoading(false);
        const{drinks} = res.data;
        if(drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newCocktails);
        } else{
          setCocktails([]);
        }
    })
    .catch((err)=> {
        setLoading(false);
        console.log(err);
    })
  }

  useEffect(()=> {
    fetshDrinks();
  }, [searchTerm]);


  return <AppContext.Provider 
  value={{
    loading,
    searchTerm,
    cocktails,
    setSearchTerm
  }}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }