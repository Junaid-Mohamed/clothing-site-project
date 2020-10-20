import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/Cart.selectors";
import CustomButton from "../custom-button/CustomButton";
import { toggleCartHidden } from "../../redux/cart/Cart.action";
import "./CartDropdown.scss";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// in order to fire an action we have to set mapDispatchToProps, if we don't pass this as second
//arg in connect, it does automatically pass to our component and we can use if it is small
//action to be fired, ex: here
