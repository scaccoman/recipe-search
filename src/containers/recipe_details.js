import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeDetails extends Component {
    render() {
        console.log("log coming from recipe details " + this.props.recipes);
        if (!this.props.recipeDetails.title) {
                return (
                    <div>
                        
                    </div>
            );
        }
        return (
            <div className="container">
                <div className="card col-6" style={{width: "40rem", margin: "0 auto", textAlign: "center"}}>
                  <img className="card-img-top mx-auto" style={{maxHeight: "50%", margin: "0 auto"}} src={this.props.recipeDetails.image_url} alt="Card image cap" />
                  <div className="card-block">
                    <h4 className="card-title">{this.props.recipeDetails.title}</h4>
                    <p className="card-text">{this.props.recipeDetails.ingredients}</p>
                    <a target="_blank" href={this.props.recipeDetails.source_url} className="btn btn-primary">Additional Details</a>
                  </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return { recipeDetails: state.selectedRecipe };
}

//ES6 VERSION OF THE SAME FUNCTION
// function mapStateToProps({ weather }){
//     return { weather };
// }

export default connect(mapStateToProps)(RecipeDetails);