import React, { Component } from "react";
import "./LongTermTemperature.css";

export default class LongTermTemperature extends Component {
  render() {
    return (
      <div className="long-temperature">
        <div className="long-temp">
          <hr></hr>
          <h4 className="dayFirst">27</h4>
          <hr></hr>
          <h4 className="daySecond">28</h4>
          <hr></hr>
          <h4 className="dayThird">28</h4>
          <hr></hr>
        </div>
        <p>This is long term temperature component</p>
      </div>
    );
  }
}
