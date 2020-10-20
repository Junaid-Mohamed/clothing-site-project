import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assests/shopping-bag.svg"
import "./CartIcon.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../redux/cart/Cart.action"
import {selectCartItemsCount} from "../../redux/cart/Cart.selectors"
import {createStructuredSelector} from "reselect"

function CartIcon({toggleCartHidden,itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden} >
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
toggleCartHidden : ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount // memoized approach by using selectors.
    // itemCount : cartItems.reduce((accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,0)
}) // this is a selector(small part of whole state) which takes in whole state object and then slices of a small part
//this is not an efficient way because every time cart-icon component is called this mapToState get's triggered and a new component is rendered even if the quantity is same.

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)