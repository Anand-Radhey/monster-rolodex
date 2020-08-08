import React from "react";
import "./SearchBox.css";
export default class SearchBox extends React.Component {
  render() {
    return (
      <input
        className="search"
        type="text"
        name="searchText"
        value={this.props.searchText}
        placeholder="Search Monsters"
        onChange={this.props.handleSearch}
      />
    );
  }
}
