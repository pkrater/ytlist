import React, { Component } from "react";
import "./search_bar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div className="SearchBar">
        <label>
          <input
            onChange={event => this.onInputChange(event.target.value)}

          />
          {this.props.label}
        </label>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onVideoSearch(term);
   }
}



export default SearchBar;
