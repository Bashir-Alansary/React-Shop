import React from 'react'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagesHead from "../../../PagesHead/pagesHead";
import Home from './pages/Home';
import './CocktailStyle.css';
function CocktailApp() {
  return (
      <>
        <PagesHead title='Cocktails' />
        <div>
        <Home />
        </div>
      </>
  )
}

export default CocktailApp