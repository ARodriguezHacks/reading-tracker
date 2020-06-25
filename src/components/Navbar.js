import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="relative">
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
