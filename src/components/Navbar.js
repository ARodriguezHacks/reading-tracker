import React, { Component } from "react";
// import Button from "@material-ui/core/Button";
// import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import {
  // openLoginModal,
  // openSignUpModal,
  openMobileSideMenu,
} from "../actions/authActions";
//import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import SignIn from "./auth/SignIn";

class Navbar extends Component {
  handleMobileSideMenu = () => {
    this.props.openMobileSideMenu();
  };

  render() {
    console.log(this.props);
    return (
      <>
        <nav className="nav-row">
          <div
            className="hamburger-menu-mobile"
            onClick={this.handleMobileSideMenu}
          >
            <MenuIcon fontSize="large"></MenuIcon>
          </div>
          <div className="logo">
            <Link to="/">BookList</Link>
          </div>
          {/* <SignedInLinks /> */}
          <SignedOutLinks />
        </nav>
        {this.props.mobileSideMenu ? (
          <div className="menu-mobile">
            <div className="close-mobile-menu">
              <CloseIcon onClick={this.handleMobileSideMenu}></CloseIcon>
            </div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
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
    openMobileSideMenu: () => {
      dispatch(openMobileSideMenu());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
