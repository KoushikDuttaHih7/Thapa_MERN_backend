import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <form>
        <div class="form-group">
          <div>
            <h1>Log In</h1>
          </div>
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br />
        <input
          type="submit"
          name="signin"
          id="signin"
          className="btn btn-primary"
          value="Submit"
          // onClick={}
        />
      </form>
      <br />
      <Link to="/signup" className="signup-image-link">
        Create an Account
      </Link>
    </div>
  );
};

export default Login;
