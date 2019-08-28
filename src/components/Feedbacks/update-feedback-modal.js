import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import { connect } from "react-redux";
import icon from '../../assests/icon.png';
import { updateFeedback } from "../../Redux/Actions/feedbacks/feedback-actions";
import { Loading } from "../Loading";
class UpdateFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.singleFeedbackProp._id,
            title: props.singleFeedbackProp.title,
            review: props.singleFeedbackProp.review,
            ratings: props.singleFeedbackProp.ratings,
            errors: {},
            isModalOpen: false,
            singleFeedback: props.singleFeedbackProp,
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
        const { id, title, review, ratings } = this.state;

        const formData = {
            _id: id,
            title,
            review,
            ratings,
        }
        // var formData = new FormData();
        // formData.append('fname', fname)
        // formData.append('lname', lname)
        // formData.append('email', email)
        // formData.append('cardNumber', cardNumber)
        // formData.append('cardCVV', cardCVV)
        // formData.append('willPay', willPay)
        this.props.dispatch(updateFeedback(formData));
        // this.setState({
            
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
            title, review, ratings, isModalOpen,isLoading

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
                                    <h4 style={{ alignSelf: 'center' }}>Update Feedback</h4>
                                </div>
                                <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Form.Group as={Row} controlId="title">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Title:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter Title" value={title} onChange={e => this.setState({ title: e.target.value })} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="Review">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Review:
                                 </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter Review" value={review} onChange={e => this.setState({ review: e.target.value })} />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="Ratings">
                                        <Col sm={2}>
                                            <Form.Label>
                                                Ratings:
                                                    </Form.Label>
                                        </Col>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="Enter Ratings" value={ratings} onChange={e => this.setState({ ratings: e.target.value })} />
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
         message: store.allFeedback.updates.message,
        apiLoading: store.loading.isLoading
    }
}
export default connect(mapStateToProps)(UpdateFeedback);