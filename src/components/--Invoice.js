import React, { Component } from "react";
import "../assets/scss/Invoice.scss";

class Invoice extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid invo-box">
          {/* <div className="container invoice-header">
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
          </div> */}
          <div className="container invoice-boxtwo">
            <div className="invoice-boxtwo-t">
              <h1 className="h-1-invoice">Booking Detail (PAID)</h1>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="card  main-footer">
                  <div className="card-body inv">
                    <h5 className="card-title h-5-invoice">Customer Data</h5>
                    <hr className="hr my-4" />
                    <div className="invoice--card__text">
                      <p className="p-invoice">Nur Inna Alfianinda</p>
                      <p className="p-invoice">Female</p>
                      <p className="p-invoice">ni.alfianinda@outlook.com</p>
                      <p className="p-invoice">Jl. Raya</p>
                      <p className="p-invoice">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card main-footer">
                  <div className="card-body inv">
                    <h5 className="card-title h-5-invoice">Musician Data</h5>
                    <hr className="hr my-4" />
                    <div className="invoice--card__text">
                      <p className="p-invoice">Rifqi Yuliandri</p>
                      <p className="p-invoice">Solo Performer</p>
                      <p className="p-invoice">rifqi@gmail.com</p>
                      <p className="p-invoice">Total Price: Rp 1000.000,00</p>
                      <p className="p-invoice">
                        Musician Skill: Singing, Guitar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card invoice-card-box main-footer">
              <div className="card-body inv">
                <h5 className="card-title h-5-invoice">Event Detail</h5>
                <hr className="hr my-4" />
                <div className="invoice--card__text">
                  <p className="p-invoice">Event Date: 10 Desember 2019</p>
                  <p className="p-invoice">Duration: 2 hours</p>
                  <p className="p-invoice">Event Category: Wedding</p>
                  <p className="p-invoice">Musical Genres: Pop, Dangdut</p>
                  <p className="p-invoice">Event Location: Gedung ABCD</p>
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
