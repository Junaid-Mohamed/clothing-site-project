import {createStore,applyMiddleware} from "redux";
import  logger from "redux-logger";
import {persistStore} from "redux-persist"

import rootReducer from "./Root.reducer";

const middlewares = []; // stote is expecting from redux is array of middleware

if(process.env.NODE_ENV === "development" ){
    middlewares.push(logger); // if it's in development, redux log's wont be logged
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares)) //any number of middlewares can be applied to applymiddleware function

export const persistor = persistStore(store); // persisted version of the store


