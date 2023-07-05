import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const EditUser = () => {
  

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Edit User Form</h3>
      </div>

      <form>
                <label htmlFor="name">
                    <b>Enter your full name :</b>
                </label>
                <input
                    type="text"
                    placeholder="Full Name"
                    required
                    pattern={"[A-Za-z ]+"}
                    title="Must contain alphabets and spaces only, numbers not allowed"
                />
                <br />

                <label htmlFor="email">
                    <b>Enter your email address  :</b>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    title="Email should be in proper format"
                />
                <br />
                <label htmlFor="contact">
                    <b>Enter your mobile number :</b>
                </label>
                <input
                    type="text"
                    placeholder="Mobile Number"
                    required
                    pattern="[0-9]+"
                    title="Must contain numbers only"
                />
                <br />

                <label htmlFor="contact">
                    <b>Enter your Password :</b>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
                    title="Password must contain at least 8 characters, including 1 alphabet, 1 number, and 1 special character."
                    required
                />
                <br />

                <label htmlFor="dropdown">
                    Select your role:
                </label>
                <select
                    id="dropdown"
                    >
                    <option value="">-- Select --</option>
                    <option value="option1">Doctor</option>
                    <option value="option2">User</option>
                </select>
                <br/>
                <input
                    type="button"
                    className="back-btn"
                    value="Back"
                />
                <input type="submit" className="btn" value="Submit"/>
            </form>
    </div>
  );
};

export default EditUser;
