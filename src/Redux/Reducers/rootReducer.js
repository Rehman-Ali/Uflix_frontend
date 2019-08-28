import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import productsReducer from './productsReducer';
import usersReducer from './users/user-reducer';
import staffReducer from './staff/staff-reducer';
import complaitnsReducer from './complaints/complaints-reducer';
import demandsReducer from './demands/demands-reducer';
import feedbackReducer from './feedbacks/feedback-reducer';
import loadingReducer from "./loadingReducer";
import MoviesReducer from "./Movies/Movies-reducer";
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    products: productsReducer,
    allUsers: usersReducer,
    allStaff: staffReducer,
    allComplaints: complaitnsReducer,
    allDemands: demandsReducer,
    allFeedback: feedbackReducer,
    loading: loadingReducer,
    MoviesReducer,
});