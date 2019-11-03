import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import DetailComponent from "./components/DetailComponent";
import ProfileEdit from "./components/ProfileEdit";
import MusicianPage from "./components/MusicianPage";
import BookedList from "./components/BookedList";
import BookingForm from "./components/BookingForm";
import Invoice from "./components/Invoice";
import RegisterMusician from "./components/RegisterMusician";
import RegisterCustomer from "./components/RegisterCustomer";
import Upload from "./components/Upload";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import VerificationEmail from "./components/VerificationEmail";
import Privacy from "./components/Privacy";
import EventDetail from "./components/EventDetail";
import EventEdit from "./components/EventEdit";
import EventSchedule from "./components/EventSchedule";
import InvoiceHistory from "./components/InvoiceHistory";
import BookingHistory from "./components/BookingHistory";
import PageProfile from "./components/PageProfile";
import Favorite from "./components/Favorite";
import BookForm from "./components/BookForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" exact component={About} />
          <Route path="/detail/:id" exact component={DetailComponent} />
          <Route path="/edit" exact component={ProfileEdit} />
          <Route exact path="/musicianpage" component={MusicianPage} />
          <Route exact path="/bookedlist=:id" component={BookedList} />
          <Route exact path="/bookinghistory=:id" component={BookingHistory} />
          <Route exact path="/bookingform" component={BookingForm} />
          <Route exact path="/bookform" component={BookForm} />
          <Route path="/invoice=:id" exact component={Invoice} />
          <Route path="/invoicehistory=:id" exact component={InvoiceHistory} />
          <Route path="/registermusician" exact component={RegisterMusician} />
          <Route path="/registercustomer" exact component={RegisterCustomer} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/forgotpassword" exact component={ForgotPassword} />
          <Route path="/verification" exact component={VerificationEmail} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/eventdetail/:id" exact component={EventDetail} />
          <Route path="/eventedit/:id" exact component={EventEdit} />
          <Route path="/eventschedule=:id" exact component={EventSchedule} />
          <Route path="/pageprofile" exact component={PageProfile} />
          <Route path="/favorite" exact component={Favorite} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
