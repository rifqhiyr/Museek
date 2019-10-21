import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/scss/Genre.scss";

export default class Genre extends Component {
  render() {
    return (
      <div className="container-fluid genre">
        <div className="container-fluid p-0 service-genre">
          <div className="row no-gutters genre-row">
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/graduation.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/wedding.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/birthday.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/summer.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/party.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4 genre-col">
              <Link to="/musicianpage">
                <img
                  className="img-fluid"
                  src={require("../assets/images/summer.jpg")}
                  alt=""
                />
                <div className="service-genre-caption">
                  <h1 className="service-category">Genre</h1>
                  <p className="service-category-name">Dangdut</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
