import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            class="form-control"
            name="name"
            id="name"
            autoComplete="off"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter Email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="number"
            class="form-control"
            name="phone"
            id="phone"
            autoComplete="off"
            placeholder="Enter Phone Number"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your number with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="work">Work</label>
          <input
            type="text"
            class="form-control"
            name="work"
            id="work"
            autoComplete="off"
            placeholder="Enter Your Work"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="cpassword">Confirm Password</label>
          <input
            type="cpassword"
            class="form-control"
            name="cpassword"
            id="cpassword"
            placeholder="Confirm Password"
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <Link to="/login" className="signup-image-link">
        I'm an User
      </Link>
    </div>
  );
};

export default Signup;
