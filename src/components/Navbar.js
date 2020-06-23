import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

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

export default Navbar;
