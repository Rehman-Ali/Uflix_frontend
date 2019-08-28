import { GET_ALL_DEMANDS, GET_ERRORS, DELETE_DEMAND, UPDATE_DEMAND } from '../types';
import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
export const getAllDemands = () => dispatch => {
    axios
        .get(`${productionBaseURL}/api/admin/demands`)
        .then(res => {
            dispatch({
                type: GET_ALL_DEMANDS,
                payload: res.data
            })
        })
        .catch(err =>{
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
            
        );
};



export const updateDemand = (formData) => dispatch => {
    console.log('Client form data :', formData)
    const {_id } = formData
    axios
        .patch(`${productionBaseURL}/api/admin/demand/${_id}`, formData)
        .then(res => {
            console.log('Then', res.data)
            dispatch({
                type: UPDATE_DEMAND,
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

export const deleteDemand = (_id) => dispatch => {
    axios
        .delete(`${productionBaseURL}/api/admin/demand/${_id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_DEMAND,
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
