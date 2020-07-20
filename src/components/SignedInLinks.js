import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signOut } from "../actions/authActions";
// import { openLoginModal, openSignUpModal } from "../actions/authActions";
// import { connect } from "react-redux";

const SignedInLinks = (props) => {
  return (
    <div className="links">
      <ul>
        <li>
          <Button variant="contained" size="medium">
            <NavLink to="/about">About</NavLink>
          </Button>
        </li>
        <li>
          <Button variant="contained" size="medium" onClick={props.signOut}>
            Log Out
          </Button>
        </li>
        <li>
          <NavLink to="/home">
            <Avatar>H</Avatar>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     loginModal: state.auth.loginModal,
//     signUpModal: state.auth.signUpModal,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
