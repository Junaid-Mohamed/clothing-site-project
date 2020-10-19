import {cartActionTypes} from "./Cart.types"

export const toggleCartHidden = () =>({
    type : cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item =>({
    type : cartActionTypes.ADD_ITEM,
    payload : item
})