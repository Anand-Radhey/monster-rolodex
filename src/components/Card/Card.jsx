import React, { Component } from "react";
import "./Card.css";
export default class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          alt="Monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
        />
        <h2>{this.props.monster.name}</h2>
        <p>{this.props.monster.email}</p>
      </div>
    );
  }
}
