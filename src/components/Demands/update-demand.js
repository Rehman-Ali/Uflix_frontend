import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import icon from '../../assests/icon.png';
import { updateDemand } from "../../Redux/Actions/demands/demands-actions";
import { Loading } from "../Loading";
class UpdateDemand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.singleDemandProp._id,
            title1: props.singleDemandProp.title1,
            title2: props.singleDemandProp.title2,
            title3: props.singleDemandProp.title3,
            errors: {},
            isModalOpen: false,
            singleDemand: props.singleDemandProp,
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
        const { id, title1, title2, title3 } = this.state;

        const formData = {
            _id: id,
            title1,
            title2,
            title3,
        }
        // var formData = new FormData();
        // formData.append('fname', fname)
        // formData.append('lname', lname)
        // formData.append('email', email)
        // formData.append('cardNumber', cardNumber)
        // formData.append('cardCVV', cardCVV)
        // formData.append('willPay', willPay)
        this.props.dispatch(updateDemand(formData));
        // this.setState({
        //     isModalOpen: !this.state.isModalOpen,
        // })
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
            title1, title2, title3, isModalOpen, isLoading

        } = this.state
        const { message, apiLoading } = this.props
        if (isLoading || apiLoading ) {
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
                                    <h4 style={{ alignSelf: 'center' }}>Update Demand</h4>
                                </div>
                                <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Form.Group as={Row} controlId="title1">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Title 1:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter 1st Title" value={title1} onChange={e => this.setState({ title1: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="title2">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Title 2:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter 2nd Title" value={title2} onChange={e => this.setState({ title2: e.target.value })} />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="title3">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Title 3:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter 3rd Title" value={title3} onChange={e => this.setState({ title3: e.target.value })} />
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
       message: store.allDemands.updates.message,
        apiLoading: store.loading.isLoading
    }
}
export default connect(mapStateToProps)(UpdateDemand);