import React from "react";

const Landing = () => {
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

export default Landing;
