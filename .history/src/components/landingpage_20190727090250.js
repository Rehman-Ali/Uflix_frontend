import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import img from '../images/bg_1.jpg';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={ img }
              alt="avatar"
              className="avatar-img"
              style={{borderRadius: '10px 10px'}}
              />

            <div className="banner-text">
              <h1>Full MERN Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hafiz-mudassir-075777130" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/malik-93" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* facebook */}
          <a href="https://www.facebook.com/profile.php?id=100007528994324" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
          {/* Stack overflow */}
          <a href="https://stackoverflow.com/users/11123420/muhammad-mudassar" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-stack-overflow" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
