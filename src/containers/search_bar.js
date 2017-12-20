import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRecipes } from "../actions/index";
import _ from "lodash";

class SearchBar extends Component {
    constructor(props){
        super(props);
        
        this.state = {term: ""}; //default state will be empty string
        
        this.onInputChange = this.onInputChange.bind(this); //bind THIS keyword for onInputChange function, it cannot find function otherwise
        this.onFormSubmit = this.onFormSubmit.bind(this); //necessary for because not accessing thisObj in function
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value });
        if (this.state.term.length > 5){
            this.props.fetchRecipes(this.state.term);
        }
    }
    
    onFormSubmit(event) {
        event.preventDefault();
        
        //We need to go and fetch weather data
        this.props.fetchRecipes(this.state.term);
        this.setState({ term: "" });
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Search for a recipe.."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators({ fetchRecipes }, dispatch);
}

export default connect(null, mapDispachToProps)(SearchBar);