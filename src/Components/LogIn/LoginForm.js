import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function (props) {
  const [authMode, setAuthMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [hospitalId, setHospitalId] = useState(1);

  const navigate = useNavigate();

  const dataToLoggedIn = {
    email,
    password,
  };

  const userToRegister = {
    email,
    password,
    name,
    mobileNumber
  };

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    console.log("Submitted form");

    axios
      .post("https://localhost:7264/api/login/", dataToLoggedIn)
      .then((response) => {
        const jwtToken = response.data;
        localStorage.setItem("jwtToken", jwtToken);
        alert("Successfully loggedin");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data.error.message);
      });
  };

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    console.log("Submitted form");
    console.log(email);
    console.log(name);
    console.log(password);

    // Check password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    // Check mobile number length
    if (mobileNumber.length !== 10) {
      alert("Mobile number must be 10 digits long");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",

        "Access-Control-Allow-Origin": "*",

        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",

        "Access-Control-Allow-Headers":
          "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
      },
    };

    axios
      .post("https://localhost:7264/api/users", userToRegister)
      .then((response) => {
        console.log(response);
        alert("Successfully registered..!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        // alert(err.response.data.error.message);
      });
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmitLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not Registered Yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
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
      <form className="Auth-form" onSubmit={handleSubmitSignup}>
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
              type="text"
              className="form-control mt-1"
              placeholder="Enter Full Name"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Mobile Number"
              onChange={handleMobileChange}
              value={mobileNumber}
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
