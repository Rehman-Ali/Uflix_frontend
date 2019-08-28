import { GET_ALL_COMPLAINTS, UPDATE_STATUS, DELETE_COMPLAIN, LOADING } from "../../Actions/types";
const initialState = {
    allComplains: [],
    updates: {},
    deletes: {},

    isLoading: false,

};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMPLAINTS:
            return { ...state, allComplains: action.payload }
        case UPDATE_STATUS:

            return { ...state, updates: action.payload };
        case DELETE_COMPLAIN:

            return { ...state, deletes: action.payload };

        case LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}