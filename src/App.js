import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import DetailComponent from "./components/DetailComponent";
import ProfileEditmusician from "./components/ProfileEditmusician";
import About from "./components/About";
import ProfileMusicianPage from "./components/ProfileMusicianPage";
import ProfileCustomer from "./components/ProfileCustomer";
import MusicianPage from "./components/MusicianPage";
import BookedList from "./components/BookedList";
import BookingForm from "./components/BookingForm";
import ProfileEdit from "./components/ProfileEdit";
import Invoice from "./components/Invoice";
import RegisterMusician from "./components/RegisterMusician";
import RegisterCustomer from "./components/RegisterCustomer";
import Upload from "./components/Upload";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/signin" exact component={Signin} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact Component={LandingPage} />
          <Route exact path="/musicianpage" component={MusicianPage} />
          <Route exact path="/bookedlist" component={BookedList} />
          <Route exact path="/bookingform" component={BookingForm} />
          <Route path="/homepage" exact component={HomePage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/musicians/:id" exact component={DetailComponent} />
          <Route path="/editmusician" exact component={ProfileEditmusician} />
          <Route path="/about" exact component={About} />
          <Route path="/profilecustomer" exact component={ProfileCustomer} />
          <Route
            path="/profilemusician"
            exact
            component={ProfileMusicianPage}
          />
          <Route path="/edit" exact component={ProfileEdit} />
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/registermusician" exact component={RegisterMusician} />
          <Route path="/registercustomer" exact component={RegisterCustomer} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/logout" exact component={Logout} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
