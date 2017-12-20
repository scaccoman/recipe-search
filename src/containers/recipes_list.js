import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRecipe } from "../actions/index";

class RecipeList extends Component {
    constructor(props) {
        super(props);
        this.renderRecipes = this.renderRecipes.bind(this);
    }
    
    functionGetRecipe(recipe_id){
        console.log(recipe_id);
        this.props.getRecipe(recipe_id);
    }
    
    renderRecipes(recipeData) { //recipeData argument is coming from {this.props.recipes.map(this.renderRecipes)}, it's callback object of map method
        const publisher = recipeData.publisher;
        const recipe_id = recipeData.recipe_id;
        const title = recipeData.title;
        const source_url = recipeData.source_url;
        const image_url = recipeData.image_url;

        return (
            <tr onClick={() => { this.functionGetRecipe(recipe_id)}} key={recipe_id}>
                <td>{publisher}</td>
                <td>{title}</td>
                <td><a href={source_url}>View on original website</a></td>
                <td><img className="img-fluid" src={image_url} /></td>
            </tr>
        );
    }
    
    render() {
        if (!this.props.recipes) {
            return <div></div>;
        }
        return (
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Publisher</th>
                        <th>Title</th>
                        <th>Source</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.recipes.map(this.renderRecipes)}
                </tbody>
            </table>    
        );
    }
}

function mapStateToProps(state){
    return { recipes: state.searchRecipes.recipes };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators({ getRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(RecipeList);