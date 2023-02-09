import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

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

  // Stroing data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //send data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    //object destructuring
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not sent");
    } else {
      alert("Message SENT");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="container">
      <div>
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">+12345678910</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">test@test.com</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">Kolkata</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div classNameName="container">
        <form method="POST">
          <div>
            <h5 className="card-title">Get In Touch</h5>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={userData.name}
                name="name"
                onChange={handleInputs}
                required="true"
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={userData.email}
                name="email"
                onChange={handleInputs}
                required="true"
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                value={userData.phone}
                name="phone"
                onChange={handleInputs}
                required="true"
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              cols="30"
              rows="10"
              placeholder="Message"
              value={userData.message}
              name="message"
              onChange={handleInputs}
              required="true"
            ></textarea>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={contactForm}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
