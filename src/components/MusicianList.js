import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import {
  getProfile,
  getMusician,
  getFav,
  addFav
} from "../store/actions/dataAction";
import Picture from "./Picture";
import Rupiah from "./Rupiah";
import "../assets/scss/MusicianList.scss";

class MusicianList extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  handleSubmit = async e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    if (localStorage.token == null) {
      return alert("Please login as a customer before adding favorite");
    } else {
      if (this.props.profile.role === "musician") {
        return alert("Please login as a customer before adding favorite");
      } else {
        const formData = {
          customerId: this.props.profile._id,
          musicianId: e.target.value
        };
        console.log(this.props.profile._id);
        console.log(e.currentTarget.value);
        this.props.addFav(formData);
        alert("Musician have been saved to Favorite");
      }
    }
  };

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
                <Link to={`/detail/${musician._id}`}>
                  <h6>{musician.name}</h6>
                  {musician.price ? (
                    <h6>Start from Rp {Rupiah(musician.price)},00/ Event</h6>
                  ) : (
                    <h6>
                      <i>Price is not set by musician</i>
                    </h6>
                  )}
                  {/* {musician.skill.map((skill, index) => {
                    return <h6 key="index">{(index ? "," : "") + skill}</h6>;
                  })} */}
                  {/* <h6>
                    {musician.skill
                      .toString()
                      .split(",")
                      .join(", ")}
                  </h6> */}
                  <h6>{musician.city}</h6>
                </Link>
              </div>

              {/* <div className="ratings-cart text-right">
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
              </div> */}
              <div className="ratings-cart text-right">
                <div className="cart">
                  <Link
                    to=""
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add Favorite"
                    name="musicianId"
                    value={musician._id}
                    onClick={this.handleSubmit}
                  >
                    <img src="img/core-img/favorites.png" alt="" />
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
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfile, getMusician, getFav, addFav }
)(MusicianList);
