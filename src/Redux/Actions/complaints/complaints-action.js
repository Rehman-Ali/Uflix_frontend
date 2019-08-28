import { GET_ALL_COMPLAINTS, GET_ERRORS, UPDATE_STATUS, DELETE_COMPLAIN } from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const getAllComplaints = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/admin/complaints`)
        .then(res => {
            dispatch({
                type: GET_ALL_COMPLAINTS,
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


export const updateStatus = (formData) => dispatch => {
    console.log('Client form data :', formData)
    const {_id } = formData
    axios
        .patch(`${productionBaseURL}/api/staff/complaints/${_id}`, formData)
        .then(res => {
            console.log('Then', res.data)
            dispatch({
                type: UPDATE_STATUS,
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



export const deletComplain = (id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/staff/complaints/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_COMPLAIN,
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
