import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Landing = (props) => {
  // const { auth } = props;
  if (props.auth.uid) return <Redirect to="/home" />;
  return (
    <div className="landing">
      <div className="landing-welcome">
        <div>
          <h2>Welcome to BookList!</h2>
        </div>
      </div>
      <div className="landing-feat-recs">
        <div>
          <h2>Send Recommendations</h2>
        </div>
      </div>
      <div className="landing-feat-lists">
        <div>
          <h2>Create Book Lists</h2>
        </div>
      </div>
      <div className="landing-feat-ratings">
        <div>
          <h2>Add ratings</h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Landing);
