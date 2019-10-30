import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class dailyTemp extends Component {
  render() {
    const { city, temperatureMin, temperatureMax, icon } = this.props.temp;
    const { toCelsius, getForecastIcon } = this.props.value;
    return (
      <ProductConsumer>
        {value => (
          <div className="curr-city">
            <h2 className="city-name">{city}</h2>

            <img id="temp-icon" src={getForecastIcon(icon)} alt="no picture" />
            <h5 className="maxTemp">
              <span id="max">{toCelsius(temperatureMax)} C</span>
              <span id="text">MAX</span>
            </h5>
            <h5 className="minTemp">
              <span id="min">{toCelsius(temperatureMin)} C</span>
              <span id="text">MIN</span>
            </h5>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
