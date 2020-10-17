import {createStore,applyMiddleware} from "redux";
import  logger from "redux-logger";

import rootReducer from "./Root.reducer";

const middlewares = [logger]; // stote is expecting from redux is array of middleware

const store = createStore(rootReducer,applyMiddleware(...middlewares)) //any number of middlewares can be applied to applymiddleware function

export default store;