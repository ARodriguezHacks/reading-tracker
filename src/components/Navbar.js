import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { openLoginModal, openSignUpModal } from "../actions/authActions";
import SignIn from "./auth/SignIn";
//import SignUp from "./auth/SignUp";

class Navbar extends Component {
  handleLogIn = () => {
    this.props.openLoginModal();
  };
  handleSignUp = () => {
    this.props.openSignUpModal();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <nav className="nav-row">
          <Button variant="contained" size="medium" onClick={this.handleLogIn}>
            Login
          </Button>
          <Button variant="contained" size="medium" onClick={this.handleSignUp}>
            Sign Up
          </Button>
          <Avatar>H</Avatar>
        </nav>
        {this.props.loginModal ? <SignIn /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    loginModal: state.auth.loginModal,
    signUpModal: state.auth.signUpModal,
  };
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
