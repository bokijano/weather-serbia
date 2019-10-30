import React, { Component } from "react";
import SerbiaMap from "./serbia.png";
import "./CurrentTemperature.css";
import { ProductConsumer } from "./../../Context.js";
import CurrentTempList from "./CurrentTempList.js";

export default class CurrentTemperature extends Component {
  render() {
    return (
      // map with 9 cities and it's temperature
      <ProductConsumer>
        {value => (
          <div className="map-content">
            <img className="img-pos" src={SerbiaMap} alt="serbia map" />

            <ul className="list-content">
              <CurrentTempList temp={value.dataPirot} value={value} />
              <CurrentTempList temp={value.dataNis} value={value} />
              <CurrentTempList temp={value.dataUzice} value={value} />
              <CurrentTempList temp={value.dataKragujevac} value={value} />
              <CurrentTempList temp={value.dataZajecar} value={value} />
              <CurrentTempList temp={value.dataPozarevac} value={value} />
              <CurrentTempList temp={value.dataBeograd} value={value} />
              <CurrentTempList temp={value.dataNoviSad} value={value} />
              <CurrentTempList temp={value.dataSubotica} value={value} />
            </ul>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
