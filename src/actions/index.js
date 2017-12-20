import axios from 'axios';

const API_KEY = "8634984bc2a88c463b4310b25f8057a1";
export const SEARCH_URL = `https://food2fork.com/api/search?key=${API_KEY}`;
export const GET_URL    = `https://food2fork.com/api/get?key=${API_KEY}`;


export const FETCH_RECIPES = "FETCH_RECIPES";
export const GET_RECIPE = "GET_RECIPE";

export function fetchRecipes(searchTerm) {
    const url = `${SEARCH_URL}&q=${searchTerm}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_RECIPES,
        payload: request
    };
}

export function getRecipe(recipeId) {
    const url = `${GET_URL}&rId=${recipeId}`;
    const request = axios.get(url);
    if (recipeId) {
        return {
        type: GET_RECIPE,
        payload: request
        };
    }
    return null;
}