import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Table, Button } from 'react-bootstrap';
import { getAllComplaints, deletComplain } from '../../Redux/Actions/complaints/complaints-action'
import { connect } from 'react-redux';
import { Loading } from '../Loading';
import UpdateStatus from './update-status';

class Complaints extends Component {
  state = {
    isLoading: true,
    singleComplain: {},
    shouldModalOpen: false,
    messageShow:false
  }
  componentDidMount() {
    this.props.dispatch(getAllComplaints())
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.allComplaints) {
      this.props.dispatch(getAllComplaints())
    } else if (nextProps.message) {
      this.props.dispatch(getAllComplaints())
    }
    else if (nextProps.delmessage) {
      this.props.dispatch(getAllComplaints())
    }

  }

  deleteHandler = (id) => {
    this.setState({ isLoading: true,
      messageShow:true })
    this.props.dispatch(deletComplain(id))
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }


  render() {
    const { isLoading,messageShow, shouldModalOpen, singleComplain } = this.state
    const { allComplaints } = this.props.complaints
    const {delmessage } = this.props;
   
    if (isLoading) {
      return (
        <Loading 
        title="Please wait..."
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
                  <th>Subject</th>
                  <th>Complaint</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allComplaints.map((comp, index) => {
                  return (
                    <tr key={index}>
                      <td>{comp.subject}</td>
                      <td>{comp.complaint}</td>
                      <td>{comp.status}</td>
                      <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleComplain: comp, messageShow: false })}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={() => this.deleteHandler(comp._id)}>Delete</Button></td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            messageShow ? <span style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center'}}>{delmessage ? delmessage : ''}</span> : ''
                        }
                    </div>
          </Cell>
          {shouldModalOpen ?
            <UpdateStatus
              singleComplainProp={singleComplain}
            /> : ''}
        </Grid>
      )
    }
  }
}

const mapStateToProps = (store) => {
  return {
    complaints: store.allComplaints.allComplains,
    message: store.allComplaints.updates.message,
    delmessage: store.allComplaints.deletes.message,
    
  }
}

export default connect(mapStateToProps)(Complaints);
