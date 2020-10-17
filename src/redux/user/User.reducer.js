import {userActionTypes} from "./User.types";

const INITIAL_STATE = {
    User : null
}


// recives an action and state at the time of action fired, if action type matches anything  
// from the switch it changes the state and returns it else in default it returns the present
// state. inital state will be something before any action is fired that is defined here, for this 
// exmaple it is null(i.e User state)

const userReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case userActionTypes.SET_USER:
        return{
            ...state,
            User : action.payload
        };
        default:
            return state;
    }
}

export default userReducer;