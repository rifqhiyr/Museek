import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventDetail } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/EventDetail.scss";
import Rupiah from "./Rupiah";

import "../assets/scss/DetailEvent.scss";

export class DetailEvent extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    await this.props.getEventDetail(id);
    this.props.getProfile();
  }

  render() {
    const {
      status,
      category,
      dateEvent,
      duration,
      location,
      musicianId,
      customerId
    } = this.props.event;
    return (
      <div className="container">
        <div className="r-detail-event">
          <div className="de-wrapper">
            <div className="de-content">
              <header className="de-header">Event Detail</header>
              <h5 className="de-h5">
                <span className="de-span">status</span> : {status}
              </h5>
              <h5 className="de-h5">
                <span className="de-span">Category</span> : {category}
              </h5>
              <h5 className="de-h5">
                <span className="de-span">Date</span> :{" "}
                {new Date(dateEvent).toLocaleDateString()}
              </h5>
              <h5 className="de-h5">
                <span className="de-span">Duration</span> : {duration} hours
              </h5>
              <h5 className="de-h5">
                <span className="de-span">Location</span> :{" "}
                {location && location.split(",").join(", ")}
              </h5>
              <h5 className="de-h5">
                <span className="de-span">Total price</span> : Rp{" "}
                {musicianId && Rupiah(musicianId.price)}
                ,00
              </h5>
            </div>
            <div className="btn-de">
              {this.props.profile.role === "customer" && (
                <Link to={`/detail-event/${musicianId && musicianId._id}`}>
                  <button className="btn tombol">Musician Detail</button>
                </Link>
              )}
              <Link
                to={
                  this.props.profile.role === "customer"
                    ? `/bookedlist=${customerId && customerId._id}`
                    : `/eventschedule=${musicianId && musicianId._id}`
                }
              >
                <button className="btn tombol">back to booklist</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.eventReducer.eventById,
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getEventDetail, getProfile }
)(withRouter(DetailEvent));
