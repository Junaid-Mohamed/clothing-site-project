import {cartActionTypes} from "./Cart.types";
import {addItemToCart} from "./Cart.utils" 

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden : !state.hidden // we dont use payload here, if we know that the action is of this type we gonna switch its previous state and send back the object.
        };
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;