import React, { Component } from "react";
import "../assets/scss/Header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="bg-color-nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <Link to="/homepage">
              <div className="navbar-brand" href="#brand">
                <img
                  className="logo"
                  src={require("../assets/images/logo.png")}
                  alt=""
                />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link
                    to="/About"
                    className="nav-link navigasi-a"
                    href="#tentangkami"
                  >
                    About<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Logout"
                    className="nav-link navigasi-a"
                    href="#tentangkami"
                  >
                    Logout<span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
