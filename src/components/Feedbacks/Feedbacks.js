import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Table, Button } from 'react-bootstrap';
import { getAllFeedbacks, deleteFeedback } from '../../Redux/Actions/feedbacks/feedback-actions';
import { connect } from 'react-redux';
import { Loading } from '../Loading';
import UpdateFeedback from './update-feedback-modal';

class Feedbacks extends Component {
  state = {
    isLoading: true,
    singleFeedback: {},
    shouldModalOpen:false,
    messageShow: false
 
  };
  
  componentDidMount() {
    this.props.dispatch(getAllFeedbacks())
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    if (nextProps.allFeedback){
      this.props.dispatch(getAllFeedbacks())
    }else if(nextProps.message){
      this.props.dispatch(getAllFeedbacks())
   } else if (nextProps.delmessage) {
    this.props.dispatch(getAllFeedbacks())
  }


  }

  deleteHandler = (id) => {
    this.setState({ isLoading: true,
      messageShow:true })
    this.props.dispatch(deleteFeedback(id))
    setTimeout(() => {
      this.setState({ isLoading: false ,
        })
    }, 3000);
  }
  

  render() {
    const { isLoading , singleFeedback, shouldModalOpen, messageShow} = this.state
    const { allFeedbacks } = this.props.feedbacks;
    const {delmessage } = this.props;
    console.log(allFeedbacks)
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
                  <th>Title</th>
                  <th>Review</th>
                  <th>Ratings</th>
                </tr>
              </thead>
              <tbody>
                {allFeedbacks.map((feed, index) => {
                  return (
                    <tr key={index}>
                      <td>{feed.title}</td>
                      <td>{feed.review}</td>
                      <td>{feed.ratings}</td>
                      <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleFeedback: feed , messageShow: false})}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={() => this.deleteHandler(feed._id)}>Delete</Button></td>
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
                        <UpdateFeedback
                            singleFeedbackProp={singleFeedback}
                        /> : ''}

        </Grid>
      )
    }
  }
}

const mapStateToProps = (store) => {
  return {
    feedbacks: store.allFeedback.allFeedbacks,
    message: store.allFeedback.updates.message,
    delmessage: store.allFeedback.deletes.message,

  }
}

export default connect(mapStateToProps)(Feedbacks);
