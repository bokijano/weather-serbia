import React, { Component } from "react";
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

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    proxy: "http://cors-anywhere.herokuapp.com/",
    API_KEY: "fb4c116f915c61742654d62a921fffa2",
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
    ]
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
      "October",
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
  convertUnixHour = unixTime => {
    let date = new Date(unixTime * 1000);
    let hour = date.getHours();

    if (
      hour == "0" ||
      hour == "1" ||
      hour == "2" ||
      hour == "3" ||
      hour == "4" ||
      hour == "5" ||
      hour == "6" ||
      hour == "7" ||
      hour == "8" ||
      hour == "9"
    ) {
      hour = "0" + hour;
    }

    let currentHour = hour;

    return currentHour;
  };
  toCelsius(degree) {
    let toCelsius = (((degree - 32) * 5) / 9).toFixed(0);
    return toCelsius;
  }
  getForecastIcon = icon => {
    switch (icon) {
      case "clear-day":
        return this.state.forecastItem[0];
        break;
      case "clear-night":
        return this.state.forecastItem[2];
        break;
      case "partly-cloudy-day":
        return this.state.forecastItem[1];
        break;
      case "partly-cloudy-night":
        return this.state.forecastItem[3];
        break;
      case "cloudy":
        return this.state.forecastItem[4];
        break;
      case "rain":
        return this.state.forecastItem[9];
        break;
      case "sleet":
        return this.state.forecastItem[6];
        break;
      case "snow":
        return this.state.forecastItem[7];
        break;
      case "wind":
        return this.state.forecastItem[8];
        break;
      case "fog":
        return this.state.forecastItem[5];
        break;
    }
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          convertUnix: this.convertUnix,
          toCelsius: this.toCelsius,
          getForecastIcon: this.getForecastIcon,
          convertUnixHour: this.convertUnixHour,
          getTemperatures: this.getTemperatures
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
