import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getMusicianDetail } from "../store/actions/dataAction";
import Rupiah from "./Rupiah";
import Picture from "./Picture";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getMusicianDetail(id);
  }

  render() {
    return (
      <div className="container">
        <div className="detail">
          <div className="detail--div__title">
            <h1 className="detail-h1">
              {this.props.musician.name && this.props.musician.name}
            </h1>
          </div>
          <div className="row detail-row">
            <div className="col-12 col-lg-6 detail-col-left">
              <div className="detail-div--img">
                {/* <img
                  className="detail-img"
                  src={require("../assets/images/gigs1.jpg")}
                  alt=""
                /> */}
                <Link to="/upload">
                  <Picture picture={this.props.musician} giveBorder={true} />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 detail-col-right">
              <div className="detail-content">
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Gender
                    </span> <br /> {this.props.musician.gender}
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      E-mail
                    </span> <br /> {this.props.musician.email}
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Location
                    </span> <br /> {this.props.musician.address},{" "}
                    {this.props.musician.city}, {this.props.musician.country}
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Rating
                    </span> <br />{" "}
                    {this.props.musician.rating === undefined ||
                    this.props.musician.rating === null ||
                    this.props.musician.rating.length === 0
                      ? "No rating"
                      : this.props.musician.rating}
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Price
                    </span> <br />{" "}
                    {this.props.musician.price ? (
                      <span>
                        Rp {Rupiah(this.props.musician.price)},00/ Event
                      </span>
                    ) : (
                      <span>
                        <i>Price is not set by musician</i>
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-div--content">
              <p className="detail-p">
                <i class="fa fa-dollar-sign"></i>
                <span className="detail-contain-span">Genres</span>
                <br />{" "}
                {this.props.musician.genre &&
                  this.props.musician.genre
                    .toString()
                    .split(",")
                    .join(", ")}
              </p>
            </div>
            <div className="detail-div--content">
              <p className="detail-p">
                <i class="fa fa-dollar-sign"></i>
                <span className="detail-contain-span">Skills</span>
                <br />{" "}
                {this.props.musician.skill &&
                  this.props.musician.skill
                    .toString()
                    .split(",")
                    .join(", ")}
              </p>
            </div>
            <div className="detail-div--content">
              <p className="detail-p">
                <i class="fa fa-dollar-sign"></i>
                <span className="detail-contain-span">Description</span>
                <br /> {this.props.musician.description}
              </p>
            </div>
            <div className="detail-btn">
              <button className="btn tombol">Book now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    musician: state.listMusicianReducer.musicianById
  };
};

export default connect(
  mapStateToProps,
  { getMusicianDetail }
)(withRouter(DetailComponent));
