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
        <ul>
          {/* forecast Pirot */}
          <li
            id="pirot"
            className="city-pos"
            onClick={() => this.getTemperatures(43.15306, 22.58611)}
          >
            <h4>Pirot</h4>
            <div className="temperature-content">
              {/*<img id="iconPirot" src={rain} alt="" />*/}
              <span id="iconPirot"></span>
              <h3 id="temPirot" className="temperature-degree">
                35
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Niš */}
          <li
            id="nis"
            className="city-pos"
            onClick={() => this.getPosition(43.32472, 21.90333)}
          >
            <h4>Niš</h4>
            <div className="temperature-content">
              {/*<img id="iconNis" src="" alt="" />*/}
              <span id="iconNis"></span>
              <h3 id="temNis" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Užice */}
          <li
            id="uzice"
            className="city-pos"
            onClick={() => this.getPosition(43.85861, 19.84878)}
          >
            <h4>Užice</h4>
            <div className="temperature-content">
              {/*<img id="iconUzice" src="" alt="" />*/}
              <span id="iconUzice"></span>
              <h3 id="temUzice" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Kragujevac */}
          <li
            id="kragujevac"
            className="city-pos"
            onClick={() => this.getPosition(44.01667, 20.91667)}
          >
            <h4>Kragujevac</h4>
            <div className="temperature-content">
              {/*<img id="iconKragujevac" src="" alt="" />*/}
              <span id="iconKragujevac"></span>
              <h3 id="temKragujevac" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Zaječar */}
          <li
            id="zajecar"
            className="city-pos"
            onClick={() => this.getPosition(43.90358, 22.26405)}
          >
            <h4>Zaječar</h4>
            <div className="temperature-content">
              {/*<img id="iconZajecar" src="" alt="" />*/}
              <span id="iconZajecar"></span>
              <h3 id="temZajecar" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Požarevac */}
          <li
            id="pozarevac"
            className="city-pos"
            onClick={() => getPosition(44.62133, 21.18782)}
          >
            <h4>Požarevac</h4>
            <div className="temperature-content">
              {/*<img id="iconPozarevac" src="" alt="" />*/}
              <span id="iconPoyarevac"></span>
              <h3 id="temPozarevac" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Beograd */}
          <li
            id="beograd"
            className="city-pos"
            onClick={() => this.getPosition(44.80401, 20.46513)}
          >
            <h4 id="bg">Beograd</h4>
            <div className="temperature-content">
              {/*<img id="iconBeograd" src="" alt="" />*/}
              <span id="iconBeograd"></span>
              <h3 id="temBeograd" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Novi Sad */}
          <li
            id="novi-sad"
            className="city-pos"
            onClick={() => this.getPosition(45.25167, 19.83694)}
          >
            <h4>Novi Sad</h4>
            <div className="temperature-content">
              {/*<img id="iconNoviSad" src="" alt="" />*/}
              <span id="iconNoviSad"></span>
              <h3 id="temNoviSad" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
          {/* forecast Subotica */}
          <li
            id="subotica"
            className="city-pos"
            onClick={() => this.getPosition(46.1, 19.66667)}
          >
            <h4>Subotica</h4>
            <div className="temperature-content">
              {/*<img id="iconSubotica" src="" alt="" />*/}
              <span id="iconSubotica"></span>
              <h3 id="temSubotica" className="temperature-degree">
                30
              </h3>
              <span>C</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
