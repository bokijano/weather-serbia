import React, { Component } from "react";
import "./DailyTemperature.css";
import { ProductConsumer } from "./../../Context.js";
import DailyTemp from "./dailyTemp.js";

export default class DailyTemperature extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="current-temperatures">
            <h2 className="currDate">{value.convertUnix(value.time)}</h2>
            <hr></hr>
            <DailyTemp temp={value.dataPirot} value={value} />
            <DailyTemp temp={value.dataNis} value={value} />
            <DailyTemp temp={value.dataUzice} value={value} />
            <DailyTemp temp={value.dataKragujevac} value={value} />
            <DailyTemp temp={value.dataZajecar} value={value} />
            <DailyTemp temp={value.dataPozarevac} value={value} />
            <DailyTemp temp={value.dataBeograd} value={value} />
            <DailyTemp temp={value.dataNoviSad} value={value} />
            <DailyTemp temp={value.dataSubotica} value={value} />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
