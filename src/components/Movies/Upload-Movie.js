import React, { Component } from "react";
import { Grid, Cell, } from 'react-mdl';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { connect } from "react-redux";
import icon from '../../assests/icon.png';
import { uploadMovie } from "../../Redux/Actions/Movies/Movies-actions";
import { Loading } from "../Loading";
import isEmpty from 'is-empty';
class UploadMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            language: "",
            cast: "",
            image: "",
            video: "",
            message: props.message,
            errors: {},
            Horror: false,
            Comady: false,
            Fantasy: false,
            Science: false,
            Action: false,
            Thriller: false,
            Animation: false,
            Historical: false,
            Romance: false,
            Darama: false,
            Crime: false,
            Political: false,
            isLoading: false,
        };
    }
    onChangeHandler = (e) => {
        var check = e.target.value
        var newCheck;
        if (check === 'false') {
            newCheck = false
        }
        else if (check === 'true') {
            newCheck = true
        }
        this.setState({
            [e.target.name]: !newCheck,
        });
    }
    onSubmit = e => {
        e.preventDefault();
        const { title, description, language, cast, image, video, } = this.state;
        var arr = []
        for (var key in this.state) {
            if (this.state[key] === true) {
                arr.push(" " + key);
            }
        }
        let genre = arr.toString()
        this.setState({ isLoading: true })
        let formData = new FormData();
        formData.append('title', title)
        formData.append('description', description)
        formData.append('language', language)
        formData.append('genre', genre)
        formData.append('cast', cast)
        formData.append('image', image)
        formData.append('video', video)
        this.props.dispatch(uploadMovie(formData, this.props.history));
        setTimeout(() => {
            this.setState({
                title: "",
                description: "",
                language: "",
                genre: {},
                cast: '',
                image: "",
                video: "",
                isLoading: false,
                messageShow: true
            })
        }, 8000);
        setTimeout(() => {
            this.setState({ messageShow: false })
        }, 5000);
    };
    render() {
        const { title, description, language,
            cast, isLoading, messageShow, Horror,
            Comady, Fantasy, Science, Action, Thriller, Animation,
            Historical, Romance, Darama, Crime, Political,
        } = this.state
        const { movieUploaded } = this.props;
        console.log('movieMessage :', movieUploaded.message)
        if (isLoading) {
            return (
                <Loading
                    title="Please wait movie uploading...."
                />
            )
        }
        return (
            <div>
                {!isEmpty(movieUploaded) ? () => this.handleLoader() : ''}
                <Grid className="upload-grid">
                    <Cell col={6}>
                        <div>
                            <img src={icon} height={'100px'} alt="brand Logo" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h4 style={{ alignSelf: 'center' }}>Upload Movie</h4>
                        </div>
                        <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Form.Group as={Row} controlId="Title">
                                <Col sm={2}>
                                    <Form.Label>
                                        Title :
                                 </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Title" value={title} onChange={e => this.setState({ title: e.target.value })} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Language:
                                 </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Language" value={language} onChange={e => this.setState({ language: e.target.value })} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="Genre">
                                <Col sm={2}>
                                    <Form.Label>
                                        Genre:
                                 </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Group as={Row} controlId="formBasicChecbox" style={{ display: 'flex', flexDirection: 'row', }}>
                                        <Form.Check type="checkbox" label="Horror" name="Horror" value={Horror} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Comady" name="Comady" value={Comady} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Fantasy" name="Fantasy" value={Fantasy} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Science" name="Science" value={Science} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Action" name="Action" value={Action} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Thriller" name="Thriller" value={Thriller} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Animation" name="Animation" value={Animation} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Historical" name="Historical" value={Historical} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Romance" name="Romance" value={Romance} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Darama" name="Darama" value={Darama} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Crime" name="Crime" value={Crime} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                        <Form.Check type="checkbox" label="Political" name="Political" value={Political} onChange={this.onChangeHandler} style={{ margin: 4 }} />
                                    </Form.Group>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Cast:
                                 </Form.Label>
                                </Col>
                                <Col sm={10}>
                                    <Form.Control as="textarea" type="text" rows="3" placeholder="Cast" value={cast} onChange={e => this.setState({ cast: e.target.value })} />
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
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalEmail" style={{ display: 'flex', justifyContent: 'center', }}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className="btn-block" style={{ backgroundColor: 'red', borderColor: 'red', }} onClick={this.onSubmit}>Submit</Button>
                                </Col>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        messageShow ? <span style={{ color: '#fff', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center' }}>{movieUploaded.message ? movieUploaded.message : ''}</span> : ''
                                    }
                                </div>
                            </Form.Group>
                        </Form>
                    </Cell>
                </Grid>

            </div>
        );
    }
}
const mapStateToProps = (store) => {
    return {
        movieUploaded: store.MoviesReducer.uploads,
        apiLoading: store.loading.isLoading
    }
}
export default connect(mapStateToProps)(UploadMovie);