import React from "react";

import { Link } from "react-router-dom";

import "./sign-in.css";

import FormInput from "../../components/form-input/form-input";

import CustomButton from "../../components/custom-button/custom-button";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signInWithGoogle } from "../../firebase/firebase.utills";

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
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
          <h3 className="title">CROWN CLOTHING</h3>
          <span className="subtitle">support@crownclothing.com</span>
        </div>
        <div className="sign-in-container">
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
            <div className="buttons">
              <CustomButton type="submit">SIGN IN</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                SIGN IN WITH GOOGLE
              </CustomButton>
            </div>
          </form>
          <div className="signup-containter">
            <p>Don't have an account? </p>
            <Link className="signup" to="/signup">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
