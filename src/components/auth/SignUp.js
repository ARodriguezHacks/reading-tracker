import React, { Component } from "react";

class SignUp extends Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={}>
          <h5>Sign Up</h5>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" id="firstName" onChange={} />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={} />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={} />
          </div>
          <div className="submit-btn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
