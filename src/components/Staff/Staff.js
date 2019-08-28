import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Table, Button } from 'react-bootstrap';
import { getAllStaff, deleteStaff } from '../../Redux/Actions/staff/staff-actions'
import { connect } from 'react-redux';
import { Loading } from '../Loading';
import UpdateStaff from './update-staff-modal';


class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataLoading: props.dataLoading,
      singleStaffMember: {},
      shouldModalOpen:false,
      messageShow: false

    }
  }
  componentDidMount() {
    this.props.dispatch(getAllStaff())
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 3000);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props.dispatch(getAllStaff())
  }
  deleteHandler = (id) => {
    this.setState({ isLoading: true,
    messageShow: true })
    this.props.dispatch(deleteStaff(id))
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000);
  }
  render() {
    const { isLoading,shouldModalOpen, singleStaffMember , messageShow} = this.state
    const { staff } = this.props.staff;
    const {delmessage} = this.props;  
    if (isLoading) {
      return (
        <Loading
          title="Plase wait...."
        />
      )
    } else {
      return (
        <Grid className="users-grid">
          <Cell col={12} className="users-container">
            <Table responsive striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>#Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((stf, index) => {
                  return (
                    <tr key={index}>
                      <td>{stf.staffID}</td>
                      <td>{stf.fname}</td>
                      <td>{stf.lname}</td>
                      <td>{stf.email}</td>
                      <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleStaffMember: stf , messageShow: false})}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={() => this.deleteHandler(stf._id)}>Delete</Button></td>
                    </tr>
                  )
                })
                }
              </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            messageShow ? <span style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center'}}>{delmessage ? delmessage : ''}</span> : ''
                        }
                    </div>
          </Cell>
          {shouldModalOpen ?
                        <UpdateStaff
                            singleStaffMemberProp={singleStaffMember}
                        /> : ''}

        </Grid>
      )
    }
  }
}
const mapStateToProps = (store) => {
  return {
    staff: store.allStaff.allStaff,
    dataLoading: store.loading.isLoading,
    delmessage: store.allStaff.deletes.message,
  }
}

export default connect(mapStateToProps)(Staff);
