import { GET_ALL_FEEDBACKS, UPDATE_FEEDBACK, LOADING, DELETE_FEEDBACK } from "../../Actions/types";
const initialState = {

    allFeedbacks: [],
    updates: {},
    deletes: {},
    isLoading: false,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_FEEDBACKS:
            return { ...state, allFeedbacks: action.payload }

        case UPDATE_FEEDBACK:

            return { ...state, updates: action.payload };
        case DELETE_FEEDBACK:

            return { ...state, deletes: action.payload };


        case LOADING:
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
}