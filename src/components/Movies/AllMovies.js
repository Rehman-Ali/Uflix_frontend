import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllMovies, deleteMovie } from '../../Redux/Actions/Movies/Movies-actions';
import { Loading } from '../Loading';
import UpdateMovie from './update-movie-modal'
import { productionBaseURL } from '../../config/keys';

class AllMovies extends Component {
    state = {
        isLoading: true,
        shouldModalOpen: false,
        singleMovie: {},
        messageShow: false
    }
    componentDidMount() {
        this.props.dispatch(getAllMovies())
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 4000);
    }
    deleteMovieHandler = (id) => {
        this.setState({ isLoading: true, messageShow: true })
        this.props.dispatch(deleteMovie(id))
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000);
        setTimeout(() => {
            this.setState({ messageShow: false })
        }, 5000);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.allMovies) {
            this.props.dispatch(getAllMovies())
         } else if(nextProps.message){
            this.props.dispatch(getAllMovies())
         }
    } 
    render() {
        const { isLoading, shouldModalOpen, singleMovie, messageShow } = this.state
        const { movies } = this.props.allMovies
        const { reduxLoading, deletedMovie } = this.props
        console.log('reduxLoading :', reduxLoading)
        if (isLoading) {
            return (
                <Loading
                    title="Please wait...."
                />
            )
        }
        else {
            return (
                <Grid style={{ height: 'auto', width: "90%" }}>
                    <Cell col={12} className="users-container">
                        <Table responsive striped bordered hover variant="light" style={{ height: 'auto' }}>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Language</th>
                                    <th>Genre</th>
                                    <th>Cast</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>createdAt</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.length >= 0 ? movies.map((mov, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{mov.title}</td>
                                            <td>{mov.language}</td>
                                            <td>{mov.genre}</td>
                                            <td>{mov.cast}</td>
                                            <td>{mov.description}</td>
                                            <td><img src={`${productionBaseURL}/${mov.image}`} alt='movie-img' height={"80px"} /></td>
                                            <td>{mov.createdAt}</td>
                                            <td><Button variant="outline-info" onClick={() => this.setState({ shouldModalOpen: !this.state.shouldModalOpen, singleMovie: mov })}>Edit</Button></td>
                                            <td><Button variant="outline-danger" onClick={() => this.deleteMovieHandler(mov._id)}>Delete</Button></td>
                                        </tr>
                                    )
                                })
                                    : <tr>
                                        <td>There is no video in db</td>
                                    </tr>
                                }
                            </tbody>
                        </Table>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            messageShow ? <span style={{color: 'red', fontWeight: 'bold', alignSelf: 'center', textAlign: 'center'}}>{deletedMovie.message ? deletedMovie.message : ''}</span> : ''
                        }
                    </div>
                    </Cell>
                    {shouldModalOpen ?
                        <UpdateMovie
                            singleMovieProp={singleMovie}
                        /> : ''}
                </Grid>
            )
        }
    }
}

const mapStateToProps = (store) => {
    return {
        allMovies: store.MoviesReducer.allMovies,
        message: store.MoviesReducer.updates.message,
        deletedMovie: store.MoviesReducer.deletes,
        reduxLoading: store.loading.isLoading,

    }
}

export default connect(mapStateToProps)(AllMovies);
