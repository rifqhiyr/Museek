import React, { Component } from "react";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid detail">
          <h1 className="detail-title">wali</h1>
          <div className="row detail-row">
            <div className="col-12 col-lg-12 detail-col-right">
              <img
                className="detail-img"
                src={require("../assets/images/festival.jpg")}
                alt=""
              />
            </div>
            <div className="col-12 col-lg-12 detail-col-left">
              <div></div>
              <div className="detail-content">
                <div>
                  <h2 className="detail-contain-h underline">regis as</h2>
                  <p className="detail-contain-p">Group</p>
                </div>
                <div>
                  <h2 className="detail-contain-h underline">Price</h2>
                  <p className="detail-contain-p">Rp.500.000,'</p>
                </div>
                <div>
                  <h2 className="detail-contain-h underline">Location</h2>
                  <p className="detail-contain-p">Jakarta</p>
                </div>
              </div>
              <div className="detail-desc">
                <h2 className="detail-contain-desc underline">Description</h2>
                <p className="detail-contain-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;
