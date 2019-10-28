import React, { Component } from "react";
import { ProductConsumer } from "./../../Context.js";

export default class hourly extends Component {
  render() {
    const { time, icon, temperature } = this.props.hour;
    return (
      <ProductConsumer>
        {value => (
          <div>
            <h5 className="hour-time">{value.convertUnixHour(time)} h</h5>
            <img
              id="hourly-icon"
              src={value.getForecastIcon(icon)}
              alt="no picture"
            />
            <h5 className="temp-celsius">{value.toCelsius(temperature)} C</h5>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
