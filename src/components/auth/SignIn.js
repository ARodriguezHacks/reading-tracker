import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.targe.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Log in");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="submit-btn">
            <button>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
