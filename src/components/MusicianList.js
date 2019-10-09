import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/musicianDataAction";
import Picture from "./Picture";
import Rupiah from "./Rupiah";
import "../assets/scss/MusicianList.scss";

class MusicianList extends Component {
  componentDidMount() {
    this.props.getMusician();
  }

  render() {
    const listMusician = this.props.musicians.map(musician => {
      return (
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
          <div className="single-product-wrapper">
            <div className="product-img">
              <Picture picture={musician} />
            </div>
            <div className="ratings">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
            <div className="product-description d-flex align-items-center justify-content-between">
              <div className="product-meta-data">
                <div className="line" />
                <Link to="/detail">
                  <h6>{musician.name}</h6>
                  <h6>
                    Start from Rp {musician.price && Rupiah(musician.price)},00/
                    Event
                  </h6>
                  {/* {musician.skill.map((skill, index) => {
                    return <h6 key="index">{(index ? "," : "") + skill}</h6>;
                  })} */}
                  <h6>
                    {musician.skill
                      .toString()
                      .split(",")
                      .join(", ")}
                  </h6>
                </Link>
              </div>

              <div className="text-right">
                <Link
                  to="/bookedlist"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to Cart"
                >
                  <img src="img/core-img/cart.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="row">{listMusician}</div>;
  }
}

const mapStateToProps = state => {
  return {
    musicians: state.listMusicianReducer.musicians
  };
};

export default connect(
  mapStateToProps,
  { getMusician }
)(MusicianList);
