import { GET_ALL_STAFF, GET_ERRORS, DELETE_STAFF, LOADING , UPDATE_STAFF} from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const getAllStaff = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/admin/staff/all_staff`)
        .then(res => {
            dispatch({
                type: GET_ALL_STAFF,
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

export const deleteStaff = (id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/admin/staff/${id}`)
        .then(res => {
            dispatch({ 
                type: LOADING,
                payload: true            
            })
            dispatch({
                type: DELETE_STAFF,
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


export const updateStaff = (formData) => dispatch => {
    console.log('Client form data :', formData)
    const {_id } = formData
    axios
        .patch(`${productionBaseURL}/api/admin/staff/${_id}`, formData)
        .then(res => {
            console.log('Then', res.data)
            dispatch({
                type: UPDATE_STAFF,
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

