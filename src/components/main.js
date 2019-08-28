import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Profile from './Profile';
import Users from './User/Users';
import Staff from './Staff/Staff';
import { Default } from './404';
import Login from './Auth/Login';
import { connect } from 'react-redux';
import OnDemands from './Demands/OnDemands';
import Complaints from './Complaints/Complaints';
import Feedback from './Feedbacks/Feedbacks';
import UploadMovie from './Movies/Upload-Movie';
import AllMovies from './Movies/AllMovies';
const Main = (props) => (
  <div className="main-container">
    <Switch>
      {props.auth.isAuthenticated ? <Route exact path='/' component={LandingPage} /> : <Route exact path='/' component={Login} />}
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={LandingPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/users" component={Users} />
      <Route path="/staff" component={Staff} />
      <Route path="/demands" component={OnDemands} />
      <Route path="/complaints" component={Complaints} />
      <Route path="/feedbacks" component={Feedback} />
      <Route path="/movies/upload" component={UploadMovie} />
      <Route path="/movies/allMoives" component={AllMovies} />
      <Route component={Default} />

    </Switch>
  </div>
)
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(Main);
