import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Service from "./Service";
import Genre from "./Genre";
import Contact from "./Contact";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <Service />
        <Genre />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
