import React, { Component } from "react";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  render() {
    return (
      <div className="container">
        <div className="detail">
          <div className="detail--div__title">
            <h1 className="detail-h1">WALI</h1>
          </div>
          <div className="row detail-row">
            <div className="col-12 col-lg-6 detail-col-left">
              <div className="detail-div--img">
                <img
                  className="detail-img"
                  src={require("../assets/images/gigs1.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 detail-col-right">
              <div className="detail-content">
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Skill
                    </span> <br /> Guitar, bass, drum
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Location
                    </span> <br /> Jakarta
                  </p>
                </div>
                <div className="detail-div--content">
                  <p className="detail-p">
                    <i class="fa fa-dollar-sign"></i>
                    <span className="detail-contain-span">
                      Price
                    </span> <br /> Rp. 250.000.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-div--content">
              <p className="detail-p">
                <i class="fa fa-dollar-sign"></i>
                <span className="detail-contain-span">Genre</span>
                <br /> Jazz
              </p>
            </div>
            <div className="detail-div--content">
              <p className="detail-p">
                <i class="fa fa-dollar-sign"></i>
                <span className="detail-contain-span">Description</span>
                <br /> Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
            <div className="detail-btn">
              <button className="btn tombol">Book now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;
