import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppProvider } from "./context";
import Cocktails from "./Cocktails";
function CocktailApp() {
  return (
    <AppProvider>
      <Cocktails />
    </AppProvider>
  )
}

export default CocktailApp