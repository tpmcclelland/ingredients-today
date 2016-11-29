import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Recipes extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
        return <div className="container-fluid">
        <div className="row">
            <div className="col-sm-9 col-xs-6">
                <h1>Recipes</h1>
            </div>
            <div className="col-sm-3 col-xs-6 search-bar">
                <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-default search-button">Search</button>
                </form>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <h3>Recipe Name</h3>
                    <img src="http://unsplash.it/800?random"/>
                </div>
            </div>
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <img src="http://unsplash.it/750?random"/>
                </div>
            </div>
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <img src="http://unsplash.it/700?random"/>
                </div>
            </div>
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <img src="http://unsplash.it/600?random"/>
                </div>
            </div>
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <img src="http://unsplash.it/650?random"/>
                </div>
            </div>
            <div className="col-xs-6 col-sm-4">
                <div className="recipe-panel">
                    <img src="http://unsplash.it/500?random"/>
                </div>
            </div>
        </div>

        </div>
    }
}

export default Recipes
