import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState();

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        header: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userContact();
  });
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
                value={userData.name}
                required="true"
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                value={userData.email}
                required="true"
              />
            </div>
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Phone Number"
                value={userData.phone}
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
