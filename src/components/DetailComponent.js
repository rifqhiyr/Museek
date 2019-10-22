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
                      <h2 className="detail-desc-tittle">description</h2>
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

// <div className="detail--div__title">
//             <h1 className="detail-h1">WALI</h1>
//           </div>
//           <div className="row detail-row">
//             <div className="col-12 col-lg-6 detail-col-left">
//               <div className="detail-div--img">
//                 <img
//                   className="detail-img"
//                   src={require("../assets/images/gigs1.jpg")}
//                   alt=""
//                 />
//               </div>
//             </div>
//             <div className="col-sm-12 col-lg-6 detail-col-right">
//               <div className="detail-content">
//       <div className="detail-div--content">
//         <p className="detail-p">
//           <i class="fa fa-dollar-sign"></i>
//           <span className="detail-contain-span">
//             Skill
//           </span> <br /> Guitar, bass, drum
//         </p>
//       </div>
//       <div className="detail-div--content">
//         <p className="detail-p">
//           <i class="fa fa-dollar-sign"></i>
//           <span className="detail-contain-span">
//             Location
//           </span> <br /> Jakarta
//         </p>
//       </div>
//       <div className="detail-div--content">
//         <p className="detail-p">
//           <i class="fa fa-dollar-sign"></i>
//           <span className="detail-contain-span">
//             Price
//           </span> <br /> Rp. 250.000.000
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
//           <div className="detail-box">
//             <div className="detail-div--content">
//               <p className="detail-p">
//                 <i class="fa fa-dollar-sign"></i>
//                 <span className="detail-contain-span">Genre</span>
//                 <br /> Jazz
//               </p>
//             </div>
//             <div className="detail-div--content">
//               <p className="detail-p">
//                 <i class="fa fa-dollar-sign"></i>
//                 <span className="detail-contain-span">Description</span>
//                 <br /> Lorem Ipsum is simply dummy text of the printing and
//                 typesetting industry. Lorem Ipsum has been the industry's
//                 standard dummy text ever since the 1500s, when an unknown
//                 printer took a galley of type and scrambled it to make a type
//                 specimen book. It has survived not only five centuries, but also
//                 the leap into electronic typesetting, remaining essentially
//                 unchanged.
//               </p>
//             </div>
//             <div className="detail-btn">
//               <button className="btn tombol">Book now</button>
//             </div>
//           </div>
