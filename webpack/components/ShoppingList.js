import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            title: '',
            ingredients: []
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("http://api.yummly.com/v1/api/recipes?_app_id=26b04d4b&_app_key=66ccdcd976be7cf99c9555fafc92d7f6&q=pickles")
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
            console.log(response.matches)
            this.setState({
                results: response.matches,
            })
        })
    }

    render() {
        // var listArray = []

        // var listItems = this.state.results.map((item, i) => {
        //     listArray.push(item)
        // })
        // console.log(listArray)
        var displayList = this.state.results.map((item, i) => {
            var splitIngredients = item.ingredients.map((ingredient, i) => {
                // var pos = ingredient.indexOf("pickle");
                // console.log(pos)
                return <div className="row" key={i}>
                    <div className="col-xs-8 col-xs-offset-2 listItem">
                        {/* Quantity: <input type="text" value="1" /> */}
                        <h2>{ingredient}</h2>
                    </div>
                </div>
            })
            return splitIngredients
        })
        return <div>
            {displayList}
        </div>
    }
}

export default ShoppingList
