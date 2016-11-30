import React from 'react'
import ReactDOM from 'react-dom'
import ShoppingList from './components/ShoppingList'
import Recipes from 'components/Recipes.js'
import Schedule from 'components/Schedule.js'

ReactDOM.render(
    <Recipes />,
    document.getElementById('recipes')
)

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('shopping')
)

ReactDOM.render(
    <Schedule />,
    document.getElementById('schedule')
)
