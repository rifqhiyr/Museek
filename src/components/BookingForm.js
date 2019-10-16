import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/BookingForm.scss";
import SideBar from "./SideBar";
import NewsLetter from "./NewsLetter";

export default class BookingForm extends Component {
  state = {
    events: [],
    lists: ["Birthday", "Wedding", "Engagement", "Percussion", "Reunion"]
  };

  addevent = e => {
    e.preventDefault();
    this.setState({
      events: [...this.state.events, e.target.value]
    });

    if (this.state.events.includes(e.target.value) === true) {
      this.setState({
        events: this.state.events.filter(event => event !== e.target.value)
      });
    }
  };

  render() {
    console.log(this.state.events);
    return (
      <div>
        {" "}
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
          <div className="cart-table-area ">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-1"></div>
                <div className="col-12 col-lg-8">
                  <div className="checkout_details_area mt-100 clearfix">
                    <div className="cart-title">
                      <h2>ADD EVENT</h2>
                    </div>
                    <form action="#" method="post">
                      <div className="row mt-50">
                        <div className="col-12 mb-3">
                          EVENT CATEGORIES:
                          <input
                            type="text"
                            className="form-control mb-3 mt-10"
                            id="event_categories"
                            placeholder="PICK EVENT CATEGORIES"
                            value={this.state.events
                              .toString()
                              .split(",")
                              .join(", ")}
                            onClick={this.addevent}
                          />
                        </div>
                        <div className="skill-btn-box">
                          {this.state.lists.map(list => {
                            return (
                              <input
                                className="btn dstyle-btn btn-profile"
                                type="button"
                                value={list}
                                onClick={this.addevent}
                                style={{
                                  marginTop: "12px"
                                }}
                              />
                            );
                          })}
                        </div>
                        <div
                          className="col-12 mb-3"
                          style={{ marginTop: "50px" }}
                        >
                          EVENT DATE:
                          <input
                            type="date"
                            className="form-control mb-3 mt-10"
                            id="event_date"
                            placeholder="EVENT DATE"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          DURATION:
                          <input
                            type="number"
                            className="form-control mb-3 mt-10"
                            id="duration"
                            placeholder="DURATION"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          LOCATION:
                          <input
                            type="text"
                            className="form-control mb-3 mt-10"
                            id="location"
                            placeholder="LOCATION"
                          />
                        </div>
                        <div className="col-6 mb-3 mt-30 mb-100 cart-btn"></div>
                        <div className="col-6 mb-3 mt-30 mb-100 cart-btn">
                          <Link
                            to="/bookingform"
                            className="btn dstyle-btn btn-profile w-100"
                          >
                            ADD EVENT
                          </Link>
                        </div>
                      </div>
                    </form>
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
