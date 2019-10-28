import React, { Component } from "react";
import SerbiaMap from "./serbia.png";
import "./CurrentTemperature.css";

export default class CurrentTemperature extends Component {
  async getTemperatures(lat, long, temp, icons, cityID, arr) {
    try {
      const { cities, getIcon } = this.props;

      const api = `${this.props.proxy}https://api.darksky.net/forecast/${this.props.API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();

      const { temperature, icon } = jsonData.currently;

      let temperatureC = (((temperature - 32) * 5) / 9).toFixed(0);

      let cityName = cities[arr];
      let id = cityID;

      let result = `
      
      <li id="${id}" class="city-pos">
        <h4>${cityName}</h4>
        <div class="temperature-content">
          <img id=${icons} src="" alt="" />
          <h3 id=${temp} class="temperature-degree">35</h3>
          <span>C</span>
        </div>
      </li>
         `;

      document.querySelector(".list-content").innerHTML += result;
      document.getElementById(temp).textContent = temperatureC;

      let iconSrc = document.getElementById(icons);

      getIcon(icon, iconSrc);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getTemperatures(
      43.15306,
      22.58611,
      "temPirot",
      "iconPirot",
      "pirot",
      0
    );
    this.getTemperatures(43.32472, 21.90333, "temNis", "iconNis", "nis", 1);
    this.getTemperatures(
      43.85861,
      19.84878,
      "temUzice",
      "iconUzice",
      "uzice",
      2
    );
    this.getTemperatures(
      44.01667,
      20.91667,
      "temKragujevac",
      "iconKragujevac",
      "kragujevac",
      3
    );
    this.getTemperatures(
      43.90358,
      22.26405,
      "temZajecar",
      "iconZajecar",
      "zajecar",
      4
    );
    this.getTemperatures(
      44.62133,
      21.18782,
      "temPozarevac",
      "iconPozarevac",
      "pozarevac",
      5
    );
    this.getTemperatures(
      44.80401,
      20.46513,
      "temBeograd",
      "iconBeograd",
      "beograd",
      6
    );
    this.getTemperatures(
      45.25167,
      19.83694,
      "temNoviSad",
      "iconNoviSad",
      "novi-sad",
      7
    );
    this.getTemperatures(
      46.1,
      19.66667,
      "temSubotica",
      "iconSubotica",
      "subotica",
      8
    );
  }

  render() {
    return (
      // map with 9 cities and it's temperature
      <div className="map-content">
        <img className="img-pos" src={SerbiaMap} alt="serbia map" />
        <ul className="list-content"></ul>
      </div>
    );
  }
}
