import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import icon from '../../assests/icon.png';
import { updateStaff } from "../../Redux/Actions/staff/staff-actions";
import { Loading } from "../Loading";
class UpdateStaff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.singleStaffMemberProp._id,
            fname: props.singleStaffMemberProp.fname,
            lname: props.singleStaffMemberProp.lname,
            email: props.singleStaffMemberProp.email,
            errors: {},
            isModalOpen: false,
            singleStaffMember: props.singleStaffMemberProp,
            isLoading: false,

        };
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    componentDidMount() {
        this.toggleModal()
    }
    // onChangeHandler = (e) => {
    //     var check = e.target.value
    //     var newCheck;
    //     if (check === 'false') {
    //         newCheck = false
    //     }
    //     else if (check === 'true') {
    //         newCheck = true
    //     }
    //     this.setState({
    //         [e.target.name]: !newCheck,
    //         isModalOpen: false
    //     });
    // }
    onSubmit = e => {
        e.preventDefault();
        // var arr = []
        // for (var key in this.state) {
        //     if (this.state[key] === true) {
        //         arr.push(" " + key);
        //     }
        // }
        // let genre = arr.toString()
       this.setState({ isLoading: true })
        const { id, fname, lname, email } = this.state;

        const formData = {
            _id: id,
            fname,
            lname,
            email,
        }
        // var formData = new FormData();
        // formData.append('fname', fname)
        // formData.append('lname', lname)
        // formData.append('email', email)
        // formData.append('cardNumber', cardNumber)
        // formData.append('cardCVV', cardCVV)
        // formData.append('willPay', willPay)
        this.props.dispatch(updateStaff(formData));
        setTimeout(() => {
            this.setState({
                // isModalOpen: !this.state.isModalOpen,
               isLoading: false
            })
            this.toggleModal()
        }, 1000);
    };
    render() {
        const {
            fname, lname, email, isModalOpen, isLoading

        } = this.state
 
        const { message, apiLoading } = this.props
        if (isLoading || apiLoading || message ) {
            return (
                <div style={{ alignContent:'center', marginLeft:'500px' }}>
                    <Loading
                        title='Please wait record updating'
                    />
                </div>
            )
        }
        return (
            <div>
                <Modal
                    size="lg"
                    show={isModalOpen}
                    onHide={this.toggleModal}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton style={{ backgroundColor: 'red' }}>

                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: '#000' }}>
                        <Grid className="upload-grid">
                            <Cell col={6}>
                                <div>
                                    <img src={icon} height={'100px'} alt="brand Logo" />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <h4 style={{ alignSelf: 'center' }}>Update Staff</h4>
                                </div>
                                <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Form.Group as={Row} controlId="fname">
                                        <Col sm={2}>
                                            <Form.Label>
                                                First Name:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="First Name" value={fname} onChange={e => this.setState({ fname: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="lname">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Last Name:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Last Name" value={lname} onChange={e => this.setState({ lname: e.target.value })} />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="email">
                                        <Col sm={2}>
                                            <Form.Label>
                                                email:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="email" value={email} onChange={e => this.setState({ email: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    
                                    <Form.Group as={Row} controlId="formHorizontalEmail" style={{ display: 'flex', justifyContent: 'center', }}>
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button className="btn-block" style={{ backgroundColor: 'red', borderColor: 'red', }} onClick={this.onSubmit}>Submit</Button>
                                        </Col>
                                    </Form.Group>
                                    {/* <span style={{ color: '#fff', fontSize: '20px', alignSelf: 'center' }}>{message}</span> */}
                                </Form>
                            </Cell>
                        </Grid>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        message: store.allUsers.updates.message,
        apiLoading: store.loading.isLoading
    }
}
export default connect(mapStateToProps)(UpdateStaff);