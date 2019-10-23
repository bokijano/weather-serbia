import React, { Component } from "react";
import "./LongTermTemperature.css";

export default class LongTermTemperature extends Component {
  async getTemperatures(lat, long, arr, icons) {
    try {
      const {
        proxy,
        API_KEY,
        cities,
        getIcon,
        convertUnix,
        toCelsius,
        forecastItem
      } = this.props;

      const api = `${proxy}https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`;
      const data = await fetch(api);
      const jsonData = await data.json();
      console.log(jsonData);

      //forecast for tomorow
      const time1 = jsonData.daily.data[1].time;
      document.querySelector(".dayFirst").textContent = convertUnix(time1);
      const minTemp = toCelsius(jsonData.daily.data[1].temperatureMin);
      const maxTemp = toCelsius(jsonData.daily.data[1].temperatureMax);
      const icon1 = jsonData.daily.data[1].icon;
      console.log(icon1);
      let iconImg1 = this.getForecastIcon(icon1);

      //forecast for day after tomorow
      const time2 = jsonData.daily.data[2].time;
      document.querySelector(".daySecond").textContent = convertUnix(time2);
      const minTemp2 = toCelsius(jsonData.daily.data[2].temperatureMin);
      const maxTemp2 = toCelsius(jsonData.daily.data[2].temperatureMax);
      const icon2 = jsonData.daily.data[2].icon;
      let iconImg2 = this.getForecastIcon(icon2);

      //forecast for second day after tomorow
      const time3 = jsonData.daily.data[3].time;
      document.querySelector(".dayThird").textContent = convertUnix(time3);
      const minTemp3 = toCelsius(jsonData.daily.data[3].temperatureMin);
      const maxTemp3 = toCelsius(jsonData.daily.data[3].temperatureMax);
      const icon3 = jsonData.daily.data[3].icon;
      let iconImg3 = this.getForecastIcon(icon3);

      const cityName = cities[arr];

      let result = `
        <div class="long-city">
          <h4 class="city-name">${cityName}</h4>

          <div class="longForecast">
           <hr>
           <div class="firstDay">
             <img class="first" id="temp-icon" src=${iconImg1} alt="no picture" />
             <div class="forecastFirst">
               <h5 class="maxTemp">
                 <span id="max">${maxTemp} C</span>
                 <span id="text">max</span> 
               </h5>
               <h5 class="minTemp">
                 <span id="min">${minTemp} C</span>
                 <span id="minText">min</span>                   
               </h5>
             </div>
           </div>
           <hr>

           <div class="secondDay">
           <img id="temp-icon" src=${iconImg2} alt="no picture" />
           <div class="forecastFirst">
             <h5 class="maxTemp">
               <span id="max">${maxTemp2} C</span>
               <span id="text">max</span> 
             </h5>
             <h5 class="minTemp">
               <span id="min">${minTemp2} C</span>
               <span id="minText">min</span>                   
             </h5>
           </div>
         </div>
         <hr>

         <div class="thirdDay">
         <img id="temp-icon" src=${iconImg3} alt="no picture" />
         <div class="forecastFirst">
           <h5 class="maxTemp">
             <span id="max">${maxTemp3} C</span>
             <span id="text">max</span> 
           </h5>
           <h5 class="minTemp">
             <span id="min">${minTemp3} C</span>
             <span id="minText">min</span>                   
           </h5>
         </div>
       </div>
       <hr>
      </div>
    </div>
      `;

      document.querySelector(".long-temperature").innerHTML += result;

      let icons = document.getElementById("temp-icon");
      console.log(icons);
      getIcon(icon1, icons);
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getTemperatures(43.15306, 22.58611, 0);
    this.getTemperatures(43.32472, 21.90333, 1);
    this.getTemperatures(43.85861, 19.84878, 2);
    this.getTemperatures(44.01667, 20.91667, 3);
    this.getTemperatures(43.90358, 22.26405, 4);
    this.getTemperatures(44.62133, 21.18782, 5);
    this.getTemperatures(44.80401, 20.46513, 6);
    this.getTemperatures(45.25167, 19.83694, 7);
    this.getTemperatures(46.1, 19.66667, 8);
  }
  getForecastIcon = icon => {
    switch (icon) {
      case "clear-day":
        return this.props.forecastItem[0];
        break;
      case "clear-night":
        return this.props.forecastItem[2];
        break;
      case "partly-cloudy-day":
        return this.props.forecastItem[1];
        break;
      case "partly-cloudy-night":
        return this.props.forecastItem[3];
        break;
      case "cloudy":
        return this.props.forecastItem[4];
        break;
      case "rain":
        return this.props.forecastItem[9];
        break;
      case "sleet":
        return this.props.forecastItem[6];
        break;
      case "snow":
        return this.props.forecastItem[7];
        break;
      case "wind":
        return this.props.forecastItem[8];
        break;
      case "fog":
        return this.props.forecastItem[5];
        break;
    }
  };
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
      </div>
    );
  }
}
