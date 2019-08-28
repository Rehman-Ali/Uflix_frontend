import { GET_ERRORS, LOADING, UPDATE_MOVIE, DELETE_MOVIE, UPLOAD_MOVIE, GET_ALL_MOVIES } from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const uploadMovie = (formData, history) => dispatch => {
    axios
        .post(`${productionBaseURL}/api/admin/uploads/movie`, formData)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: UPLOAD_MOVIE,
                payload: res.data
            })
            setTimeout(() => {
                console.log('History running now')
                history.push('/movies/allMoives')
            }, 5000);
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const getAllMovies = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/movies/all_movies`)
        .then(res => {
            dispatch({
                type: GET_ALL_MOVIES,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateMovie = (id, formData) => dispatch => {
    axios
        .patch(`${productionBaseURL}/api/admin/uploads/movie/${id}`, formData)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: UPDATE_MOVIE,
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const deleteMovie = (id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/admin/uploads/movie/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: LOADING,
                payload: true
            })
            dispatch({
                type: DELETE_MOVIE,
                payload: res.data
            })
            dispatch({
                type: LOADING,
                payload: false
            })
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};