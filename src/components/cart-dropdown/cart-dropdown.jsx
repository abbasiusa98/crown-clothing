import React from "react";

import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.css";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
