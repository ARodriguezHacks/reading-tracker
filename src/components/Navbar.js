import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { openLoginModal, openSignUpModal } from "../actions/authActions";
// import SignIn from "./auth/SignIn";
// import SignUp from "./auth/SignUp";

class Navbar extends Component {
  // state = {
  //   login: false,
  //   signup: false,
  // };
  handleLogIn = () => {
    console.log(this.props);
  };
  handleSignUp = () => {
    console.log(this.props);
  };

  render() {
    console.log(this.props);
    return (
      <AppBar position="relative">
        <Button onClick={this.handleLogIn}>Login</Button>
        <Button onClick={this.handleSignUp}>Sign Up</Button>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    openLoginModal: () => {
      dispatch(openLoginModal());
    },
    openSignUpModal: () => {
      dispatch(openSignUpModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
