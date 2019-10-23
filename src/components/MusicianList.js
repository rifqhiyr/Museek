import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/dataAction";
import Picture from "./Picture";
import Rupiah from "./Rupiah";
import "../assets/scss/MusicianList.scss";

class MusicianList extends Component {
  // componentDidMount() {
  //   this.props.getMusician();
  // }
  render() {
    const { currentPage, cardsPerPage } = this.props;

    //logic for displaying current cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = this.props.musicians.slice(
      indexOfFirstCard,
      indexOfLastCard
    );

    const listMusician = currentCards.map(musician => {
      return (
        <div className="col-12 col-md-4 col-xl-4">
          <div className="single-product-wrapper" key={musician._id}>
            <div className="product-img">
              <Picture picture={musician} />
            </div>

            <div className="ratings-cart ratings">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="circle left"></i> <i className="circle right"></i>
            </div>

            <div className="product-description d-flex align-items-center justify-content-between">
              <div className="product-meta-data">
                <div className="line" />
                <Link to="/detail">
                  <h6>{musician.name}</h6>
                  <h6>
                    Start from Rp {musician.price && Rupiah(musician.price)},00/
                    Event
                  </h6>
                  {/* {musician.skill.map((skill, index) => {
                    return <h6 key="index">{(index ? "," : "") + skill}</h6>;
                  })} */}
                  <h6>
                    {musician.skill
                      .toString()
                      .split(",")
                      .join(", ")}
                  </h6>
                </Link>
              </div>

              <div className="ratings-cart text-right">
                <div className="cart">
                  <Link
                    to={{
                      pathname: "/bookingform",
                      state: [{ musicianId: musician._id }]
                    }}
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add Event"
                  >
                    <img src="img/core-img/cart.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row1">{listMusician}</div>;
  }
}

const mapStateToProps = state => {
  return {
    musicians: state.listMusicianReducer.musicians,
    profile: state.profileReducer.profile,
    event: state.eventReducer.event
  };
};

// export default connect(
//   mapStateToProps,
//   { getProfile, getMusician, getFav, addFav, getEventCustomer }
// )(withRouter(MusicianList));
