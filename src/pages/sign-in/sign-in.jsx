import React from "react";

import { Link } from "react-router-dom";

import "./sign-in.css";

import FormInput from "../../components/form-input/form-input";

import CustomButton from "../../components/custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utills";

import BigLogo from "../../components/big-logo/big-logo";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="sign-in-page">
        <div className="sign-in">
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
          <div className="sign-up">
            <p>Don't have an account? </p>
            <Link className="sign-up-link" to="/signup">
              SIGN UP
            </Link>
          </div>
        </div>
        <BigLogo />
      </div>
    );
  }
}

export default SignInPage;
