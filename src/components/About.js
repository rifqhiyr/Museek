import React, { Component } from "react";
import "../assets/scss/About.scss";

class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid about">
          <div className="container about-boxone">
            <h1 className="display-4 about-h"> About museek</h1>
            <p className="lead about-p">
              Our vision is to be the “Musician’s best friends”; to build a
              place for everyone who wants to book various group of talented
              musicians and a place for musicians to collabs with other
              musicians.
            </p>
            <div className="row about-row">
              <div className="col-sm-12 col-lg-4 about-col-text">
                <p>
                  For music enthusiast who wants to book a musician / collabs
                  with musician, “MUseek” is a tech platform that provide a
                  convenience to use musician’s services.
                </p>
              </div>
              <div className="col-sm-12 col-lg-4 about-col-img">
                <div>
                  <img
                    className="about-img"
                    src={require("../assets/images/gigs2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container about-boxtwo">
            <h2 className="underline jumbo-heading about-h2">Meet Our Team</h2>

            <div className="row about-row">
              <div className="col-sm-12 col-lg-4">
                <h1>kiri</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining e
                </p>
              </div>
              <div className="col-sm-12 col-lg-4">
                <h1>tengah</h1>
                <p>
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' Lorem Ipsum
                  is
                </p>
              </div>
              <div className="col-sm-12 col-lg-4">
                <h1>kanan</h1>
                <p>
                  Why do we use it? It is a long established fact that a reader
                  will be distracted by the readable content of a page when
                  looking at its layout. The point of using Lorem Ipsum is that
                  readable English. Many desktop publishing packages and web
                </p>
              </div>
            </div>
          </div>
          <div className="container about-boxthree">
            <div className="row about-row">
              <div className="col-sm-12 col-lg-4 about-col-text">
                <p>
                  For music enthusiast who wants to book a musician / collabs
                  with musician, “MUseek” is a tech platform that provide a
                  convenience to use musician’s services.
                </p>
              </div>
              <div className="col-sm-12 col-lg-4 about-col-img">
                <div>
                  <img
                    className="about-img"
                    src={require("../assets/images/gigs2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row about-row">
              <div className="col-sm-12 col-lg-4 about-col-img">
                <img
                  className="about-img"
                  src={require("../assets/images/gigs2.jpg")}
                  alt=""
                />
              </div>
              <div className="col-sm-12 col-lg-4 about-col-text">
                <p>
                  For music enthusiast who wants to book a musician / collabs
                  with musician, “MUseek” is a tech platform that provide a
                  convenience to use musician’s services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
