import { ADD_PRODCUT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCT_LOADING_START, PRODUCT_LOADING_END, GET_ERRORS, } from '../Actions/types'

const initialState = {
    products: [],
    oneProduct: {},
    isLoading: false,
    errors: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODCUT:
            return { ...state, oneProduct: action.payload }

        case GET_ALL_PRODUCTS:
            return { ...state, products: action.payload }

        case GET_ONE_PRODUCT:
            return { ...state, oneProduct: action.payload }

        case UPDATE_PRODUCT:
            return { ...state, oneProduct: action.payload }

        case DELETE_PRODUCT:
            return { ...state, oneProduct: action.payload }

        case PRODUCT_LOADING_START:
            return { ...state, isLoading: action.payload }

        case PRODUCT_LOADING_END:
            return { ...state, isLoading: action.payload }
        case GET_ERRORS:
            return { ...state, errors: action.payload }

        default:
            return state;
    }
}