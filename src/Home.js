import React, { Component } from "react";
import "./forecast.css";
import CurrentTemperature from "./components/Current Temperature/CurrentTemperature.js";
import DailyTemperature from "./components/Daily Temperature/DailyTemperature.js";
import LongTermTemperature from "./components/Long Term Temperature/LongTermTemperature.js";
import { ProductConsumer } from "./Context.js";

class App extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="weather-container">
            <DailyTemperature />
            <CurrentTemperature />
            <LongTermTemperature />
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default App;
