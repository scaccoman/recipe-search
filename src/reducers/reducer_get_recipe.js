import { GET_RECIPE } from "../actions/index.js"

export default function(state = {}, action) {
    switch (action.type) {
        case GET_RECIPE:
            return action.payload.data.recipe; //modified version
        default:
            return state;
    }
}