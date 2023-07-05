import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Roles from "./Roles";


const EditRole = () => {
    const [role, setRole] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    const updateRole = (roleId) => {
        axios

            .put("url/" + roleId, {})

            .then((res) => { })

            .catch((err) => { });
    };

    useEffect(() => {
        setRole(localStorage.getItem("Role"));
        setId(localStorage.getItem("Id"));
    }, []);

    const handleBackBtn = () => {
        navigate("/addrole");
    };

    let index = Roles.map(function (e) {
        return e.id;
      }).indexOf(id);
    

    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Edit Role Form</h3>
            </div>
            <form>
                <label htmlFor="dropdown">
                    Select your role:
                </label>
                <select
                    id="dropdown"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    <option value="option1">Doctor</option>
                    <option value="option2">User</option>
                </select>
                <br />
                <input
                    type="button"
                    onClick={(e) => handleBackBtn(e)}
                    className="back-btn"
                    value="Back"
                />
                <input type="submit" onClick={(e) => updateRole(e)} className="btn" value="Submit" />
            </form>
        </div>
    );
};

export default EditRole;
