import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import { openLoginModal, openSignUpModal } from "../actions/authActions";
// import { connect } from "react-redux";

class SignedInLinks extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Button variant="contained" size="medium">
              <NavLink to="/">Log Out</NavLink>
            </Button>
          </li>
          <li>
            <NavLink to="/">
              <Avatar>H</Avatar>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     loginModal: state.auth.loginModal,
//     signUpModal: state.auth.signUpModal,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     openLoginModal: () => {
//       dispatch(openLoginModal());
//     },
//     openSignUpModal: () => {
//       dispatch(openSignUpModal());
//     },
//   };
// };

export default SignedInLinks;
