import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PagesHead from '../../../../PagesHead/pagesHead'
import Loading from '../CoctailComponents/Loading'
import{BiArrowBack} from "react-icons/bi"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const{id} = useParams();
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then (res => {
        const data = res.data;
        if(data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      }).catch(()=>{
        console.log('error');
      })
      setLoading(false)
    }
    getCocktail()
  }, [id]);
  
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <>
      <PagesHead title="Cocktail details" />
      <section className='single-cocktail'>
        <div className='cocktails-container'>
          <Link to='/cocktail' className='back'>
            <span className='arrow'><BiArrowBack /></span> back
          </Link>
          <div className='drink'>
            <div className='img-box'>
              <img src={image} alt={name}></img>
            </div>
            <div className='drink-info'>
              <h2 className='title'>{name}</h2>
              <p>
                <span className='drink-data'>name :</span> {name}
              </p>
              <p>
                <span className='drink-data'>category :</span> {category}
              </p>
              <p>
                <span className='drink-data'>info :</span> {info}
              </p>
              <p>
                <span className='drink-data'>glass :</span> {glass}
              </p>
              <p>
                <span className='drink-data'>instructons :</span> {instructions}
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default SingleCocktail