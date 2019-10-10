import React, { Component } from "react";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/musicianDataAction";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  render() {
    let detail = this.props.musicians.filter(
      detail => detail._id === this.props.params._id
    )[0];

    return (
      <div className="container-fluid description">
        <h3 className="desc-heading">{detail.name}</h3>
        <div className="row desc-row">
          <div className="col-12 col-lg-6 desc-col-left">
            <img
              className="img-fluid"
              src={require("../assets/images/background.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6 desc-col-right">
            <div className="desc-group">
              <p className="desc-title">
                <span className="desc-span">
                  <i class="fas fa-music"></i>Genre
                </span>
                <br /> Heavy Metal, Religi, Keroncong
              </p>
              <p className="desc-title">
                <span className="desc-span">
                  <i class="fa fa-dollar-sign"></i>
                  Harga Per-Event
                </span>
                <br /> Rp. 200.000.000,-
              </p>
              <p className="desc-title">
                <span className="desc-span">
                  <i class="fas fa-map-marker-alt"></i>
                  Avaliable city
                </span>
                <br /> Jekardah, Cirebon
              </p>
              <p className="desc-title">
                <span className="desc-span">Tentang Artist</span> <br />
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
            <button className="btn tombol">Pesan sekarang</button>
          </div>
          <div className="container ">
            <div className="desc-about">
              <h2 className="desc-about-title"> Performance gallery</h2>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={require("../assets/images/gigs1.jpg")}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../assets/images/gigs2.jpg")}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../assets/images/gigs4.jpg")}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musicians: state.listMusicianReducer.musicians
  };
}

export default connect(
  mapStateToProps,
  { getMusician }
)(DetailComponent);
