import React, { Component } from "react";
import "../assets/scss/DetailComponent.scss";

class DetailComponent extends Component {
  state = {
    log: true
  };
  render() {
    if (this.state.log) {
      return (
        <div>
          <button>log in</button>
          <button>daftar</button>
        </div>
      );
    }
    if (!this.state.log) {
      return (
        <div>
          <button>log out</button>
        </div>
      );
    }
  }
}

export default DetailComponent;
