import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { login } from "../store/actions/authAction";
import { connect } from "react-redux";
import swal from "sweetalert";
import "../assets/scss/Signin.scss";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    await this.props.login(formData);
    if (this.props.isAuthenticated) {
      console.log("welcome", this.props.isAuthenticated);
      this.props.history.push("/");
    } else {
      console.log(this.props.isAuthenticated);
      swal("MuSeek says:", "Invalid username or password", "error");
    }
  };
  render() {
    return (
      <div>
        <div className="container login-page">
          <div className="form">
            <h1 className="signin-heading">Sign in</h1>
            <form className="login-form">
              <input
                className="signin-input"
                type="email"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                className="signin-input"
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <button className="signin-btn" onClick={this.handleSubmit}>
                Masuk
              </button>
              <p className="message">
                <Link to="/forgotpassword">
                  <span className="message-l">forgot password</span>
                </Link>
                <Link to="/signup">
                  <span className="message-l">not have account yet?</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Signin));
