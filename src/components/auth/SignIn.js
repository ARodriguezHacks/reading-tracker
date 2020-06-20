import React, { Component } from "react";

class SignIn extends Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={}>
          <h5>Sign In</h5>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={} />
          </div>
          <div className="submit-btn">
            <button>Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
