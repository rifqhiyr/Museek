import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/PaymentCard.scss";

export default class Pagination extends Component {
  render() {
    return (
      <div className="col-12 col-lg-4">
        <div className="cart-summary">
          <h5>Total Payment</h5>
          <ul className="summary-table">
            <li>
              <span>subtotal:</span> <span>Rp 5000.000,00</span>
            </li>
            <li>
              <span>transportation:</span> <span>Free</span>
            </li>
            <li>
              <span>total:</span> <span>Rp 5000.000,00</span>
            </li>
          </ul>
          <div className="cart-btn mt-100">
            <Link to="/bookingform" className="btn dstyle-btn w-100">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
