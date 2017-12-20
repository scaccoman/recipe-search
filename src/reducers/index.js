import { combineReducers } from 'redux';
import RecipesReducer from "./reducer_recipes";
import GetRecipeReducer from "./reducer_get_recipe.js";

const rootReducer = combineReducers({
  searchRecipes: RecipesReducer, //THIS VARIABLE WILL BE ACCESSIBLE FROM CONTAINERS UNDER state.weather within mapStateToProps redux function
  selectedRecipe: GetRecipeReducer
});

export default rootReducer;
