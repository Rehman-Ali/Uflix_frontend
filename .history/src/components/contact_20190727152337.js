import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import img from '../images/bg_1.jpg';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body" style={{height: '100%'}}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Muhammad Mudassir</h2>
            <img
              src={img}
              alt="avatar"
              style={{height: '190px', borderRadius: '10px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             I am a full MERN Stack developer having 1+ years of experience in both front-end (ReactJs, React Native) and back-end (NodeJs, expressJs, MongoDB ) server side technologies also by using NoSql databases (mongodb).
  
            I like to solve complex problems, related to development and bring new ideas to life, so I do my best to have work done, and always learn new technologies and languages.
  
            I have experience in UI / UX and I am capable of making my own conceptual design for each project, using Photoshop and then convert it into a fully functional pages.
            I provides effective, bug-free apps.
 
              </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +92-303-9839093
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-whatsapp" aria-hidden="true"/>
                    +92-303-9839093
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                     Malikjrw147@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    malikjrw147_2
                    </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
