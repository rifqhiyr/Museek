import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "../helpers/setToken";
import { getProfileMusician } from "../store/actions/musicianDataAction";
import "../assets/scss/ProfileMusicianPage.scss";
import SideBar from "./SideBar";
import NewsLetter from "./NewsLetter";
import Picture from "./Picture";
import Rupiah from "./Rupiah";

class ProfileMusicianPage extends Component {
  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    this.props.getProfileMusician();
  }

  render() {
    return (
      <div>
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
          <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="cart-title">
                    <h2>MY PROFILE</h2>
                  </div>

                  <div className="cart-table clearfix">
                    <table className="table table-responsive">
                      <tbody>
                        <tr>
                          <td className="font-cart width-profile-description">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <div className="picture-profile">
                                {" "}
                                <Link to="/upload">
                                  <Picture
                                    picture={this.props.profile}
                                    giveBorder={true}
                                  />
                                </Link>
                              </div>
                            </div>
                            <p className="p-profile">
                              Name: {this.props.profile.name}
                            </p>
                            <p className="p-profile">
                              Gender: {this.props.profile.gender}
                            </p>
                            <p className="p-profile">
                              Address: {this.props.profile.address},{" "}
                              {this.props.profile.city},{" "}
                              {this.props.profile.country}
                            </p>
                            <p className="p-profile">
                              E-mail: {this.props.profile.email}
                            </p>
                            <p className="p-profile">
                              Skills:{" "}
                              {this.props.profile.skill &&
                                this.props.profile.skill
                                  .toString()
                                  .split(",")
                                  .join(", ")}
                            </p>
                            <p className="p-profile">
                              Price: Rp{" "}
                              {this.props.profile.price &&
                                Rupiah(this.props.profile.price)}
                              , 00
                            </p>
                            <p className="p-profile">
                              Rating: {this.props.profile.rating}
                            </p>

                            <p className="p-profile">
                              Description: {this.props.profile.description}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          {" "}
                          <td className="font-cart width-profile-description">
                            <div className="dstyle-btn-group button-right">
                              <Link
                                to="/editmusician"
                                className="btn dstyle-btn btn-profile"
                              >
                                EDIT PROFILE
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
    profile: state.profileReducer.profile
  };
};

export default connect(
  mapStateToProps,
  { getProfileMusician }
)(ProfileMusicianPage);
