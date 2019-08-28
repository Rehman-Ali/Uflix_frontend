import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import icon from '../../assests/icon.png';
import { updateuser } from "../../Redux/Actions/users/user-actions";
import { Loading } from "../Loading";
class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.singleUserProp._id,
            fname: props.singleUserProp.fname,
            lname: props.singleUserProp.lname,
            email: props.singleUserProp.email,
            cardNumber: props.singleUserProp.cardNumber,
            cardCVV: props.singleUserProp.cardCVV,
            willPay: props.singleUserProp.willPay,
            cardExpirationDate: props.singleUserProp.cardExpirationDate,
            errors: {},
            isModalOpen: false,
            singleUser: props.singleUserProp,
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
        const { id, fname, lname, email, cardNumber, cardCVV, willPay, cardExpirationDate, isLoading } = this.state;
        
        const formData = {
            _id: id,
            fname,
            lname,
            email,
            cardNumber,
            cardCVV,
            willPay,
            cardExpirationDate
        }
        // var formData = new FormData();
        // formData.append('fname', fname)
        // formData.append('lname', lname)
        // formData.append('email', email)
        // formData.append('cardNumber', cardNumber)
        // formData.append('cardCVV', cardCVV)
        // formData.append('willPay', willPay)
        this.setState({ isLoading: true })
        this.props.dispatch(updateuser(formData));
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
        setTimeout(() => {
            this.setState({
                // isModalOpen: !this.state.isModalOpen,
               isLoading: false
            })
           // this.toggleModal()
        }, 1000);
    };
    render() {
    console.log("testing child");

        const {
            fname, lname, email, cardNumber, cardCVV, willPay, isModalOpen, cardExpirationDate, isLoading

        } = this.state

        const { message, apiLoading } = this.props
        if (isLoading || apiLoading) {
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
                                    <h4 style={{ alignSelf: 'center' }}>Update User</h4>
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

                                    <Form.Group as={Row} controlId="cardNumber">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Card Number:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Credit Card Number" value={cardNumber} onChange={e => this.setState({ cardNumber: e.target.value })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="cardCVV">
                                        <Col sm={2}>
                                            <Form.Label>
                                                cardCVV:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter your cardCVV" value={cardCVV} onChange={e => this.setState({ cardCVV: e.target.value })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="cardCVV">
                                        <Col sm={2}>
                                            <Form.Label>
                                                cardExpirationDate:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter your cardExpirationDate" value={cardExpirationDate} onChange={e => this.setState({ cardExpirationDate: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="willPay">
                                        <Col sm={2}>
                                            <Form.Label>
                                                status:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter your status" value={willPay} onChange={e => this.setState({ willPay: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    {/* <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Cast:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control as='textarea' rows="3" type="text" placeholder="Cast" value={cast} onChange={e => this.setState({ cast: e.target.value })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Image">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Image:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="file" placeholder="image" style={{ width: 400 }} onChange={e => this.setState({ image: e.target.files[0] })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Col sm={2}>
                                            <Form.Label >
                                                Video:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="file" placeholder="video" style={{ width: 400 }} onChange={e => this.setState({ video: e.target.files[0] })} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Description">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Description:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control as="textarea" type="text" rows="5" placeholder="Description" value={description} onChange={e => this.setState({ description: e.target.value })} />
                                        </Col>
                                    </Form.Group> */}
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
        // message: store.allUsers.updates.message,
        apiLoading: store.loading.isLoading
    }
}
export default connect(mapStateToProps)(UpdateUser);