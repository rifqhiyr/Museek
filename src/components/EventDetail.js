import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventDetail } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/EventDetail.scss";
import Rupiah from "./Rupiah";

class EventDetail extends Component {
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
        <div className="detail">
          <div
            className="row detail-row "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-12 col-lg-6 detail-col-right ">
              <div className="detail-content detail main-footer">
                <h1 className="h-1">EVENT DETAIL</h1>

                <div className="detail-div--content">
                  <p className="detail-p">Status : {status}</p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">Event Category : {category}</p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    Date Event : {new Date(dateEvent).toLocaleString()}
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">Duration : {duration} hours</p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">Event Location : {location}</p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    Total Price : Rp {musicianId && Rupiah(musicianId.price)},00
                  </p>
                </div>
                <div className="detail-div--content">
                  {this.props.profile.role === "customer" && (
                    <Link to={`/detail/${musicianId && musicianId._id}`}>
                      <p className="detail-p">Musician Detail</p>{" "}
                    </Link>
                  )}
                </div>
                <div className="dstyle-btn-group btn-end">
                  <Link
                    to={
                      this.props.profile.role === "customer"
                        ? `/bookedlist=${customerId && customerId._id}`
                        : `/eventschedule=${musicianId && musicianId._id}`
                    }
                    className="btn dstyle-btn btn-profile"
                    style={{ width: "200px" }}
                  >
                    BACK TO BOOKED LIST
                  </Link>
                </div>
              </div>
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
)(withRouter(EventDetail));
