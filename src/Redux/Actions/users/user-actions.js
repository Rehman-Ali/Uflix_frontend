import { GET_ALL_USERS, GET_ERRORS, DELETE_USER, LOADING, UPDATE_USER } from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const getAllUsers = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/admin/users/all_users`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: LOADING,
                payload: true
            })
            dispatch({
                type: GET_ALL_USERS,
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

export const deleteUser = (id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/admin/users/${id}`)
        .then(res => {
            dispatch({ 
                type: LOADING,
                payload: true            
            })
            dispatch({
                type:DELETE_USER,
                payload: res.data
            })
            
            dispatch({ 
                type: LOADING,
                payload: false          
            })
        })
            // console.log(res.data)
            // dispatch({
            //     type: DELETE_USER,
            //     payload: res.data
            // })
       // })
        .catch(err =>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
            
            
        );
};


export const updateuser = (formData) => dispatch => {
    console.log('Client form data :', formData)
    const {_id } = formData
    axios
        .patch(`${productionBaseURL}/api/admin/users/${_id}`, formData)
        .then(res => {
            console.log('Then', res.data)
            dispatch({
                type: UPDATE_USER,
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
