import React, { Component } from "react";
import { connect } from "react-redux";
import { getMusician } from "../store/actions/dataAction";
import SideBar from "./SideBar";
import CategoriesFilter from "./CategoriesFilter";
import Filter from "./Filter";
import MusicianList from "./MusicianList";
import NewsLetter from "./NewsLetter";
import Pagination from "./Pagination";

class MusicianPage extends Component {
  state = {
    currentPage: 1,
    cardsPerPage: 4
  };

  // componentDidMount() {
  //   this.props.getMusician();
  // }

  handleClick = id => {
    this.setState({
      currentPage: id
    });
    console.log(this.state.currentPage);
  };

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
          <CategoriesFilter />
          <div className="dstyle_product_area section-padding-100">
            <div className="container-fluid">
              <Filter count={this.props.musicians.length} />
              <MusicianList
                currentPage={this.state.currentPage}
                cardsPerPage={this.state.cardsPerPage}
              />
              <Pagination
                cardsPerPage={this.state.cardsPerPage}
                handleClick={this.handleClick}
              />
            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    );
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
)(MusicianPage);
