import React, { Component } from "react";

export default class LongTemp extends Component {
  render() {
    const {
      city,
      icon1,
      icon2,
      icon3,
      tempMax1,
      tempMax2,
      tempMax3,
      tempMin1,
      tempMin2,
      tempMin3
    } = this.props.temp;
    const { toCelsius, getForecastIcon } = this.props.value;
    return (
      <div className="long-city">
        <h4 className="city-name">{city}</h4>
        <div className="longForecast">
          <hr></hr>
          <div className="firstDay">
            <img
              className="first"
              id="temp-icon"
              src={getForecastIcon(icon1)}
              alt="no picture"
            />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax1)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin1)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <hr></hr>
          <div className="secondDay">
            <img id="temp-icon" src={getForecastIcon(icon2)} alt="no picture" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax2)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin2)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <hr></hr>
          <div className="thirdDay">
            <img id="temp-icon" src={getForecastIcon(icon3)} alt="no picture" />
            <div className="forecastFirst">
              <h5 className="maxTemp">
                <span id="max">{toCelsius(tempMax3)} C</span>
                <span id="text">max</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{toCelsius(tempMin3)} C</span>
                <span id="minText">min</span>
              </h5>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}
