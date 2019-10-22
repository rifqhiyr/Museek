import React, { Component } from "react";

import "../assets/scss/PageProfile.scss";

class PageProfile extends Component {
  render() {
    return (
      <div>
        <div className="profile-wrapper">
          <div className="container">
            <div className="profile-header">
              <h1 className="profile-header-h2">my profile</h1>
            </div>
            <div className="row">
              <div class="col-12 col-md-5 col-lg-5">
                <div class="col-left">
                  <div className="profile-pict">
                    <figure className="figure">
                      <img
                        src={require("../assets/images/profile1.jpg")}
                        className="figure-img img-fluid rounded"
                        alt="..."
                      />
                    </figure>
                  </div>
                  <div className="profile-role">
                    <h2 className="profile-role-h2">Musician</h2>
                  </div>
                  <div className="profile-desc">
                    <p className="profile-desc-text">
                      <span className="desc-text-span">"..</span>Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-7">
                <div className="col-right">
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-id-card"></i>
                      </span>
                      <h3 className="profile-h3">Full name</h3>
                    </div>
                    <p className="profile-p">Jhon Doe</p>
                  </div>
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <h3 className="profile-h3">email address</h3>
                    </div>
                    <p className="profile-p">jhondoe@gmail.com</p>
                  </div>
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-venus-mars"></i>
                      </span>
                      <h3 className="profile-h3">gender</h3>
                    </div>
                    <p className="profile-p">male</p>
                  </div>
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-map-marker"></i>
                      </span>
                      <h3 className="profile-h3">address</h3>
                    </div>
                    <p className="profile-p">
                      jl.kenangan kec.dimana kab.siapa bekasi jawa-tenggara
                    </p>
                  </div>
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-dollar"></i>
                      </span>
                      <h3 className="profile-h3">price/ hours</h3>
                    </div>
                    <p className="profile-p">500.000</p>
                  </div>
                  <div className="profile-box">
                    <div className="profile-box-tittle">
                      <span className="box-fa">
                        <i class="fa fa-music"></i>
                      </span>
                      <h3 className="profile-h3">skill</h3>
                    </div>
                    <p className="profile-p">Guitar, singer, drum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-btn">
              <button className="btn tombol p-btn">back</button>
              <button className="btn tombol p-btn">edit profile</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PageProfile;
