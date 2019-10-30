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
    ],
    dataNis: {},
    dataPirot: {},
    dataUzice: {},
    dataKragujevac: {},
    dataZajecar: {},
    dataPozarevac: {},
    dataBeograd: {},
    dataNoviSad: {},
    dataSubotica: {},
    dataAllCities: [],
    time: "",
    firstDay: "",
    secondDay: "",
    thirdDay: ""
  };

  getValues(jsonData) {
    let day1 = jsonData.daily.data[1];
    let time1 = day1.time;
    let icon1 = day1.icon;
    let tempMax1 = day1.temperatureMax;
    let tempMin1 = day1.temperatureMin;
    let firstDay = {time1, icon1, tempMax1, tempMin1}

    let day2 = jsonData.daily.data[2];
    let time2 = day2.time;
    let icon2 = day2.icon;
    let tempMax2 = day2.temperatureMax;
    let tempMin2 = day2.temperatureMin;
    let secondDay = {time2, icon2, tempMax2, tempMin2}
    
    let day3 = jsonData.daily.data[3];
    let time3 = day3.time;
    let icon3 = day3.icon;
    let tempMax3 = day3.temperatureMax;
    let tempMin3 = day3.temperatureMin;
    let thirdDay = {time3, icon3, tempMax3, tempMin3}    
    this.setState({
      firstDay: firstDay,
      secondDay: secondDay,
      thirdDay: thirdDay
    })
  }

  async getTemperaturesNis() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.32472, 21.90333`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const {
        temperatureMin,
        temperatureMax,
        icon,
        time
      } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };    
      let element = { id: 1 };
      let cityID = { cityID: "nis" }
      let cityName = { city: "Niš" };
      let dataNis = Object.assign(element, cityName, forecast, cityID,
                    this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataNis: dataNis,
        time: time
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesPirot() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.15306, 22.58611`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 2 };
      let cityID = { cityID: "pirot" }
      let cityName = { city: "Pirot" };
      let dataPirot = Object.assign(forecast, element, cityName, cityID,
                     this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataPirot: dataPirot
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesUzice() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.85861, 19.84878`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 3 };
      let cityID = { cityID: "uzice" }
      let cityName = { city: "Užice" };
      let dataUzice = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataUzice: dataUzice
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesKragujevac() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/44.01667, 20.91667`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 4 };
      let cityID = { cityID: "kragujevac" }
      let cityName = { city: "Kragujevac" };
      let dataKragujevac = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataKragujevac: dataKragujevac
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesZajecar() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.90358, 22.26405`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 5 };
      let cityID = { cityID: "zajecar" }
      let cityName = { city: "Zaječar" };
      let dataZajecar = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataZajecar: dataZajecar
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesPozarevac() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/44.62133, 21.18782`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 6 };
      let cityID = { cityID: "pozarevac" }
      let cityName = { city: "Požarevac" };
      let dataPozarevac = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataPozarevac: dataPozarevac
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesBeograd() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/44.80401, 20.46513`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 7 };
      let cityID = { cityID: "beograd" }
      let cityName = { city: "Beograd" };
      let dataBeograd = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataBeograd: dataBeograd
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesNoviSad() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/45.25167, 19.83694`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 8 };
      let cityID = { cityID: "novi-sad" }
      let cityName = { city: "Novi Sad" };
      let dataNoviSad = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataNoviSad: dataNoviSad
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getTemperaturesSubotica() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/46.1, 19.66667`;
      const data = await fetch(api);
      const jsonData = await data.json();
      this.getValues(jsonData);
      const { temperatureMin, temperatureMax, icon } = jsonData.daily.data[0];
      const { temperature } = jsonData.currently;
      let iconCurrently = jsonData.currently.icon;
      let forecast = { iconCurrently, temperature, temperatureMax, temperatureMin, icon };
      let element = { id: 9 };
      let cityID = { cityID: "subotica" }
      let cityName = { city: "Subotica" };
      let dataSubotica = Object.assign(forecast, element, cityName, cityID,
         this.state.firstDay, this.state.secondDay, this.state.thirdDay);
      this.setState({
        dataSubotica: dataSubotica
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getTemperaturesNis();
    this.getTemperaturesPirot();
    this.getTemperaturesUzice();
    this.getTemperaturesKragujevac();
    this.getTemperaturesZajecar();
    this.getTemperaturesPozarevac();
    this.getTemperaturesBeograd();
    this.getTemperaturesNoviSad();
    this.getTemperaturesSubotica();
  }


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
          convertUnixHour: this.convertUnixHour
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
