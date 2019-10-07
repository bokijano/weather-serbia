import React, { Component } from "react";
import "./forecast.css";
import Navbar from "./components/Navbar.js";
import CurrentTemperature from "./components/Current Temperature/CurrentTemperature.js";
import DailyTemperature from "./components/Daily Temperature/DailyTemperature.js";
import LongTermTemperature from "./components/Long Term Temperature/LongTermTemperature.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="weather-container">
          <DailyTemperature />
          <CurrentTemperature />
          <LongTermTemperature />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
