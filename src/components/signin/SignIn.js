import React, { Component } from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput"
import CustomButton from "../custom-button/CustomButton"
import {signInWithGoogle} from "../../firebase/Firebase.utils"

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label = "Email"
            required
          />
          
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label = "Password"
            required
          />
          <div className="buttons">
           <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
