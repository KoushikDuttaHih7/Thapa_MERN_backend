import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
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

  const postData = async (e) => {
    e.preventDefault();
    // object destructuring
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Successfull Registration");
      console.log("Successfull Registration");
      history.push("/login");
    }
  };
  return (
    <div className="container">
      <form method="POST">
        <div>
          <h1>Sign Up</h1>
        </div>
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
            type="password"
            className="form-control"
            name="cpassword"
            id="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm Password"
          />
        </div>
        <br />
        <input
          type="submit"
          name="signup"
          id="signup"
          className="btn btn-primary"
          value="Register"
          onClick={postData}
        />
      </form>
      <br />
      <NavLink to="/login" classNameName="signup-image-link">
        I'm an User
      </NavLink>
    </div>
  );
};

export default Signup;
