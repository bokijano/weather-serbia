import React, { Component } from "react";
import "./details.css";
import Hourly from "./hourly.js";
import Daily from "./daily.js";
import { ProductConsumer } from "../../Context.js";
import { Link } from "react-router-dom";

export default class detailsPirot extends Component {
  state = {
    proxy: "http://cors-anywhere.herokuapp.com/",
    API_KEY: "fb4c116f915c61742654d62a921fffa2",
    temperature: "",
    summary: "",
    icon: "",
    temperatureMin: "",
    temperatureMax: "",
    time: "",
    hourlyTemp: [],
    dailyTemp: []
  };
  async getTemperatures() {
    try {
      const api = `${this.state.proxy}https://api.darksky.net/forecast/${this.state.API_KEY}/43.90358, 22.26405`;
      const data = await fetch(api);
      const jsonData = await data.json();

      const { temperature, summary, icon, time } = jsonData.currently;
      const { temperatureMin, temperatureMax } = jsonData.daily.data[0];

      // next 5 hours temperatures 
      let hour1 = jsonData.hourly.data[0];
      let hour2 = jsonData.hourly.data[1];
      let hour3 = jsonData.hourly.data[2];
      let hour4 = jsonData.hourly.data[3];
      let hour5 = jsonData.hourly.data[4];


      let hourlyTemp = [
        {
          id: 1,
          time: hour1.time,
          icon: hour1.icon,
          temperature: hour1.temperature
        },
        {
          id: 2,
          time: hour2.time,
          icon: hour2.icon,
          temperature: hour2.temperature
        },
        {
          id: 3,
          time: hour3.time,
          icon: hour3.icon,
          temperature: hour3.temperature
        },
        {
          id: 4,
          time: hour4.time,
          icon: hour4.icon,
          temperature: hour4.temperature
        },
        {
          id: 5,
          time: hour5.time,
          icon: hour5.icon,
          temperature: hour5.temperature
        }
      ];
      
      // next 5 days temperatures 
      let day1 = jsonData.daily.data[1];
      let day2 = jsonData.daily.data[2];
      let day3 = jsonData.daily.data[3];
      let day4 = jsonData.daily.data[4];
      let day5 = jsonData.daily.data[5];


      let dailyTemp = [
        {
          id: 1,
          time: day1.time,
          icon: day1.icon,
          temperatureMin: day1.temperatureMin,
          temperatureMax: day1.temperatureMax,
          summary: day1.summary
        },
        {
          id: 2,
          time: day2.time,
          icon: day2.icon,
          temperatureMin: day2.temperatureMin,
          temperatureMax: day2.temperatureMax,
          summary: day2.summary
        },
        {
          id: 3,
          time: day3.time,
          icon: day3.icon,
          temperatureMin: day3.temperatureMin,
          temperatureMax: day3.temperatureMax,
          summary: day3.summary
        },
        {
          id: 4,
          time: day4.time,
          icon: day4.icon,
          temperatureMin: day4.temperatureMin,
          temperatureMax: day1.temperatureMax,
          summary: day4.summary
        },
        {
          id: 5,
          time: day5.time,
          icon: day5.icon,
          temperatureMin: day5.temperatureMin,
          temperatureMax: day5.temperatureMax,
          summary: day5.summary
        }
      ];

      this.setState({
        temperature: temperature,
        summary: summary,
        icon: icon,
        temperatureMin: temperatureMin,
        temperatureMax: temperatureMax,
        time: time,
        hourlyTemp: hourlyTemp,
        dailyTemp: dailyTemp
      });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getTemperatures();
  }
  render() {
    const {
      summary,
      temperature,
      icon,
      temperatureMax,
      temperatureMin,
      time,
      hourlyTemp,
      dailyTemp
    } = this.state;
    return (
      <ProductConsumer>
        {value => (
          <div className="detailForecast">
            <h2 className="dateCurrently">
              {value.cities[4]}, {value.convertUnix(time)}
            </h2>

            <hr />
            <div className="daily">
              <div className="summ">
                <img id="iconCurr" src={value.getForecastIcon(icon)} />
                <h4 id="summ-text">{summary}</h4>
              </div>
              <h5 className="currentlyTemp">
                {value.toCelsius(temperature)} C
              </h5>
              <h5 className="maxTemp">
                <span id="max">{value.toCelsius(temperatureMax)} C</span>
                <span id="text">MAX</span>
              </h5>
              <h5 className="minTemp">
                <span id="min">{value.toCelsius(temperatureMin)} C</span>
                <span id="text">MIN</span>
              </h5>
            </div>

            <div className="hourlyTemp">
              {hourlyTemp.map(hour => (
                <Hourly key={hour.id} hour={hour} />
              ))}
            </div>

            <div className="dailyTemp">
            {dailyTemp.map(day => (
                <Daily key={day.id} day={day} />
              ))}              
            </div>

            <Link to="/Home">back to main menu</Link>
          </div>
        )}
      </ProductConsumer>
    );
  }
}
