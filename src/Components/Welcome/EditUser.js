import React, { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./Users";

import { v4 as uuid } from "uuid";

import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const EditUser = () => {
  // const [name, setName] = useState("");

  // const [email, setEmail] = useState("");

  // const [password, setPassword] = useState("");

  // const [contact, setContact] = useState("");

  // const [role, setRole] = useState("");

  // const [id, setId] = useState("");

  const {userId}=useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  
  const URL = "https://localhost:7264/api/users/";

  useEffect(() => {
    axios
      .get(`${URL}${userId}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${URL}${userId}`, data)
      .then((res) => {
        alert("Data updated successfully");
        navigate("/user");
      })
      .catch((err) => console.log(err));
  };

  const handleBackBtn = () => {
    navigate("/user");
  };

  

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Edit User Form</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <b>Enter your full name :</b>
        </label>

        <input
          type="text"
          placeholder="Full Name"
          required
          value={data.name || ""}
          pattern={"[A-Za-z ]+"}
          title="Must contain alphabets and spaces only, numbers not allowed"
          onChange={(e) => setData({...data,name:e.target.value})}
        />

        <br />

        <label htmlFor="email">
          <b>Enter your email address :</b>
        </label>

        <input
          type="email"
          value={data.email || ""}
          placeholder="Email"
          required
          title="Email should be in proper format"
          onChange={(e) => setData({...data,email:e.target.value})}
        />

        <br />

        <label htmlFor="contact">
          <b>Enter your mobile number :</b>
        </label>

        <input
          type="text"
          placeholder="Mobile Number"
          required
          value={data.mobileNumber || ""}
          pattern="[0-9]+"
          title="Must contain numbers only"
          onChange={(e) => setData({...data,mobileNumber:e.target.value})}
        />

        <br />

        <label htmlFor="password">
          <b>Enter your Password :</b>
        </label>

        <input
          type="password"
          placeholder="Password"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Password must contain at least 8 characters, including 1 alphabet, 1 number, and 1 special character."
          required
          value={data.password}
          onChange={(e) => setData({...data,password:e.target.value})}
        />

        <br />

        <label htmlFor="dropdown">Select your role:</label>

     {/*   <select id="dropdown">
          <option value="">-- Select --</option>

          <option value="option1">Doctor</option>

          <option value="option2">User</option>
  </select> */}
         <input 
         type="text"
         placeholder="Enter Role"
         required
         value={data.role.roleName}
         onChange={(e) => setData({...data,roleName:e.target.value})}
         />

        <br />

        <input
          onClick={(e) => handleBackBtn(e)}
          type="button"
          className="back-btn"
          value="Back"
        />

        <input
          // onClick={(e) => updateUser(e)}
          type="submit"
          className="btn"
          value="Update"
        />
      </form>
    </div>
  );
};

export default EditUser;
