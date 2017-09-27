import React, { Component } from "react";
import "./search_bar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <label>
          <input
            onChange={event => this.onInputChange(event.target.value)}

          />
          {this.props.label}
        </label>
        <p></p>
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onVideoSearch(term);
   }
}



export default SearchBar;
