import React, { Component } from "react";
import "./DailyTemperature.css";

export default class DailyTemperature extends Component {
  render() {
    return (
      <div className="current-temperatures">
        <h2 className="currDate">10.07.2019.</h2>
        <hr></hr>
        <p>This is daily temperature component</p>
      </div>
    );
  }
}
