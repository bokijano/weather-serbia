import React, { Component } from "react";
import "./forecast.css";
import Navbar from "./components/Navbar.js";
import CurrentTemperature from "./components/Current Temperature/CurrentTemperature.js";
import DailyTemperature from "./components/Daily Temperature/DailyTemperature.js";
import LongTermTemperature from "./components/Long Term Temperature/LongTermTemperature.js";

class App extends Component {
  state = {
    cities: [
      "Pirot",
      ,
      "Niš",
      "Užice",
      "Kragujevac",
      "Zaječar",
      "Požarevac",
      "Beograd",
      "Novi Sad",
      "Subotica"
    ],
    pirot: {},
    temperatures: [],
    proxy: "http://cors-anywhere.herokuapp.com/",
    API_KEY: "fb4c116f915c61742654d62a921fffa2"
  };

  async getTemperatures(lat, long) {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();
      console.log(jsonData);

      const { temperature, icon } = jsonData.currently;

      console.log(temperature, icon);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.setPosition();
  }

  setPosition = () => {
    let pirot = this.getTemperatures(43.15306, 22.58611);
    console.log(pirot);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="weather-container">
          <DailyTemperature />
          <CurrentTemperature
            proxy={this.state.proxy}
            API_KEY={this.state.API_KEY}
          />
          <LongTermTemperature />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
