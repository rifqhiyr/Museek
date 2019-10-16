import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Filter.scss";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="product-topbar d-xl-flex align-items-end justify-content-between">
            <div className="total-products">
              <p>{`${this.props.count} musicians found`}</p>
              <div className="view d-flex">
                <Link to="#">
                  <i className="fa fa-th-large" aria-hidden="true" />
                </Link>
                <Link to="#">
                  <i className="fa fa-bars" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="product-sorting d-flex">
              <div className="sort-by-date d-flex align-items-center mr-15">
                <p>Sort by</p>
                <form action="#" method="get">
                  <select
                    value={this.props.sort}
                    onChange={this.props.handleSortChange}
                  >
                    <option value="">Select</option>
                    <option value="lowestprice">Lowest to highest</option>
                    <option value="highestprice">Highest to lowest</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
