import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getEventDetail } from "../store/actions/eventAction";
import { getProfile } from "../store/actions/dataAction";
import "../assets/scss/EventDetail.scss";
import Rupiah from "./Rupiah";
import NewsLetter from "./NewsLetter";
// import Background from "../assets/images/envelop.png";

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
      <div>
        <div className="container">
          <div className="detail-event">
            <div
              className="row detail-event-row "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-12 col-lg-6 detail-event-col-right ">
                <div>
                  <div className="detail-event-content detail-event main-footer">
                    <h1 className="h-1">event detail</h1>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">Status : {status}</p>
                    </div>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">
                        Event Category : {category}
                      </p>
                    </div>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">
                        Date Event : {new Date(dateEvent).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">
                        Duration : {duration} hours
                      </p>
                    </div>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">
                        Event Location :{" "}
                        {location && location.split(",").join(", ")}
                      </p>
                    </div>
                    <div className="detail-event-div--content">
                      <p className="detail-event-p">
                        Total Price : Rp{" "}
                        {musicianId && Rupiah(musicianId.price)}
                        ,00
                      </p>
                    </div>
                    <div className="detail-event-div--content">
                      {this.props.profile.role === "customer" && (
                        <Link
                          to={`/detail-event/${musicianId && musicianId._id}`}
                        >
                          <p className="detail-event-p">Musician Detail</p>{" "}
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
        </div>
        <NewsLetter />
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
