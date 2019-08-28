import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../../Redux/Actions/users/user-actions';
import { Loading } from '../Loading';
import UpdateUser from './update-user-modal';


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      singleUser: {},
      shouldModalOpen:false,
      messageShow: false
    };
  }
  componentDidMount() {
    this.props.dispatch(getAllUsers())
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   if (nextProps.users)
  //     this.props.dispatch(getAllUsers())
  // }
  deleteHandler = (id) => {
    this.setState({ isLoading: true,
    messageShow: true })
    this.props.dispatch(deleteUser(id))
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  render() {
    console.log("testing parent");
    const { isLoading, shouldModalOpen, singleUser, messageShow } = this.state
    const { users } = this.props.users;
    const {delmessage} = this.props;
    if (isLoading) {
      return (
      <div style={{alignContent:'center'}}>
         <Loading
          title="Plase wait...."
        />

      </div>
             )
    } else {

      return (
        <Grid className="users-grid">
          <Cell col={12} className="users-container">
            <Table responsive striped bordered hover variant="light">
              <thead>
                <tr>
                  {/* <th>#Id</th> */}
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Card Number</th>
                  {/* <th>Card Expiry Date</th> */}
                  <th>Card Cvv</th>
                  <th>Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      {/* <td>{user._id}</td> */}
                      <td>{user.fname}</td>
                      <td>{user.lname}</td>
                      <td>{user.email}</td>
                      <td>{user.cardNumber}</td>
                      {/* <td>{user.cardExpirationDate}</td> */}
                      <td>{user.cardCVV}</td>
                      <td>{JSON.stringify(user.willPay)}</td>
                      <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleUser: user })}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={() => this.deleteHandler(user._id)}>Delete</Button></td>
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
                        <UpdateUser
                            singleUserProp={singleUser}
                        /> : ''}
        </Grid>
      )
    }
  }
}
const mapStateToProps = (store) => {
  return {
    users: store.allUsers.allUsers,
    delmessage: store.allUsers.deletes.message
  
  }
}
export default connect(mapStateToProps)(Users);
