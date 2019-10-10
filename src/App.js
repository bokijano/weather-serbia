import React, { Component } from "react";
import "./forecast.css";
import Navbar from "./components/Navbar.js";
import CurrentTemperature from "./components/Current Temperature/CurrentTemperature.js";
import DailyTemperature from "./components/Daily Temperature/DailyTemperature.js";
import LongTermTemperature from "./components/Long Term Temperature/LongTermTemperature.js";
import clearday from "./temperature icons/clear-day.svg";
import partlycloudyday from "./temperature icons/partly-cloudy-day.svg";
import clearnight from "./temperature icons/clear-night.svg";
import cloudy from "./temperature icons/cloudy.svg";
import partlycloudynight from "./temperature icons/partly-cloudy-night.svg";
import fog from "./temperature icons/fog.svg";
import rain from "./temperature icons/rain.svg";
import sleet from "./temperature icons/sleet.svg";
import snow from "./temperature icons/snow.svg";
import wind from "./temperature icons/snow.svg";

class App extends Component {
  state = {
    cities: [
      "Pirot",
      "Niš",
      "Užice",
      "Kragujevac",
      "Zaječar",
      "Požarevac",
      "Beograd",
      "Novi Sad",
      "Subotica"
    ],
    forecastItem: [
      clearday,
      partlycloudyday,
      clearnight,
      partlycloudynight,
      cloudy,
      fog,
      sleet,
      snow,
      wind,
      rain
    ],
    proxy: "http://cors-anywhere.herokuapp.com/",
    API_KEY: "fb4c116f915c61742654d62a921fffa2"
  };

  convertUnix = unixTime => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "Oktober",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let date = new Date(unixTime * 1000);
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    let dayOfWeek = days[date.getDay()];

    let currentDate = dayOfWeek + " " + day + ". " + month + " " + year + ".";
    return currentDate;
  };

  getIcon = (icon, iconImg) => {
    switch (icon) {
      case "clear-day":
        iconImg.src = this.state.forecastItem[0];
        break;
      case "clear-night":
        iconImg.src = this.state.forecastItem[2];
        break;
      case "partly-cloudy-day":
        iconImg.src = this.state.forecastItem[1];
        break;
      case "partly-cloudy-night":
        iconImg.src = this.state.forecastItem[3];
        break;
      case "cloudy":
        iconImg.src = this.state.forecastItem[4];
        break;
      case "rain":
        iconImg.src = this.state.forecastItem[9];
        break;
      case "sleet":
        iconImg.src = this.state.forecastItem[6];
        break;
      case "snow":
        iconImg.src = this.state.forecastItem[7];
        break;
      case "wind":
        iconImg.src = this.state.forecastItem[8];
        break;
      case "fog":
        iconImg.src = this.state.forecastItem[5];
        break;
    }
  };

  async getTemperatures(lat, long) {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();
      console.log(jsonData);

      const { temperature, icon, time } = jsonData.currently;

      console.log(this.convertUnix(time));

      console.log(temperature, icon);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTemperatures(43.15306, 22.58611);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="weather-container">
          <DailyTemperature
            proxy={this.state.proxy}
            API_KEY={this.state.API_KEY}
            cities={this.state.cities}
            getIcon={this.getIcon}
            forecastItem={this.state.forecastItem}
            convertUnix={this.convertUnix}
          />
          <CurrentTemperature
            proxy={this.state.proxy}
            API_KEY={this.state.API_KEY}
            cities={this.state.cities}
            getIcon={this.getIcon}
          />
          <LongTermTemperature />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
