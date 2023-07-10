import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./AddDoctor.css";

import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [contact, setContact] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onContactChangeHandler = (e) => {
    setContact(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRoleChangeHandler = (e) => {
    setRole(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/user");
  };

<<<<<<< HEAD
    const addUser = (e) => {
        e.preventDefault();
        const payLoad = {
        "userId": 0,
        "name": name,
        "email": email,
        "password": password,
        "mobileNumber": contact,
        "roleId": 0,
        "specializationId": 0,
        "hospitalId": 0
    }
    console.log(payLoad);
=======
  // const onSubmitClickHandler = (e) => {
>>>>>>> 4f4bc90035ce60dad96a2e977551e742cabc0486

  //     e.preventDefault();

<<<<<<< HEAD
          .post("https://localhost:7264/api/users", payLoad)

          .then((res) => {console.log(res)})
          

          .catch((err) => {console.log(err)});
=======
  //     console.log(name, email, contact, password, role);

  //     const _users =

  //         localStorage.getItem("users") &&
>>>>>>> 4f4bc90035ce60dad96a2e977551e742cabc0486

  //             localStorage.getItem("users").length > 0

  //             ? JSON.parse(localStorage.getItem("users"))

  //             : [];

  //     localStorage.setItem(

  //         "users",

  //         JSON.stringify([..._users, { name, email, contact, password, role }])

  //     );

  // navigate("/");

  // };

  const addUser = () => {
    axios

      .post("url", {})

      .then((res) => {})

      .catch((err) => {});

    navigate("/users");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add User Form</h3>
      </div>

      <form onSubmit={addUser}>
        <label htmlFor="name">
          <b>Enter your full name :</b>
        </label>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={onNameChangeHandler}
          required
          pattern={"[A-Za-z ]+"}
          title="Must contain alphabets and spaces only, numbers not allowed"
        />

        <br />

        <label htmlFor="email">
          <b>Enter your email address :</b>
        </label>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChangeHandler}
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
          value={contact}
          onChange={onContactChangeHandler}
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
          value={password}
          onChange={onPasswordChangeHandler}
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          title="Password must contain at least 8 characters, including 1 alphabet, 1 number, and 1 special character."
          required
        />

        <br />

        <label htmlFor="dropdown">Select your role:</label>

        <select id="dropdown" value={role} onChange={onRoleChangeHandler}>
          <option value="">-- Select --</option>

          <option value="option1">Doctor</option>

          <option value="option1">User</option>
        </select>

        <br />

        <input
          type="button"
          className="back-btn"
          value="Back"
          onClick={backBtnHandler}
        />

        <input type="submit" className="btn" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
