import React, { Component } from "react";
import "../assets/scss/Invoice.scss";

class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid invo-box">
          <div className="container invoice-header">
            <div className="invoice-box-head">
              <img
                className="invoice-img"
                src={require("../assets/images/logo.png")}
                alt=""
              />
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link navigasi-a" href="#brand">
                      www.museek.com
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navigasi-a" href="#brand">
                      mail@museek.com
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link navigasi-a" href="#brand">
                      (021) 555 000 33
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container invoice-boxtwo">
            <div className="invoice-boxtwo-t">
              <h1>Booking Detail</h1>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Data Pemesan</h5>
                    <hr class="my-4" />
                    <div className="invoice--card__text">
                      <p>Alex komang</p>
                      <p>alex@gmail.com</p>
                      <p>0812-3434-000</p>
                      <p>sleman, yogya</p>
                    </div>
                    <a href="#dudu" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Data Musisi</h5>
                    <hr class="my-4" />
                    <div className="invoice--card__text">
                      <p>Alex komang</p>
                      <p>alex@gmail.com</p>
                      <p>0812-3434-000</p>
                      <p>sleman, yogya</p>
                    </div>
                    <a href="#tara" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card invoice-card-box">
              <div className="card-body">
                <h5 className="card-title">Data Musisi</h5>
                <hr class="my-4" />
                <div className="invoice--card__text">
                  <p>pernikahan alex sherly</p>
                  <p>pernikahan</p>
                  <p>27 Mei 2019</p>
                  <p>Gedung ABCD</p>
                  <p>Ini isinya deskripsi acara</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;
