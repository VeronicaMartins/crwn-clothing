import React from "react";

//import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";

import SignUp from "../../components/sign-up/sign-up.components";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";
const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
