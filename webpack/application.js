import React from 'react'
import ReactDOM from 'react-dom'
import ShoppingList from './components/ShoppingList'
import Recipes from 'components/Recipes.js'

ReactDOM.render(
    <Recipes />,
    document.getElementById('recipes')
)

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('shopping')
)

ReactDOM.render(
    <h1>Schedule delivery</h1>,
    document.getElementById('schedule')
)
