import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';

class Profile extends Component {
  render() {
    return(
      <div className="contact-body" style={{height: '100%'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h1>Profile</h1>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Profile;
