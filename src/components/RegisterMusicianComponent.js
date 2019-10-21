import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/actions/authAction";
import propTypes from "prop-types";
import "../assets/scss/RegisterComponent.scss";

class RegisterMusicianComponent extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    role: "musician"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    };

    this.props.register(formData);
    alert("You have been registered..");
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="register-page">
        <div className="form">
          <h1 className="regis-heading">Daftar</h1>
          <div className="regis-as">
            <h2 className="regis-title">musician</h2>
          </div>

          <form className="register-form">
            <input
              className="regis-input"
              type="text"
              placeholder="your name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              className="regis-input"
              type="email"
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className="regis-input"
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              type="button"
              class="regis-btn btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={this.handleSubmit}
            >
              Daftar
            </button>

            <p className="message">
              <Link to="/signin">
                <span className="message-l">alrady have account?</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

RegisterMusicianComponent.propTypes = {
  register: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register }
)(withRouter(RegisterMusicianComponent));
