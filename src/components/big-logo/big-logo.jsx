import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./big-logo.css";

const BigLogo = () => {
  return (
    <div className="big-logo">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <h3 className="title">CROWN CLOTHING</h3>
      <span className="subtitle">support@crownclothing.com</span>
    </div>
  );
};

export default BigLogo;
