import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are Sorry page not FOUND</h2>
          <p className="mb-5">
            Thr page you are looking for might have been removed or had it's
            name changed or is temporarily unavailable
          </p>
          <Link to="/">Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
