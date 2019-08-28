import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import trim1 from '../images/trim-1.png';
import trim2 from '../images/trim-2.png';
import trim3 from '../images/trim-3.jpg';
import uflix1 from '../images/uflix-1.png';
import uflix2 from '../images/uflix-2.png';
import uflix3 from '../images/uflix-3.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', width: '45%', paddingBottom: '20px' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={project1} alt='' style={{ width: '120%' }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border style={{ marginTop: '60px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Button colored><a href='https://github.com/Malik-93/FYP-e-commerce-web-app' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href='https://ranksol.herokuapp.com/' target='_blank' rel="noopener noreferrer">Live Demo</a></Button>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', width: '45%', paddingBottom: '20px' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={project2} alt='' style={{ width: '120%' }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border style={{ marginTop: '70px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Button colored><a href='https://github.com/Malik-93/Game' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <span><Button colored><a href='https://mudassir-auth093.firebaseapp.com/' target='_blank' rel="noopener noreferrer" style={{ marginLeft: '10em;' }}>Live Demo</a></Button></span>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
    else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto', width: '45%', paddingBottom: '20px' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={trim1} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
              <img src={trim2} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
              <img src={trim3} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Button colored><a href='https://github.com/Malik-93/React-Native-Trim-Barber-App' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href='https://expo.io/@mudassir_malik/trim-app' target='_blank' rel="noopener noreferrer">Expo QR CODE</a></Button>
              <Button colored><a href='https://expo.io/artifacts/6e0e77cc-d51e-4aa8-8bac-50d64d49bd48/' target='_blank' rel="noopener noreferrer">APK</a></Button>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: '5', width: '45%', paddingBottom: '20px' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={uflix1} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
              <img src={uflix2} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
              <img src={uflix3} alt='' style={{ width: '30%', margin: '10px', borderRadius: '5px' }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Button colored><a href='https://github.com/Malik-93/Uflix' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href='https://expo.io/@mudassir_malik/project-eject' target='_blank' rel="noopener noreferrer">Expo QR CODE</a></Button>
              <Button colored><a href='https://expo.io/artifacts/9ab8f8a5-aa00-461c-b66f-80d9e4f7b150/' target='_blank' rel="noopener noreferrer">APK</a></Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
      // } else if(this.state.activeTab === 2) {
      //   return (
      //     <div><h1>This is VueJS</h1></div>
      //   )
      // } else if(this.state.activeTab === 3) {
      //   return (
      //     <div><h1>This is MongoDB</h1></div>
      //   )
      // }

    }
  }
  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><b><em>ReactJs & NodeJs</em></b></Tab>
          <Tab><b><em>Rect Native</em></b></Tab>
          {/* <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
