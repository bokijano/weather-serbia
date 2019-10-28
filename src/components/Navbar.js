import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { displayDetails } = this.props;
    return (
      <div className="navbar">
        <h2>Weather Forecast for Serbia</h2>
        <div className="details">
          <button className="detailsBtn">long-term forecast</button>
          <div className="detailsContent">
            <Link onClick={displayDetails} to="/detailsPirot">
              Pirot
            </Link>
            <Link onClick={displayDetails} to="/detailsNis">
              Niš
            </Link>
            <Link onClick={displayDetails} to="/detailsUzice">
              Užice
            </Link>
            <Link onClick={displayDetails} to="/detailsKragujevac">
              Kragujevac
            </Link>
            <Link onClick={displayDetails} to="/detailsZajecar">
              Zaječar
            </Link>
            <Link onClick={displayDetails} to="/detailsPozarevac">
              Požarevac
            </Link>
            <Link onClick={displayDetails} to="/detailsBeograd">
              Beograd
            </Link>
            <Link onClick={displayDetails} to="/detailsNoviSad">
              Novi Sad
            </Link>
            <Link onClick={displayDetails} to="/detailsSubotica">
              Subotica
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
