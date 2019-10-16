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
              <h1>Booking Detail (PAID)</h1>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Customer Data</h5>
                    <hr class="my-4" />
                    <div className="invoice--card__text">
                      <p>Nur Inna Alfianinda</p>
                      <p>Female</p>
                      <p>ni.alfianinda@outlook.com</p>
                      <p>Jl. Raya</p>
                      <p>Jakarta, Indonesia</p>
                    </div>
                    {/* <a href="#dudu" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Musician Data</h5>
                    <hr class="my-4" />
                    <div className="invoice--card__text">
                      <p>Rifqi Yuliandri</p>
                      <p>Solo Performer</p>
                      <p>rifqi@gmail.com</p>
                      <p>Total Price: Rp 1000.000,00</p>
                      <p>Musician Skill: Singing, Guitar</p>
                    </div>
                    {/* <a href="#tara" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="card invoice-card-box">
              <div className="card-body">
                <h5 className="card-title">Event Detail</h5>
                <hr class="my-4" />
                <div className="invoice--card__text">
                  <p>Event Date: 10 Desember 2019</p>
                  <p>Duration: 2 hours</p>
                  <p>Event Category: Wedding</p>
                  <p>Musical Genres: Pop, Dangdut</p>
                  <p>Event Location: Gedung ABCD</p>
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
