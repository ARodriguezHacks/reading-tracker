import React, { Component } from "react";

class SignUp extends Component {
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
    console.log("Signed Up");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              type="firstName"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
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
