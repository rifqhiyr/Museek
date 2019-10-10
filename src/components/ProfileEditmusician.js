import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import setToken from "./../helpers/setToken";
import { edituser } from "../store/actions/musicianDataAction";
import propTypes from "prop-types";
import "../assets/scss/ProfileEditmusician.scss";

class ProfileEditmusician extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    price: "",
    gender: "",
    address: "",
    city: "",
    country: "",
    description: "",
    skills: [],
    lists: [
      "Acoustic",
      "Jazz",
      "Blues",
      "Rock",
      "Heavy metal",
      "Dangdut",
      "Marawis",
      "Pop Modern",
      "DJ gagak"
    ]
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSiteChanged = e => {
    this.setState({
      gender: e.currentTarget.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (localStorage.token) {
      setToken(localStorage.token);
    }

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      price: this.state.price,
      gender: this.state.gender,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      description: this.state.description,
      skill: this.state.skills
    };

    this.props.edituser(formData);
    alert("Data have been saved");
    this.props.history.push("/upload");
  };

  addskill = e => {
    if (this.state.skills.includes(e.target.value) === false) {
      this.setState({
        skills: [...this.state.skills, e.target.value]
      });
    }

    if (this.state.skills.includes(e.target.value) === true) {
      this.setState({
        skills: this.state.skills.filter(skill => skill !== e.target.value)
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container edit">
          <div className="row edit-row">
            <div className="col-12 col-lg-6 edit-col-left">
              <h1 className="edit-title">Edit Profile</h1>
              <form className="edit-form">
                <p className="edit-p">Nama Lengkap</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder=" name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Email</p>
                <input
                  className="input-form"
                  type="email"
                  placeholder=" email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Password</p>
                <input
                  className="input-form"
                  type="password"
                  placeholder=" password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Price</p>
                <input
                  className="input-form"
                  type="number"
                  placeholder="price"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Jenis kelamin</p>
                <div className="edit-gender">
                  <label>
                    <input
                      className="input-radio"
                      type="radio"
                      name="male"
                      value="male"
                      onChange={this.onSiteChanged}
                    />{" "}
                    Laki-Laki
                  </label>
                  <label>
                    <input
                      className="input-radio"
                      type="radio"
                      name="female"
                      value="female"
                      onChange={this.onSiteChanged}
                    />{" "}
                    Perempuan
                  </label>
                </div>

                <p className="edit-p">Alamat</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder=" alamat"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Kota</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder=" kota"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Negara</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder=" Negara"
                  name="country"
                  value={this.state.country}
                  onChange={this.handleChange}
                />
              </form>
            </div>
            <div className="col-12 col-lg-6 edit-col-right">
              <form className="edit-form edit-skill">
                <p className="edit-p">Description</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder=" description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
                <p className="edit-p">Skill</p>
                <input
                  className="input-form"
                  type="text"
                  placeholder="Pick skill"
                  value={this.state.skills.map(sk => {
                    return sk;
                  })}
                />
                <div className="skill-btn-box">
                  {this.state.lists.map(list => {
                    return (
                      <input
                        className="btn tombol skill-btn"
                        type="button"
                        value={list}
                        onClick={this.addskill}
                      />
                    );
                  })}
                </div>
              </form>
            </div>
          </div>
          <div className="edit-button">
            <Link to="/profilemusician">
              <button className="btn dstyle-btn btn-profile">
                BACK TO PROFILE
              </button>
            </Link>
            <button
              className="btn dstyle-btn btn-profile"
              onClick={this.handleSubmit}
            >
              SAVED
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProfileEditmusician.propTypes = {
  edituser: propTypes.func.isRequired
};

export default connect(
  null,
  { edituser }
)(withRouter(ProfileEditmusician));
