import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfile } from "../store/actions/dataAction";
// import NewsLetter from "./NewsLetter";
import Picture from "./Picture";
import Rupiah from "./Rupiah";

import "../assets/scss/PageProfile.scss";

class PageProfile extends Component {
  componentDidMount() {
    if (localStorage.setToken) {
      setToken(localStorage.token);
    }
    this.props.getProfile();
  }

  render() {
    // const { role } = this.props.profile;

    return (
      <div className="profile-wrapper">
        <div className="container">
          <div className="profile-header">
            <h1 className="profile-header-h2">my profile</h1>
          </div>
          <div className="row">
            <div class="col-12 col-md-5 col-lg-5">
              <div class="col-left">
                <div className="profile-pict">
                  <figure className="figure">
                    {/* <img
                        src={require("../assets/images/profile1.jpg")}
                        className="figure-img img-fluid rounded"
                        alt="..."
                      /> */}
                    <Link to="/upload">
                      <Picture picture={this.props.profile} giveBorder={true} />
                    </Link>
                  </figure>
                </div>
                <div className="profile-role">
                  <h2 className="profile-role-h2">Musician</h2>
                </div>
                <div className="profile-desc">
                  <p className="profile-desc-text">
                    <span className="desc-text-span">"..</span>
                    {this.props.profile.description}.."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-7">
              <div className="col-right">
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-id-card"></i>
                    </span>
                    <h3 className="profile-h3">Full name</h3>
                  </div>
                  <p className="profile-p">{this.props.profile.name}</p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-envelope"></i>
                    </span>
                    <h3 className="profile-h3">email address</h3>
                  </div>
                  <p className="profile-p">{this.props.profile.email}</p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-venus-mars"></i>
                    </span>
                    <h3 className="profile-h3">gender</h3>
                  </div>
                  <p className="profile-p">{this.props.profile.gender}</p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-map-marker"></i>
                    </span>
                    <h3 className="profile-h3">address</h3>
                  </div>
                  <p className="profile-p">
                    {this.props.profile.address}, {this.props.profile.city},{" "}
                    {this.props.profile.country}
                  </p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-dollar"></i>
                    </span>
                    <h3 className="profile-h3">price/ hours</h3>
                  </div>
                  <p className="profile-p">
                    {this.props.profile.price &&
                      Rupiah(this.props.profile.price)}
                  </p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-play-circle"></i>
                    </span>
                    <h3 className="profile-h3">skill</h3>
                  </div>
                  <p className="profile-p">
                    {this.props.profile.skill &&
                      this.props.profile.skill
                        .toString()
                        .split(",")
                        .join(", ")}
                  </p>
                </div>
                <div className="profile-box">
                  <div className="profile-box-tittle">
                    <span className="box-fa">
                      <i class="fa fa-music"></i>
                    </span>
                    <h3 className="profile-h3">Genre</h3>
                  </div>
                  <p className="profile-p">
                    {this.props.profile.genre &&
                      this.props.profile.genre
                        .toString()
                        .split(",")
                        .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-btn">
            <Link to={`/eventschedule=${this.props.profile._id}`}>
              <button className="btn tombol p-btn">event schedule</button>
            </Link>
            <Link to="/edit">
              <button className="btn tombol p-btn">edit profile</button>
            </Link>
          </div>
        </div>
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
  { getProfile }
)(PageProfile);
