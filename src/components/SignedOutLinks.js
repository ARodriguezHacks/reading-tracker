import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { openLoginModal, openSignUpModal } from "../actions/authActions";
import { connect } from "react-redux";

class SignedOutLinks extends Component {
  handleLogIn = () => {
    this.props.openLoginModal();
  };

  handleSignUp = () => {
    this.props.openSignUpModal();
  };

  render() {
    console.log(this.props);
    return (
      <div className="links">
        <ul>
          <li>
            <Button variant="contained" size="medium">
              <Link to="/about">About</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              size="medium"
              onClick={this.handleLogIn}
            >
              Login
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              size="medium"
              onClick={this.handleSignUp}
            >
              Sign Up
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLinks);
