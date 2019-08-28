import { GET_ALL_STAFF, UPDATE_STAFF, LOADING, DELETE_STAFF } from "../../Actions/types";
const initialState = {
    allStaff: [],
    updates: {},
    deletes: {},
    isLoading: false,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_STAFF:
            return { ...state, allStaff: action.payload };
        case UPDATE_STAFF:
            return { ...state, updates: action.payload };
        case DELETE_STAFF:
          return { ...state, deletes: action.payload };
        case LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}