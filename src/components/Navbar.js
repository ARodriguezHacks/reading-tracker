import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  openLoginModal,
  openSignUpModal,
  openMobileSideMenu,
} from "../actions/authActions";
import SignIn from "./auth/SignIn";
//import SignUp from "./auth/SignUp";

class Navbar extends Component {
  handleLogIn = () => {
    this.props.openLoginModal();
  };
  handleSignUp = () => {
    this.props.openSignUpModal();
  };

  handleMobileSideMenu = () => {
    this.props.openMobileSideMenu();
  };

  // closeMobileSideMenu = () =>

  render() {
    console.log(this.props);
    return (
      <>
        <nav className="nav-row">
          <div
            className="hamburger-menu-mobile"
            onClick={this.handleMobileSideMenu}
          >
            {/* <img src="icons/icons8-menu.svg" alt="Hamburger menu" /> */}
            <MenuIcon fontSize="large"></MenuIcon>
          </div>
          <Button variant="contained" size="medium" onClick={this.handleLogIn}>
            Login
          </Button>
          <Button variant="contained" size="medium" onClick={this.handleSignUp}>
            Sign Up
          </Button>
          <Avatar>H</Avatar>
        </nav>
        {this.props.mobileSideMenu ? (
          <div className="menu-mobile">
            <div className="close-mobile-menu">
              <CloseIcon onClick={this.handleMobileSideMenu}></CloseIcon>
            </div>

            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
        ) : null}
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
    mobileSideMenu: state.auth.mobileSideMenu,
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
    openMobileSideMenu: () => {
      dispatch(openMobileSideMenu());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
