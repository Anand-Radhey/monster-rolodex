import React, { Component } from "react";
import "./App.css";
import { CardList } from "../CardList/CardList";
import SearchBox from "../Search/SearchBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }
  handleSearch = (event) => {
    const newState = {
      ...this.state,
    };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleSearch={this.handleSearch} searchText={searchText} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
