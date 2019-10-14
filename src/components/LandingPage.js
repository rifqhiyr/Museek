import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Service from "./Service";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Service />
      </div>
    );
  }
}

export default HomePage;
