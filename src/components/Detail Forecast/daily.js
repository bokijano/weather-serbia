import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class daily extends Component {
  render() {
    const {
      time,
      icon,
      temperatureMin,
      temperatureMax,
      summary
    } = this.props.day;
    return (
      <ProductConsumer>
        {value => (
          <div className="day-temp">
            <h6>{value.convertUnix(time)}</h6>
            <div className="long-temp">
              <img
                id="long-icon"
                src={value.getForecastIcon(icon)}
                alt="no picture"
              />
              <p className="long-max">
                <span style={{ color: "red" }}>
                  {value.toCelsius(temperatureMax)} C
                </span>
                <span> max</span>
              </p>
              <p className="long-min">
                <span style={{ color: "green" }}>
                  {value.toCelsius(temperatureMin)} C
                </span>
                <span> min</span>
              </p>
              <h6 style={{ marginTop: "10px", color: "black" }}>{summary}</h6>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
