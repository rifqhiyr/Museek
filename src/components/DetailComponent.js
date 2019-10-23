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
      <div className="detail-wrapper">
        <div className="container">
          <div className="detail">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5">
                <div className="detail--col-left">
                  <figure className="figure">
                    {/* <img
                      src={require("../assets/images/gigs1.jpg")}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    /> */}
                    <Link to="/upload">
                      <Picture
                        picture={this.props.musician}
                        giveBorder={true}
                      />
                    </Link>
                  </figure>
                  <div className="detail--col-tittle">
                    <header className="detail--col-tittle-header">
                      {this.props.musician.name && this.props.musician.name}
                    </header>
                  </div>

                  <div className="detail--col-box">
                    <div className="detail-p">
                      <span className="detail-sign">
                        <i className="fa fa-dollar"></i>
                      </span>
                      <span className="detail-sign-text">
                        {/* 250.000,- / hours */}
                        {this.props.musician.price ? (
                          <span>
                            Rp {Rupiah(this.props.musician.price)},00/ Event
                          </span>
                        ) : (
                          <span>
                            <i>Price is not set by musician</i>
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <div className="detail-p">
                      <span className="detail-sign">
                        <i class="fa fa-map-marker"></i>
                      </span>
                      <div>
                        <span className="detail-sign-text">
                          {this.props.musician.address},
                          {this.props.musician.city},
                          {this.props.musician.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <div className="detail--col-right">
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-star"></i>
                    </span>

                    <div className="detail-sign-text">
                      {this.props.musician.rating === undefined ||
                      this.props.musician.rating === null ||
                      this.props.musician.rating.length === 0
                        ? "No rating"
                        : this.props.musician.rating}
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-music"></i>
                    </span>

                    <div className="detail-sign-text">
                      {this.props.musician.genre &&
                        this.props.musician.genre
                          .toString()
                          .split(",")
                          .join(", ")}
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-user"></i>
                    </span>
                    <div className="detail-sign-text">
                      {this.props.musician.skill &&
                        this.props.musician.skill
                          .toString()
                          .split(",")
                          .join(", ")}
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <div className="detail-sign-text">
                      {this.props.musician.email}
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <div className="detail-desc">
                      <h2 className="detail-desc-tittle">Description</h2>
                      <p className="detail-desc-body">
                        {this.props.musician.description}
                      </p>
                    </div>
                  </div>
                  <div className="btn-tombol">
                    <button className="btn tombol"> book now</button>
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

const mapStateToProps = state => {
  return {
    musician: state.listMusicianReducer.musicianById
  };
};

export default connect(
  mapStateToProps,
  { getMusicianDetail }
)(withRouter(DetailComponent));
