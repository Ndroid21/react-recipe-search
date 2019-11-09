import React, { Component } from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';

import { recipes } from './tempList';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    recipes: recipes
  }

  render() {
    return (
      <React.Fragment>
        <RecipeSearch />
        <RecipeList recipes={this.state.recipes} />
      </React.Fragment>
    );
  }
}

