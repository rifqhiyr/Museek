import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import NewsLetter from "./NewsLetter";

export default class ProfileCustomer extends Component {
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
                  <div className="cart-title mt-50">
                    <h2>My Profile</h2>
                  </div>
                  <div className="cart-table clearfix">
                    <table className="table table-responsive">
                      <tbody>
                        <tr>
                          <td className="cart_product_img">
                            <Link to="#">
                              <img
                                src={require("../assets/images/profile1.jpg")}
                                className="img-cart profile"
                                alt="Product"
                              />
                            </Link>
                          </td>
                          <td className="font-cart mr-left-profile width-profile">
                            <p className="p-profile">Name: Emma Watson</p>
                            <p className="p-profile">Address: </p>
                            <p className="p-profile">E-mail: </p>
                            <p className="p-profile">Hobbies: </p>
                            <p className="p-profile">Skills: </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart-table clearfix">
                    <table className="table table-responsive">
                      <tbody>
                        <tr>
                          {" "}
                          <td className="font-cart width-profile-description">
                            <div className="dstyle-btn-group mt-10 mb-10 button-right">
                              <Link
                                to="#"
                                className="btn dstyle-btn btn-profile mb-15"
                              >
                                EDIT PROFILE
                              </Link>
                            </div>
                            <div className="dstyle-btn-group mt-10 mb-10 mr-2 button-right">
                              <Link
                                to="#"
                                className="btn dstyle-btn btn-profile mb-15"
                              >
                                BOOKING HISTORY
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
