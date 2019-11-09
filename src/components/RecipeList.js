import React, { Component } from 'react'

export default class RecipeList extends Component {
    render() {
        const { recipes } = this.props;
        return (
            <React.Fragment>
                { recipes.map(recipe => { return <li key={recipe.recipe_id}>{ recipe.title }</li> }) }
            </React.Fragment>
        )
    }
}
