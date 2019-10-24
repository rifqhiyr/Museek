import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/Header.scss";
import { logout } from "../store/actions/authAction";

class Header extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.props.logout();
    alert("Thank You for Coming MuSeek");
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
                      to="/about"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      About<span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/musicianpage"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      Musician List<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
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
                      to="/about"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      About<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/musicianpage"
                      className="nav-link navigasi-a"
                      href="#tentangkami"
                    >
                      Musician List<span className="sr-only">(current)</span>
                    </Link>
                  </li>

                  {this.props.profile.role === "customer" ? (
                    <li className="nav-item Active dropdown">
                      <Link
                        class="nav-link dropdown-toggle navigasi-b"
                        to="/pageprofile"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        see profile
                      </Link>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="navbarDropdown"
                      >
                        <Link class="dropdown-item" to="/pageprofile">
                          my profile
                        </Link>
                        <Link
                          class="dropdown-item"
                          to={`/bookedlist=${this.props.profile._id}`}
                        >
                          booked list
                        </Link>

                        {/* <div class="dropdown-divider"></div> */}
                        <Link
                          class="dropdown-item"
                          to={`/invoice=${this.props.profile._id}`}
                        >
                          invoice
                        </Link>
                        <Link class="dropdown-item" to="/favorite">
                          favorite
                        </Link>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <Link
                        to="/pageprofile"
                        className="nav-link navigasi-a"
                        href="#tentangkami"
                      >
                        profile<span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  )}
                </ul>
                <Link to="/">
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
    isAuthenticated: state.authReducer.isAuthenticated,
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { logout, getProfile }
)(withRouter(Header));
