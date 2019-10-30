import React, { Component } from "react";
import "./LongTermTemperature.css";
import { ProductConsumer } from "./../../Context.js";
import LongTemp from "./LongTemp.js";

export default class LongTermTemperature extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => (
          <div className="long-temperature">
            <div className="long-temp">
              <hr></hr>
              <h4 className="dayFirst">
                {value.convertUnix(value.dataNis.time1)}
              </h4>
              <hr></hr>
              <h4 className="daySecond">
                {value.convertUnix(value.dataNis.time2)}
              </h4>
              <hr></hr>
              <h4 className="dayThird">
                {value.convertUnix(value.dataNis.time3)}
              </h4>
              <hr></hr>
            </div>
            <LongTemp temp={value.dataPirot} value={value} />
            <LongTemp temp={value.dataNis} value={value} />
            <LongTemp temp={value.dataUzice} value={value} />
            <LongTemp temp={value.dataKragujevac} value={value} />
            <LongTemp temp={value.dataZajecar} value={value} />
            <LongTemp temp={value.dataPozarevac} value={value} />
            <LongTemp temp={value.dataBeograd} value={value} />
            <LongTemp temp={value.dataNoviSad} value={value} />
            <LongTemp temp={value.dataSubotica} value={value} />
          </div>
        )}
      </ProductConsumer>
    );
  }
}
