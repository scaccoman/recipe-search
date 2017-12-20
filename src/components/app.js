import React, { Component } from 'react';
import SearchBar from "../containers/search_bar";
import RecipesList from "../containers/recipes_list";
import RecipeDetails from "../containers/recipe_details";

export default class App extends Component {
  render() {
    return (
      <span>
          <SearchBar />
          <div>
            <RecipeDetails />
            <RecipesList />
          </div>
      </span>
    );
  }
}
