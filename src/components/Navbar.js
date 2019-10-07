import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-bolt"></i>
        <i className="fas fa-cloud-sun"></i>
        <i className="fas fa-cloud-showers-heavy"></i>
        <h2>Weather Forecast for Serbia</h2>
        <i className="fas fa-cloud-rain"></i>
        <i className="fas fa-sun"></i>
        <i className="fas fa-cloud-moon"></i>
      </div>
    );
  }
}
