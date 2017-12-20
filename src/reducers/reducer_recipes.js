import { FETCH_RECIPES } from "../actions/index.js"

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_RECIPES:
            // return state.concat([ action.payload.data ]); //ES5
            // return [ action.payload.data, ...state]; //ES6
            return action.payload.data; //modified version
        default:
            return state;
    }
    
}