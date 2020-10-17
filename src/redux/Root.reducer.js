import {combineReducers } from "redux";

import userReducer from "./user/User.reducer"

export default combineReducers({
    user:userReducer
});