import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Button } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './Redux/Actions/authActions';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import icon from './assests/icon.png'


class App extends Component {
  componentDidMount() {
    // Check for token to keep user logged in
    if (localStorage.jwtToken) {
      // Set auth token header auth
      const token = localStorage.jwtToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = jwt_decode(token);
      // Set user and isAuthenticated
      this.props.dispatch(setCurrentUser(decoded));
      // Check for expired token
      // const currentTime = Date.now() / 1000; // to get in milliseconds
      // if (decoded.exp < currentTime) {
      //   // Logout user
      //   this.props.dispatch(logoutUser());
      //   // Redirect to login
      //   window.location.href = "./login";
      // }
    }
  }
  render() {
    const { isAuthenticated } = this.props.auth
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/"><img src={icon} height={'100px'} alt="brand Logo" /> </Link>} scroll>
            {isAuthenticated ?
              <Navigation>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Customers</Link>
                <Link to="/staff">Staff</Link>
                <Link to="/complaints">Complaints</Link>
                <Link to="/demands">Movie Demands</Link>
                <Link to="/feedbacks">Feedbacks</Link>
                <Link to="/movies/allMoives">AllMovies</Link>

              </Navigation>
              : ''
            }
          </Header>
          <Drawer title={<Link style={{ textDecoration: 'none', color: '#fff' }} to="/"><img src={icon} height={'100px'} alt="brand Logo" /></Link>}>
            {isAuthenticated ?
              <Navigation>
                <Link to="/">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Customers</Link>
                <Link to="/staff">Staff</Link>
                <Link to="/complaints">Complaints</Link>
                <Link to="/demands">Movie Demands</Link>
                <Link to="/feedbacks">Feedbacks</Link>
                <Link to="/movies/allMoives">AllMovies</Link>
                <Link to="/movies/upload">
                  <Button style={{ display: 'flex', alignItems: 'baseline' }}>
                    <i className="fa fa-upload" aria-hidden="true" style={{ margin: [0 ,'auto'], fontSize: '20px' }}></i>
                    <span style={{ marginLeft: '8px'}}>Upload</span>
                  </Button></Link>
              </Navigation>
              : ''
            }
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>

    );
  }
}
const mapStateToProps = (store) => {
  return {
    auth: store.auth
  }
}

export default connect(mapStateToProps)(App);
