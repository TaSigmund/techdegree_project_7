//dependencies
import React from 'react';

/*** 
 SEARCH FIELD AND BUTTON
****/
class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {
          searchFor: ''
        }
      }

     /*** 
     * passes the search field text to state
     ***/

    onChange = (e) => {this.setState({searchFor: e.target.value});}

    /*** 
     * creates a url path and searches for the search term
     ***/

    handleSubmit = (e) => {
        e.preventDefault();
        let path = `/search/${this.state.searchFor}`;
        this.props.history.push(path);
        this.props.startSearch(this.state.searchFor);
    }

    render(){
        return(
        <form onSubmit={this.handleSubmit} className="search-form">
        <input 
            type="text" 
            name="search" 
            placeholder="Search" 
            value ={this.state.searchFor}
            onChange = {this.onChange}
            required="required"
        />
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
      </form>
    )}
    
}

export default SearchBar