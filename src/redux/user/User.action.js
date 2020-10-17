import {userActionTypes} from "./User.types"

export const setUser = user =>({
    type : userActionTypes.SET_USER,
    payload : user
});