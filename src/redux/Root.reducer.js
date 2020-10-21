import {combineReducers } from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"; // localstorage from redux-persist , also session storage can be used by pointing to its library.

import userReducer from "./user/User.reducer"
import cartReducer from "./cart/Cart.reducer"
import directoryReducer from "./directory/Directory.reducer"
import shopReducer from "./shop/Shop.reducer"

const persistConfig = {
    key:"root", // key is root (at what point inside our reducer object we want to start, we want to start from root)
    storage,
    whitelist : ["cart"] // reducers which we want to persist should be stored in array.

}

const rootReducer =  combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer); //persisted versoin of the root reducer
