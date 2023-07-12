import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./AddDoctor.css";

import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");

  const [password, setPassword] = useState("");

  const [roleName, setRoleName] = useState("");

  const navigate = useNavigate();
  const url = "https://localhost:7264/api/users";

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onContactChangeHandler = (e) => {
    setMobileNumber(e.target.value);
  };

  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRoleChangeHandler = (e) => {
    setRoleName(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/user");
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();
    const post = {
      name,
      email,
      mobileNumber,
      password,
      roleName,
    };
    try {
      const res = await axios.post(url, post);
      console.log(res);
    } catch (err) {
      console.error(`Error: ${err}`);
    }

    navigate("/user");
  };

  //   const addUser = () => {
  //     axios

  //       .post("url", {})

  //       .then((res) => {})

  //       .catch((err) => {});

  //     navigate("/users");
  //   };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add User Form</h3>
      </div>

      <form onSubmit={onSubmitClickHandler}>
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
          value={mobileNumber}
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

        {/* <select id="dropdown" value={roleName} onChange={onRoleChangeHandler}>
          <option value="">-- Select --</option>

          <option value="option1">Doctor</option>

          <option value="option1">User</option>
  </select>*/}

        <input
          type="text"
          placeholder="Enter Role Name"
          value={roleName}
          onChange={onRoleChangeHandler}
          required
        />

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
