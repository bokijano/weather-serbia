import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class CurrentTempList extends Component {
  render() {
    const { cityID, city, temperature, iconCurrently } = this.props.temp;
    const { toCelsius, getForecastIcon } = this.props.value;
    return (
      <ProductConsumer>
        {value => (
          <li id={cityID} className="city-pos">
            <h4>{city}</h4>
            <div className="temperature-content">
              <img src={getForecastIcon(iconCurrently)} alt="no picture" />
              <h3 className="temperature-degree">{toCelsius(temperature)}</h3>
              <span>C</span>
            </div>
          </li>
        )}
      </ProductConsumer>
    );
  }
}
