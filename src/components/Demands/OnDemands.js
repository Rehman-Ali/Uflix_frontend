import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { getAllDemands, deleteDemand } from '../../Redux/Actions/demands/demands-actions';
import { Loading } from '../Loading';
import UpdateDemand from './update-demand';

class OnDemands extends Component {
  state = {
    isLoading: true,
    singleDemand: {},
    shouldModalOpen: false,
    messageShow: false,
    //updatemessageShow: false
  }
  componentDidMount() {
    this.props.dispatch(getAllDemands())
    setTimeout(() => {
      this.setState({
        isLoading: false,
       // updatemessageShow: true
      })
    }, 1000);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.allDemands) {
      this.props.dispatch(getAllDemands())
    } else if (nextProps.message) {
      this.props.dispatch(getAllDemands())
    } else if (nextProps.delmessage) {

      this.props.dispatch(getAllDemands())
    }


  }

  deleteHandler = (id) => {
    this.setState({
      isLoading: true,
       messageShow: true,
      // updatemessageShow: false
    })
    this.props.dispatch(deleteDemand(id))
    setTimeout(() => {
      this.setState({
        isLoading: false,

      })
    }, 3000);
  }



  render() {
    const { isLoading, singleDemand, updatemessageShow, messageShow, shouldModalOpen } = this.state
    const { allDemands } = this.props.demands;
    const { delmessage, message } = this.props;
    if (isLoading) {
      return (
        <Loading
          title="please wait..."
        />
      )
    }
    else {
      return (
        <Grid className="users-grid">
          <Cell col={12} className="users-container">
            <Table responsive striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Title 1</th>
                  <th>Title 2</th>
                  <th>Title 3</th>
                </tr>
              </thead>
              <tbody>
                {allDemands.map((dem, index) => {
                  return (
                    <tr key={index}>
                      <td>{dem.title1}</td>
                      <td>{dem.title2}</td>
                      <td>{dem.title3}</td>
                      <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleDemand: dem , messageShow: false})}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={() => this.deleteHandler(dem._id)}>Delete</Button></td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {

                messageShow ? <span style={{ color: 'red', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>{delmessage ? delmessage : ''}</span> : ''
              }
              


            </div>
          </Cell>
          
          {shouldModalOpen ?
            <UpdateDemand
              singleDemandProp={singleDemand}
            /> : ''}

        </Grid>
      )
    }
  }
}

const mapStateToProps = (store) => {
  return {
    demands: store.allDemands.allDemands,
    message: store.allDemands.updates.message,
    delmessage: store.allDemands.deletes.message,

  }
}

export default connect(mapStateToProps)(OnDemands);
