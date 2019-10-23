import React, { Component } from "react";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  render() {
    return (
      <div className="detail-wrapper">
        <div className="container">
          <div className="detail">
            <div className="row">
              <div className="col-12 col-md-5 col-lg-5">
                <div className="detail--col-left">
                  <figure className="figure">
                    <img
                      src={require("../assets/images/gigs1.jpg")}
                      className="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </figure>
                  <div className="detail--col-tittle">
                    <header className="detail--col-tittle-header">WALI</header>
                  </div>

                  <div className="detail--col-box">
                    <div className="detail-p">
                      <span className="detail-sign">
                        <i className="fa fa-dollar"></i>
                      </span>
                      <span className="detail-sign-text">
                        250.000,- / hours
                      </span>
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <div className="detail-p">
                      <span className="detail-sign">
                        <i class="fa fa-map-marker"></i>
                      </span>
                      <span className="detail-sign-text">Jakarta</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <div className="detail--col-right">
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-music"></i>
                    </span>

                    <div className="detail-sign-text">
                      <p className="detail-sign-genre">Jazz</p>
                      <p className="detail-sign-genre">metal</p>
                      <p className="detail-sign-genre">Rock</p>
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <span className="detail-fa">
                      <i class="fa fa-user"></i>
                    </span>
                    <div className="detail-sign-text">
                      <div className="detail-sign-genre">gitar</div>
                      <div className="detail-sign-genre">gitar</div>
                      <div className="detail-sign-genre">gitar</div>
                    </div>
                  </div>
                  <div className="detail--col-box">
                    <div className="detail-desc">
                      <h2 className="detail-desc-tittle">Description</h2>
                      <p className="detail-desc-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book
                      </p>
                    </div>
                  </div>
                  <div className="btn-tombol">
                    <button className="btn tombol"> book now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailComponent;

// const mapStateToProps = state => {
//   return {
//     musician: state.listMusicianReducer.musicianById
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getMusicianDetail }
// )(withRouter(DetailComponent));
