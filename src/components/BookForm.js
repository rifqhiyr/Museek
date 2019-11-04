import React, { Component } from "react";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
import { addEvent, getEventCustomer } from "../store/actions/eventAction";
import swal from "sweetalert";
import NewsLetter from "./NewsLetter";

import "../assets/scss/BookForm.scss";

class BookForm extends Component {
  state = {
    dateEvent: "",
    duration: "",
    location: "",
    category: "Birthday",
    validationError: "",
    musicianId: this.props.location.state.musicianId,
    eventList: ["Birthday", "Wedding", "Engagement", "Percussion", "Reunion"]
  };

  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    if (localStorage.token == null) {
      return swal(
        "MuSeek says:",
        "Please login as a customer before adding event",
        "info"
      );
    } else {
      if (this.props.profile.role === "musician") {
        return swal(
          "MuSeek says:",
          "Please login as a customer before adding event",
          "info"
        );
      } else {
        const formData = {
          dateEvent: this.state.dateEvent,
          duration: this.state.duration,
          location: this.state.location,
          category: this.state.category,
          musicianId: this.state.musicianId
        };
        this.props.addEvent(formData);
        swal("MuSeek says:", "Event booking has been saved", "success");
        await this.props.getEventCustomer(); //biar setelah pindah halaman, langsung reload
        this.props.history.push(`/bookedlist=${this.props.profile._id}`);
      }
    }
  };

  render() {
    console.log(this.props.location);

    const dataList = this.state.eventList.map(event => {
      return (
        <option key={event} value={event}>
          {event}
        </option>
      );
    });
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
                      <div className="form-group col-md-12">
                        <label style={{ color: "black" }} htmlFor="inputState">
                          Category
                        </label>
                        <select
                          id="inputState"
                          className="form-control"
                          value={this.state.category}
                          onChange={e =>
                            this.setState({
                              category: e.target.value,
                              validationError:
                                e.target.value === ""
                                  ? "You must select event"
                                  : ""
                            })
                          }
                        >
                          {dataList}
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
                          name="dateEvent"
                          value={this.state.dateEvent}
                          onChange={this.handleChange}
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
                          name="duration"
                          value={this.state.duration}
                          onChange={this.handleChange}
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
                          name="duration"
                          value={this.state.duration}
                          onChange={this.handleChange}
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
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
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
                      our <span className="r-book-span">privacy policy</span>
                    </label>
                  </div>

                  <div className="r-book-btn">
                    <button
                      type="submit"
                      className="btn tombol"
                      onClick={this.handleSubmit}
                    >
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile, addEvent, getEventCustomer }
)(BookForm);
