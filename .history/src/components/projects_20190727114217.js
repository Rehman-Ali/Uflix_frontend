import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import project1 from '../images/project-1.png'
import project2 from '../images/project-2.png'
import project3 from '../images/project-3.png'
import trim from '../images/trim.jpg'
import uflix from '../images/uflix.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}} >
            <img src={project1} alt='' style={{width: '120%'}} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
            <Button colored><a href='https://github.com/Malik-93/FYP-e-commerce-web-app' target='_blank'  rel="noopener noreferrer">Github</a></Button>              
            <Button colored><a href='https://ranksol.herokuapp.com/' target='_blank'  rel="noopener noreferrer">Live Demo</a></Button>
            
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}} >
            <img src={project2} alt='' style={{width: '120%'}} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
            <Button colored><a href='https://github.com/Malik-93/Game' target='_blank'  rel="noopener noreferrer">Github</a></Button>              
            <span><Button colored><a href='https://mudassir-auth093.firebaseapp.com/' target='_blank'  rel="noopener noreferrer" style={{marginLeft: '10em;'}}>Live Demo</a></Button></span>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'center / cover'}} >
            <img src={project3} alt='' style={{width: '120%'}} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
            <Button colored><a href='http://www.etaxiaccounting.com/' target='_blank'  rel="noopener noreferrer">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } 
    else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={trim} alt='' style={{ width: '40%', }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <Button colored><a href='https://github.com/Malik-93/React-Native-Trim-Barber-App' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <Button colored><a href='https://ranksol.herokuapp.com/' target='_blank' rel="noopener noreferrer">APK</a></Button>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px' }} >
              <img src={uflix} alt='' style={{ width: '40%' }} />
            </CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <Button colored><a href='https://github.com/Malik-93/Uflix' target='_blank' rel="noopener noreferrer">Github</a></Button>
              <span><Button colored><a href='https://mudassir-auth093.firebaseapp.com/' target='_blank' rel="noopener noreferrer" style={{ marginLeft: '10em;' }}>APK</a></Button></span>
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
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab><b><em>React</em></b></Tab>
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
