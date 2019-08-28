import axios from 'axios';
import {productionBaseURL} from "../../../config/keys";
//  UPDATE_PRODUCT,
import {
    ADD_PRODCUT, PRODUCT_LOADING_START, PRODUCT_LOADING_END, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, DELETE_PRODUCT, GET_ERRORS } from './types'

export const addProduct = (formData) => dispatch => {
    axios
        .post('/api/products/addProduct', formData)
        .then(res => {
            console.log(res.data)
            dispatch(loadingStart(true))
            dispatch({
                type: ADD_PRODCUT,
                payload: res.data
            })
            dispatch(loadingEnd(true))
        })
        .catch(err => {
            console.log('Client Error to adding product:', err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            dispatch(loadingEnd(false))
        })
}
export const getAllProducts = () => dispatch => {
    axios.get('/api/products')
    .then(res => {
        dispatch(loadingStart(true))
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res.data.data 
        })
        dispatch(loadingEnd(false))
    })
    .catch(err => {
        console.log('Client error to getting all products', err.response.data)
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        dispatch(loadingEnd(false))    
    })
}
export const getOneProduct = (id) => dispatch => {
    axios.get(`/api/products/${ id }`)
    .then(res => {
        dispatch(loadingStart(true))
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res.data.data
        })
        dispatch(loadingEnd(false))
    })
    .catch(err => {
        console.log('Client get Product one error:', err )
        dispatch({
            type:GET_ERRORS,
            payload: err.response.data
        })
        dispatch(loadingEnd(false))
    })
}

export const deleteProduct = (id, history) => dispatch => {
    axios.delete(`/api/products/${id}`)
    .then(res => {
        dispatch(loadingStart(true))
        dispatch({
            type: DELETE_PRODUCT,
            payload: {}
        })
        setTimeout(() => {
            dispatch(loadingEnd(false))
            history.push('/login')
        }, 3000);
    })
    .catch(err => {
        // console.log('Client product deleting:', err.response.data.message )
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data 
        })
        dispatch(loadingEnd( false ))
    })
}

export const loadingStart = (payload) => {
    return {
        type: PRODUCT_LOADING_START,
        payload,
    }
}


export const loadingEnd = (payload) => {
    return {
        type: PRODUCT_LOADING_END,
        payload,
    }
}