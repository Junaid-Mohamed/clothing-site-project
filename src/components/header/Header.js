import React from "react";
import { connect } from "react-redux"; // connect is a HOC that lets us modify our component having access to things related to redux
import { ReactComponent as Logo } from "../../assests/clothing.svg";
import { selectUser } from "../../redux/user/User.selectors";
import { selectCartHidden } from "../../redux/cart/Cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoConatiner,
  OptionContainer,
  OptionContainerLink,
} from "./Header.styles";
import { auth } from "../../firebase/Firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header({ User, hidden }) {
  return (
    <HeaderContainer>
      <LogoConatiner to="/">
        <Logo className="logo" />
      </LogoConatiner>
      <OptionContainer>
        <OptionContainerLink to="/shop">SHOP</OptionContainerLink>
        <OptionContainerLink to="/shop">CONTACT</OptionContainerLink>
        {User ? (
          <OptionContainerLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionContainerLink>
        ) : (
          <OptionContainerLink to="/signin">SIGN IN</OptionContainerLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  User: selectUser,
  hidden: selectCartHidden,
});

// const mapStateToProps = ({ user: { User }, cart: { hidden } }) => ({
//   // the state (which is destructed as user and cart) accessed here is the rootreducer(top level reducer)
//   User,
//   hidden,
// }); // mapping the redux state to component is through mapStateToProps

export default connect(mapStateToProps)(Header);
