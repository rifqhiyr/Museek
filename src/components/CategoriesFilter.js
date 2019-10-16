import React, { Component } from "react";
import "../assets/scss/CategoriesFilter.scss";

export default class Categories extends Component {
  render() {
    return (
      <div className="shop_sidebar_area">
        {/* <div className="widget catagory mb-50">
          <h6 className="widget-title mb-30">Event Catagories</h6>

          <div className="catagories-menu">
            <ul>
              <li>
                <Link to="#">Birthday</Link>
              </li>
              <li>
                <Link to="#">Wedding</Link>
              </li>
              <li>
                <Link to="#">Engagement</Link>
              </li>
              <li>
                <Link to="#">Reunion</Link>
              </li>
              <li>
                <Link to="#">All</Link>
              </li>
            </ul>
          </div>
        </div> */}

        <div className="widget brands mb-50">
          <h6 className="widget-title mb-30">Musical Genres</h6>
          <div className="widget-desc">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Jazz</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Dangdut</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Musical Theatre</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Rock</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Hip Hop</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Classical</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Country</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Heavy Metal</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
              />
              <label className="form-check-label">Pop</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
