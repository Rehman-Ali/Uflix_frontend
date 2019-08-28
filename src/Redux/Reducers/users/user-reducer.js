import { GET_ALL_USERS, UPDATE_USER, LOADING, DELETE_USER } from "../../Actions/types";
const initialState = {
    allUsers: [],
    updates: {},
    deletes: {},
    isLoading: false,

};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, allUsers: action.payload }

        case UPDATE_USER:

            return { ...state, updates: action.payload };
        case DELETE_USER:

            return { ...state, deletes: action.payload };

        case LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}