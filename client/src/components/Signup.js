import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account "></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email "></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk "></i>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow "></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    placeholder="Your Work"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock "></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock "></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Your Confirm Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
                <Link to="/login" className="signup-image-link">
                  I'm an User
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
