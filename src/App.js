import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./Home.js";
import { Route, Switch } from "react-router-dom";
import DetailsPirot from "./components/Detail Forecast/detailsPirot.js";
import DetailsNis from "./components/Detail Forecast/detailsNis.js";
import DetailsUzice from "./components/Detail Forecast/detailsUzice.js";
import DetailsKragujevac from "./components/Detail Forecast/detailsKragujevac.js";
import DetailsZajecar from "./components/Detail Forecast/detailsZajecar.js";
import DetailsPozarevac from "./components/Detail Forecast/detailsPozarevac.js";
import DetailsBeograd from "./components/Detail Forecast/detailsBeograd.js";
import DetailsNoviSad from "./components/Detail Forecast/detailsNoviSad.js";
import DetailsSubotica from "./components/Detail Forecast/detailsSubotica.js";

export default class App1 extends Component {
  state = {
    displayHomePage: true
  };
  displayDetails = () => {
    this.setState({
      displayHomePage: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar displayDetails={this.displayDetails} />

        {this.state.displayHomePage ? (
          <Home />
        ) : (
          <Switch>
            <Route exath path="/home" component={Home} />
            <Route path="/detailsPirot" component={DetailsPirot} />
            <Route path="/detailsNis" component={DetailsNis} />
            <Route path="/detailsUzice" component={DetailsUzice} />
            <Route path="/detailsKragujevac" component={DetailsKragujevac} />
            <Route path="/detailsZajecar" component={DetailsZajecar} />
            <Route path="/detailsPozarevac" component={DetailsPozarevac} />
            <Route path="/detailsBeograd" component={DetailsBeograd} />
            <Route path="/detailsNoviSad" component={DetailsNoviSad} />
            <Route path="/detailsSubotica" component={DetailsSubotica} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}
