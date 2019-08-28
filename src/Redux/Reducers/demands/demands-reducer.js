import { GET_ALL_DEMANDS, UPDATE_DEMAND, DELETE_DEMAND , LOADING} from "../../Actions/types";
const initialState = {
    allDemands: [],
    updates: {},
    deletes: {},
    isLoading: false,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DEMANDS:
            
            return { ...state, allDemands: action.payload }

        case UPDATE_DEMAND:

            return { ...state, updates: action.payload };
        case DELETE_DEMAND:

            return { ...state, deletes: action.payload };


        case LOADING:
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
}