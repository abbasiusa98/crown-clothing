import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utills";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import "./header.css";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo-container" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
  cart: { cartItems },
}) => ({
  currentUser,
  hidden,
  cartItems,
});

export default connect(mapStateToProps)(Header);
