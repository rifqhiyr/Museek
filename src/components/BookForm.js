import React, { Component } from "react";
import "../assets/scss/BookForm.scss";

class BookForm extends Component {
  render() {
    return (
      <div className="book-wrapper">
        <div className="container">
          <div className="r-book-wrapper">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-7 p-0">
                <div className="r-col-left">
                  <h2 className="r-book-title">Add Event</h2>
                  <form className="r-form">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Event Category
                        </label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose event...</option>
                          <option>Wedding</option>
                          <option>Birthday</option>
                          <option>Engagement</option>
                          <option>Percussion</option>
                          <option>Reunion</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Category
                        </label>
                        <select id="inputState" className="form-control">
                          <option selected>choose Category...</option>
                          <option>Jazz</option>
                          <option>Rock</option>
                          <option>Dangdut</option>
                          <option>Classical</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Event date
                        </label>
                        <br />
                        <input
                          id="inputState"
                          className="form-control"
                          type="date"
                        />
                      </div>

                      <div className="form-group col-md-3">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Booking Time
                        </label>
                        <input
                          id="inputState"
                          className="form-control"
                          type="time"
                        />
                      </div>

                      <div className="form-group col-md-3">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          until
                        </label>
                        <input
                          id="inputState"
                          className="form-control"
                          type="time"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ color: "black" }} htmlFor="inputAddress2">
                        Event Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress2"
                        placeholder="Apartment, studio, or floor"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputCity">
                          City
                        </label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Province
                        </label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <div className="r-right">
                    <div className="r-right-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label
                        style={{ color: "black" }}
                        className="form-check-label"
                        htmlFor="gridCheck"
                      >
                        means you're okay with our{" "}
                        <span className="r-book-span">terms of service </span>{" "}
                        and our{" "}
                        <span className="r-book-span">Privacy policy</span>
                      </label>
                    </div>

                    <div className="r-book-btn">
                      <button type="submit" className="btn tombol tombol-book">
                        Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5 p-0">
                <div className="r-col-right">
                  <div className="r-right-checkbox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label
                      style={{ color: "white" }}
                      className="form-check-label"
                      htmlFor="gridCheck"
                    >
                      means you're okay with our{" "}
                      <span className="r-book-span">terms of service </span> and
                      our <span className="r-book-span">Privacy policy</span>
                    </label>
                  </div>

                  <div className="r-book-btn">
                    <button type="submit" className="btn tombol">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookForm;
