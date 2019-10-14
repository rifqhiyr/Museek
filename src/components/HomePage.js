import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/HomePage.scss";
import SideBar from "./SideBar";
import NewsLetter from "./NewsLetter";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="search-wrapper section-padding-100">
          <div className="search-close">
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="search-content">
                  <form action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Type your keyword..."
                    />
                    <button type="submit">
                      <img src="img/core-img/search.png" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content-wrapper d-flex clearfix">
          <SideBar />
          <div className="products-catagories-area clearfix">
            <div className="dstyle-pro-catagory clearfix flex-home">
              <div className="single-products-catagory clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>Pilihan musisi dengan berbaagai genre</p>
                    <h4 className="h4">Pop</h4>
                  </div>
                </Link>
              </div>
              <div className="single-products-catagory clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>Pilihan musisi dengan berbagai genre</p>
                    <h4 className="h4">Dangdut Digoyang</h4>
                  </div>
                </Link>
              </div>
              <div className="single-products-catagory event clearfix">
                <Link to="shop.html">
                  <img
                    src={require("../assets/images/logo.png")}
                    className="img-home"
                    alt=""
                  />
                  <div className="hover-content">
                    <div className="line" />
                    <p>Apapun acaranya, museek in aja!</p>
                    <h4 className="h4">Pesta Ulang Tahun</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}
