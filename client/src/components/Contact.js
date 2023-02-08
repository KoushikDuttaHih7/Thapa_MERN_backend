import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Phone</h5>
              <p class="card-text">+12345678910</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Email</h5>
              <p class="card-text">test@test.com</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Address</h5>
              <p class="card-text">Kolkata</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <form>
          <div>
            <h5 class="card-title">Get In Touch</h5>
          </div>
          <br />
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                required="true"
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                required="true"
              />
            </div>
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
                required="true"
              />
            </div>
          </div>
          <br />
          <div class="form-group">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              cols="30"
              rows="10"
              placeholder="Message"
              required="true"
            ></textarea>
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
