import React, { Component } from "react";
import SerbiaMap from "./serbia.png";
import "./CurrentTemperature.css";

export default class CurrentTemperature extends Component {
  async getTemperatures(lat, long, temp, icons) {
    try {
      const api = `${this.props.proxy}https://api.darksky.net/forecast/${this.props.API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();
      console.log(jsonData);

      const { temperature, icon } = jsonData.currently;

      let temperatureC = (((temperature - 32) * 5) / 9).toFixed(0);

      document.getElementById(temp).textContent = temperatureC;

      let result = `<img src="./../temperature icons/${icon}.svg" alt="no picture" />`;

      document.getElementById(icons).innerHTML = result;
      console.log(document.getElementById(icons));
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getTemperatures(43.15306, 22.58611, "temPirot", "iconPirot");
    this.getTemperatures(43.32472, 21.90333, "temNis", "iconNis");
    this.getTemperatures(43.85861, 19.84878, "temUzice", "iconUzice");
    this.getTemperatures(44.01667, 20.91667, "temKragujevac", "iconKragujevac");
    this.getTemperatures(43.90358, 22.26405, "temZajecar", "iconZajecar");
    this.getTemperatures(44.62133, 21.18782, "temPozarevac", "iconPozarevac");
    this.getTemperatures(44.80401, 20.46513, "temBeograd", "iconBeograd");
    this.getTemperatures(45.25167, 19.83694, "temNoviSad", "iconNoviSad");
    this.getTemperatures(46.1, 19.66667, "temSubotica", "iconSubotica");
  }

  render() {
    return (
      // map with 9 cities and it's temperature
      <div className="map-content">
        <img className="img-pos" src={SerbiaMap} alt="serbia map" />
      </div>
    );
  }
}
