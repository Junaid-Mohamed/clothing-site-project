import {combineReducers } from "redux";

import userReducer from "./user/User.reducer"
import cartReducer from "./cart/Cart.reducer"

export default combineReducers({
    user:userReducer,
    cart:cartReducer
});