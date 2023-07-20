import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Hospital/Hospital.css";
import Button from "@mui/material/Button";

const AddRole = () => {
  const [roleName, setRoleName] = useState("");

  const navigate = useNavigate();

  const url = "https://localhost:7264/api/roles";

  const onRoleChangeHandler = (e) => {
    setRoleName(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/role");
  };

  const onSubmitClickHandler = async (e) => {
    e.preventDefault();

    const post = {
      roleName,
    };

    try {
      const res = await axios.post(url, post);

      console.log(res);
    } catch (err) {
      console.error(`Error: ${err}`);
    }

    navigate("/role");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add Role Form</h3>
      </div>
      <br/>

      <form onSubmit={onSubmitClickHandler}>
        <label htmlFor="dropdown">Select your role:</label>

        <input
          type="text"
          placeholder="Add Role"
          value={roleName}
          onChange={onRoleChangeHandler}
          required
        />

        <br />
        <div className="btn-container">
          <input
            type="button"
            className="back-btn"
            value="Back"
            onClick={backBtnHandler}
          />
          <input type="submit" className="btn" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddRole;
