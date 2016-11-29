import React from 'react'
import ReactDOM from 'react-dom'
import Recipes from 'components/Recipes.js'

ReactDOM.render(
    <Recipes />,
    document.getElementById('recipes')
)

ReactDOM.render(
    <h1>My shopping list</h1>,
    document.getElementById('shopping')
)

ReactDOM.render(
    <h1>Schedule delivery</h1>,
    document.getElementById('schedule')
)
