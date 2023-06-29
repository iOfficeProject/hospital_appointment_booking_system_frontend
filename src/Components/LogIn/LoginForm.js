import axios from "axios";
import React, { useState } from "react";

export default function (props) {
  const [authMode, setAuthMode] = useState("signin");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form");

    axios.post('http://localhost:3200/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response.data);
      alert('Successfully loggedin');
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response);
      alert(err.response.data.error.message);
    })
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not Registered Yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Hospital</label>
          
              <select placeholder="hospitalList" name="hospital" id="" className="form-control mt-1">
              <option >KEM</option>
              <option >Civil</option>
              <option >Sahyadri</option>
              </select>
             
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already Registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign in
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Mobile Number"
            />
          </div>
          <div form-group mt-3>
            <label> Hospitals</label>
            <select name="" id="" className="form-control mt-1">
              <option >KEM</option>
              <option >Civil</option>
              <option >Sahyadri</option>
            </select>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
