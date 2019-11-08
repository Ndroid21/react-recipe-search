import React, { Component } from 'react';
import RecipeSearch from './components/RecipeSearch';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipeSearch />
      </React.Fragment>
    );
  }
}

