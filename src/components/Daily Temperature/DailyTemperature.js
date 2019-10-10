import React, { Component } from "react";
import "./DailyTemperature.css";

export default class DailyTemperature extends Component {
  state = {};
  async getTemperatures(lat, long, arr) {
    try {
      const { proxy, API_KEY, cities, forecastItem, convertUnix } = this.props;

      const api = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();

      const {
        temperatureMin,
        temperatureMax,
        icon,
        time
      } = jsonData.daily.data[0];

      let tempMin = (((temperatureMin - 32) * 5) / 9).toFixed(0);
      let tempMax = (((temperatureMax - 32) * 5) / 9).toFixed(0);

      let cityName = cities[arr];

      let iconImg = "";

      switch (icon) {
        case "clear-day":
          iconImg = forecastItem[0];
          break;
        case "clear-night":
          iconImg = forecastItem[2];
          break;
        case "partly-cloudy-day":
          iconImg = forecastItem[1];
          break;
        case "partly-cloudy-night":
          iconImg = forecastItem[3];
          break;
        case "cloudy":
          iconImg = forecastItem[4];
          break;
        case "rain":
          iconImg = forecastItem[9];
          break;
        case "sleet":
          iconImg = forecastItem[6];
          break;
        case "snow":
          iconImg = forecastItem[7];
          break;
        case "wind":
          iconImg = forecastItem[8];
          break;
        case "fog":
          iconImg = forecastItem[5];
          break;
      }

      let date = convertUnix(time);

      let result = `
      <div class="curr-city">
       <h2 class="city-name">${cityName}
        <span class="fa fa-angle-double-right"></span>
       </h2>
       <img id="temp-icon" src=${iconImg} alt="no picture" />
       <h5 class="maxTemp"><span id="max">${tempMax} C</span><span id="text">MAX</span></h5>
       <h5 class="minTemp"><span id="min">${tempMin} C</span><span id="text">MIN</span></h5>
      </div> 
      `;
      document.querySelector(".current-temperatures").innerHTML += result;

      document.querySelector(".currDate").innerHTML = date;
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getTemperatures(43.15306, 22.58611, 0);
    this.getTemperatures(43.32472, 21.90333, 1);
    this.getTemperatures(43.85861, 19.84878, 2);
    this.getTemperatures(44.01667, 20.91667, 3);
    this.getTemperatures(43.90358, 22.26405, 4);
    this.getTemperatures(44.62133, 21.18782, 5);
    this.getTemperatures(44.80401, 20.46513, 6);
    this.getTemperatures(45.25167, 19.83694, 7);
    this.getTemperatures(46.1, 19.66667, 8);
  }
  render() {
    return (
      <div className="current-temperatures">
        <h2 className="currDate"></h2>
        <hr></hr>
      </div>
    );
  }
}
