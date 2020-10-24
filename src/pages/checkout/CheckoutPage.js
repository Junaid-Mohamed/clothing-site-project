import React from "react";
import "./CheckoutPage.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/Cart.selectors";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton"

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="test-warning">
        *Please use the following test card for payment*
        <br/>
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <div className="total">
      
        <span>TOTAL : ${total}</span>
        <StripeButton price={total} />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
