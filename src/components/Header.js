import React, { Component } from "react";
import "../assets/scss/Header.scss";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";

class Header extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    this.props.logout();
    alert("bye bye bitches");
    this.props.history.push("/logout");
  };

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <div className="bg-color-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <Link to="/">
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
                  <li className="nav-item Active">
                    <Link
                      to="/homepage"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      About<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      Detail<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/signup">
                  <button className="btn btn-header">sign up</button>
                </Link>
                <Link to="/signin">
                  <button className="btn btn-header">sign in</button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-color-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg ">
              <Link to="/">
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
                  <li className="nav-item Active">
                    <Link
                      to="/homepage"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      About<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      Detail<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
                <Link to="/logout">
                  <button
                    onClick={this.handleSubmit}
                    className="btn btn-header"
                  >
                    log out
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(Header));
