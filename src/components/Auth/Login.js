import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Grid, Cell } from 'react-mdl';
import icon from './icon.png'
import { loginUser } from '../../Redux/Actions/authActions';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Loading } from '../Loading';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    loginHandler = () => {
        const { email, password } = this.state
        const userData = {
            email,
            password
        }
        this.setState({ isLoading: true })
        this.props.dispatch(loginUser(userData))
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000);
    }
    render() {
        const { email, password, errors, isLoading } = this.state
        if (isLoading) {
            return (
                <Loading
                    title="Please wait...."
                />
            )
        }
        return (
            <div>
                <Grid className="login-grid">
                    <Cell col={6}>
                        <div>
                            <img src={icon} height={'100px'} alt="brand Logo" />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h4 style={{ alignSelf: 'center' }}>Login</h4>
                        </div>
                        <Form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                            <Form.Group as={Row} controlId="formGroupEmail">
                                <Col sm={2}>
                                    <Form.Label>
                                        Email:
                                 </Form.Label>
                                </Col>
                                <Col sm={12}>
                
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => this.setState({ email: e.target.value })}
                                        className={classnames("", {
                                            invalid: errors.email || errors.emailNotFound
                                        })}
                                    />
                                </Col>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <span className="red-text" style={{ color: 'red', fontWeight: 'bold', }}>
                                        {errors.email}
                                        {errors.emailNotFound}
                                    </span>
                                </div>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formGroupPassword">
                                <Col sm={2}>
                                    <Form.Label>
                                    Password:
                                 </Form.Label>
                                </Col>
                                <Col sm={12}>
                                    <Form.Control type="password" placeholder="Password" value={password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        className={classnames("", {
                                            invalid: errors.password || errors.passwordIncorrect
                                        })}
                                    />
                                </Col>
                                    <span className="red-text" style={{ color: 'red', fontWeight: 'bold', }}>
                                        {errors.password}
                                        {errors.passwordIncorrect}
                                    </span>
                            </Form.Group>

                            <Form.Group as={Row}>
                            <Col sm={12}>
                                <Form.Group controlId="button">
                                    <Button className="btn btn-block" style={{ backgroundColor: 'red', borderColor: 'red' }} onClick={this.loginHandler}>Login</Button>
                                </Form.Group>

                            </Col>
                            </Form.Group>
                        </Form>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps)(Login)