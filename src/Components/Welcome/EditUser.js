import React, { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import Users from "./Users"

import { v4 as uuid } from "uuid";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";




const EditUser = () => {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("")

  const [contact, setContact] = useState("");

  const [role, setRole] = useState("");

  const [id, setId] = useState("");




 




  const navigate = useNavigate();




  let index = Users.map(function (e) {

    return e.id;

  }).indexOf(id);




 const updateUser = (userId) => {

    axios

      .put("url/" + userId, {})

      .then((res) => {})

      .catch((err) => {});

      navigate("/edituser");

  };




  useEffect(() => {

    setName(localStorage.getItem("Name") ||"");

    setEmail(localStorage.getItem("Email") || "");

    setContact(localStorage.getItem("Contact")|| "");

    setPassword(localStorage.getItem("Password")|| "");

    setRole(localStorage.getItem("Role") || "");

    setId(localStorage.getItem("Id") || "");

  }, []);




  const handleBackBtn = () => {

    navigate("/user");

  };




  console.log("email",""+name);

  console.log("email",""+email);




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

          value={name}

          pattern={"[A-Za-z ]+"}

          title="Must contain alphabets and spaces only, numbers not allowed"

            onChange={(e)=>setName(e.target.value)}

        />




        <br />




        <label htmlFor="email">

          <b>Enter your email address :</b>

        </label>




        <input

          type="email"

          defaultValue={email}




          placeholder="Email"

          required

       

          title="Email should be in proper format"

             onChange={(e)=>setEmail(e.target.value)}

        />




        <br />




        <label htmlFor="contact">

          <b>Enter your mobile number :</b>

        </label>




        <input

          type="text"

          placeholder="Mobile Number"

          required

          value={contact}

          pattern="[0-9]+"

          title="Must contain numbers only"

             onChange={(e)=>setContact(e.target.value)}

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

          value={password}

            onChange={(e)=>setPassword(e.target.value)}

        />




        <br />




        <label htmlFor="dropdown">Select your role:</label>




        <select id="dropdown">

          <option value="">-- Select --</option>




          <option value="option1">Doctor</option>




          <option value="option2">User</option>

        </select>




        <br />




        <input  onClick={(e) =>handleBackBtn(e)} type="button" className="back-btn" value="Back" />




        <input onClick={(e) =>updateUser(e)} type="submit" className="btn" value="Submit" />

      </form>

    </div>

  );

};




export default EditUser;
