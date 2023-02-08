import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="name"
            className="form-control"
            name="name"
            id="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            placeholder="Enter Email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
            placeholder="Enter Phone Number"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your number with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="work">Work</label>
          <input
            type="text"
            className="form-control"
            name="work"
            id="work"
            autoComplete="off"
            value={user.work}
            onChange={handleInputs}
            placeholder="Enter Your Work"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label for="cpassword">Confirm Password</label>
          <input
            type="cpassword"
            className="form-control"
            name="cpassword"
            id="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <Link to="/login" classNameName="signup-image-link">
        I'm an User
      </Link>
    </div>
  );
};

export default Signup;
