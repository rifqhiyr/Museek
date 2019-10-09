import React, { Component } from "react";
import SideBar from "./SideBar";
import CategoriesFilter from "./CategoriesFilter";
import Filter from "./Filter";
import MusicianList from "./MusicianList";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

export default class MusicianPage extends Component {
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
          <CategoriesFilter />
          <div className="dstyle_product_area section-padding-100">
            <div className="container-fluid">
              <Filter />
              <MusicianList />
              <Pagination />
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}
