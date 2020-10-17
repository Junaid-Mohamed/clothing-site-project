import React from "react";
import {connect} from "react-redux"; // connect is a HOC that lets us modify our component having access to things related to redux 
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/clothing.svg";
import "./Header.scss";
import { auth } from "../../firebase/Firebase.utils";

function Header({ currentUser }) {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
           SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
           SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state =>({ // the state accessed here is the rootreducer(top level reducer)
  currentUser: state.user.User
})

export default connect(mapStateToProps)(Header);
