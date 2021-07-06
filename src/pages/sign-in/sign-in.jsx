import React from "react";

import { Link } from "react-router-dom";

import "./sign-in.css";

import FormInput from "../../components/form-input/form-input";

import CustomButton from "../../components/custom-button/custom-button";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    window.alert("Submitted");
  };

  render() {
    return (
      <div className="sign-in-page">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type="submit" value="submit form">
            SIGN IN
          </CustomButton>
        </form>
        <Link to="/signup">SIGN UP</Link>
      </div>
    );
  }
}

export default SignInPage;
