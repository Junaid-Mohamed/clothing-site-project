import React from "react";
import { connect } from "react-redux"; // connect is a HOC that lets us modify our component having access to things related to redux
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/clothing.svg";
import {selectUser} from "../../redux/user/User.selectors"
import {selectCartHidden} from "../../redux/cart/Cart.selectors"
import {createStructuredSelector} from "reselect"
import "./Header.scss";
import { auth } from "../../firebase/Firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header({ User, hidden }) {
  
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {User ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  User : selectUser,
  hidden : selectCartHidden
})

// const mapStateToProps = ({ user: { User }, cart: { hidden } }) => ({
//   // the state (which is destructed as user and cart) accessed here is the rootreducer(top level reducer)
//   User,
//   hidden,
// }); // mapping the redux state to component is through mapStateToProps

export default connect(mapStateToProps)(Header);
