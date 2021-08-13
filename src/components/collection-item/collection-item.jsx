import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./collection-item.css";

const CollectionItem = ({ item, addItem, currentUser }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <CustomButton
        onClick={
          () => (currentUser ? addItem(item) : <Redirect to="/signin" />) // this is not working correctly
        }
        inverted
      >
        {" "}
        ADD TO CART{" "}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
