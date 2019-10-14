import React, { Component } from "react";
import "../assets/scss/Footer.scss";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="jumbotron jumbotron-fluid main-footer">
        <div className="container footer-box">
          <div className="row footer-row">
            <div className="col-10 col-lg-3 footer-col">
              <img
                className="footer-logo-1"
                src={require("../assets/images/logo.png")}
                alt="logo"
              />
            </div>

            <div className="col-10 col-lg-3 footer-col">
              <h4 className="footer-title">Tentang Museek</h4>
              <ul className="list-unstyled">
                <li className="footer-li">
                  <Link to="/">About</Link>
                </li>
                <li className="footer-li">
                  <Link to="/">Service</Link>
                </li>
                <li className="footer-li">
                  <Link to="/">Genre </Link>
                </li>
                <li className="footer-li">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-10 col-lg-3 footer-col">
              <h4 className="footer-title">Ikuti kami</h4>
              <ul className="list-unstyled">
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-instagram"></i>
                  </span>
                  <a href="a">Instagram</a>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-facebook-square"></i>
                  </span>
                  <a href="a">facebook</a>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-twitter-square"></i>
                  </span>
                  <a href="a">twitter</a>
                </li>
                <li className="footer-li">
                  <span className="footer-sosmed">
                    <i class="fa fa-youtube"></i>
                  </span>
                  <a href="a">youtube</a>
                </li>
              </ul>
            </div>

            <div className="col-10 col-lg-3 footer-col">
              <h4 className="footer-title">Unduh</h4>
              <img
                className="footer-logo"
                src={require("../assets/images/gplay.png")}
                alt=""
              />
              <img
                className="footer-logo"
                src={require("../assets/images/appstore.png")}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-xs-center ">
            &copy;{new Date().getFullYear()} Museek - All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
