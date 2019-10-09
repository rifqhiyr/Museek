import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/BookedList.scss";
import SideBar from "./SideBar";
import PaymentCard from "./PaymentCard";
import NewsLetter from "./NewsLetter";

export default class BookedList extends Component {
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
                <div className="col-12 col-lg-8">
                  <div className="cart-title mt-50">
                    <h2>Booked List</h2>
                  </div>
                  <div className="cart-table clearfix">
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Musician / Event Name</th>
                          <th>Duration / Event Date</th>
                          <th>Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="cart_product_img">
                            <Link to="#">
                              <img
                                src={require("../assets/images/beatles.jpg")}
                                className="img-cart"
                                alt="Product"
                              />
                            </Link>
                          </td>
                          <td className="font-cart">
                            <span>Smith / Birthday Party</span>
                          </td>
                          <td className="font-cart">
                            <span>3 hours / 28 august 2019</span>
                          </td>
                          <td className="font-cart">
                            <span>Rp 3000.000,00</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="cart_product_img">
                            <Link to="#">
                              <img
                                src={require("../assets/images/beatles.jpg")}
                                className="img-cart"
                                alt="Product"
                              />
                            </Link>
                          </td>
                          <td className="font-cart">
                            <span>Jemmy / Office Party</span>
                          </td>
                          <td className="font-cart">
                            <span>2 hours / 31 October 2019</span>
                          </td>
                          <td className="font-cart">
                            <span>Rp 2000.000,00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <PaymentCard />
              </div>
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
  }
}
