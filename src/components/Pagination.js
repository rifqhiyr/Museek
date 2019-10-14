import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Pagination.scss";

export default class Pagination extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <nav aria-label="navigation">
            <ul className="pagination justify-content-end mt-50">
              <li className="page-item">
                <Link className="page-link" to="#">
                  01.
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  02.
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  03.
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  04.
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
