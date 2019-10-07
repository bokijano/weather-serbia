import React, { Component } from "react";
import SerbiaMap from "./serbia.png";
import "./CurrentTemperature.css";

export default class CurrentTemperature extends Component {
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
            onClick="getPosition(43.15306, 22.58611, 0)"
          >
            <h4>Pirot</h4>
            <div className="temperature-content">
              <img id="iconPirot" src="" alt="" />
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
            onClick="getPosition(43.32472, 21.90333, 1)"
          >
            <h4>Niš</h4>
            <div className="temperature-content">
              <img id="iconNis" src="" alt="" />
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
            onClick="getPosition(43.85861, 19.84878, 2)"
          >
            <h4>Užice</h4>
            <div className="temperature-content">
              <img id="iconUzice" src="" alt="" />
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
            onClick="getPosition(44.01667, 20.91667, 3)"
          >
            <h4>Kragujevac</h4>
            <div className="temperature-content">
              <img id="iconKragujevac" src="" alt="" />
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
            onClick="getPosition(43.90358, 22.26405, 4)"
          >
            <h4>Zaječar</h4>
            <div className="temperature-content">
              <img id="iconZajecar" src="" alt="" />
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
            onClick="getPosition(44.62133, 21.18782, 5)"
          >
            <h4>Požarevac</h4>
            <div className="temperature-content">
              <img id="iconPozarevac" src="" alt="" />
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
            onClick="getPosition(44.80401, 20.46513, 6)"
          >
            <h4 id="bg">Beograd</h4>
            <div className="temperature-content">
              <img id="iconBeograd" src="" alt="" />
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
            onClick="getPosition(45.25167, 19.83694, 7)"
          >
            <h4>Novi Sad</h4>
            <div className="temperature-content">
              <img id="iconNoviSad" src="" alt="" />
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
            onClick="getPosition(46.1, 19.66667, 8)"
          >
            <h4>Subotica</h4>
            <div className="temperature-content">
              <img id="iconSubotica" src="" alt="" />
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
