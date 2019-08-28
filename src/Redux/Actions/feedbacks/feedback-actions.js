import { GET_ALL_FEEDBACKS, GET_ERRORS, UPDATE_FEEDBACK, DELETE_FEEDBACK } from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const getAllFeedbacks = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/admin/feedbacks`)
        .then(res => {
            dispatch({
                type: GET_ALL_FEEDBACKS,
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


export const updateFeedback = (formData) => dispatch => {
    console.log('Client form data :', formData)
    const {_id } = formData
    axios
        .patch(`${productionBaseURL}/api/admin/feedback/${_id}`, formData)
        .then(res => {
            console.log('Then', res.data)
            dispatch({
                type: UPDATE_FEEDBACK,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('Catch', err )
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
        );
};

export const deleteFeedback = (_id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/admin/feedback/${_id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_FEEDBACK,
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
