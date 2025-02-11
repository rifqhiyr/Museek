import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getEventCustomer, deleteEvent } from "../store/actions/eventAction";
import Rupiah from "./Rupiah";
import "../assets/scss/BookedList.scss";
import NewsLetter from "./NewsLetter";

class BookingHistory extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getEventCustomer(id);
  }

  handleDelete = async id => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    console.log(id);
    await this.props.deleteEvent(id);

    const idi = this.props.match.params.id;
    console.log(idi);
    this.props.getEventCustomer(idi);
  };

  render() {
    const bookedList = this.props.event.map(myevent => {
      return (
        <tr>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>{myevent.musicianId.name}</span>
          </td>
          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{myevent.category}</span>
          </td>
          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{new Date(myevent.dateEvent).toLocaleDateString()}</span>
          </td>
          <td className="font-cart wider" style={{ textAlign: "center" }}>
            <span>
              Rp {myevent.musicianId.price && Rupiah(myevent.musicianId.price)}
              ,00
            </span>
          </td>
          <td className="font-cart" style={{ textAlign: "center" }}>
            <span>{myevent.status}</span>
          </td>
          <td className="font-cart">
            <span className="button-action">
              {" "}
              <div className="dstyle-btn-group">
                <Link
                  to={`/eventdetail/${myevent._id}`}
                  className="button-edit"
                >
                  <i class="fa fa-info"></i>
                </Link>
              </div>
              <div className="dstyle-btn-group">
                <Link to={`/eventedit/${myevent._id}`} className="button-edit">
                  <i className="fa fa-edit"></i>
                </Link>
              </div>
              <div className="dstyle-btn-group">
                <Link to="#" className="button-edit">
                  <i
                    className="fa fa-trash"
                    onClick={() => this.handleDelete(myevent._id)}
                  ></i>
                </Link>
              </div>
            </span>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <span>
          <div className="main-content-wrapper d-flex clearfix">
            <div className="cart-table-area bookedlist">
              <div className="container-fluid">
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-12 col-lg-12">
                    <div className="cart-title">
                      <h2 style={{ textAlign: "center" }}>BOOKING HISTORY</h2>
                    </div>
                    <div
                      className="cart-table clearfix"
                      style={{ marginTop: "50px" }}
                    >
                      <table className="table table-responsive">
                        <thead>
                          <tr>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Musician
                            </th>{" "}
                            <th style={{ textAlign: "center" }}>Event Name</th>
                            <th style={{ textAlign: "center" }}>Event Date</th>
                            <th
                              style={{ textAlign: "center" }}
                              className="wider"
                            >
                              Total Price
                            </th>
                            {/* <th style={{ textAlign: "center" }}>Duration</th> */}
                            <th style={{ textAlign: "center" }}>Status</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>{bookedList}</tbody>
                      </table>
                    </div>
                    <div className="dstyle-btn-group button-right mt-100">
                      <Link
                        to={`/pageprofile`}
                        className="btn dstyle-btn btn-profile"
                      >
                        BACK TO PROFILE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NewsLetter />
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.eventReducer.event
  };
};

export default connect(
  mapStateToProps,
  { getEventCustomer, deleteEvent }
)(BookingHistory);
