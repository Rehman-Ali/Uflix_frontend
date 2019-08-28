import { UPLOAD_MOVIE, GET_ALL_MOVIES, UPDATE_MOVIE, LOADING, DELETE_MOVIE } from "../../Actions/types";
const initialState = {
    uploads: {},
    updates: {},
    deletes: {},
    isLoading: false,
    allMovies: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: action.payload };

        case UPLOAD_MOVIE:
            return { ...state, uploads: action.payload };

        case GET_ALL_MOVIES:
            return { ...state, allMovies: action.payload };

        case UPDATE_MOVIE:
            return { ...state, updates: action.payload };

        case DELETE_MOVIE:
            return { ...state, deletes: action.payload, };

        default:
            return state;
    }
}