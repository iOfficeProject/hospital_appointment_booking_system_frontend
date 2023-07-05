import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";


const AddRole = () => {
    const [role, setRole] = useState("");

    const navigate = useNavigate();

    const onRoleChangeHandler = (e) => {
        setRole(e.target.value);
    };

    const backBtnHandler = () => {
        navigate("/");
    };

    const onSubmitClickHandler = (e) => {
        e.preventDefault();
        console.log(role);
        const _role =
            localStorage.getItem("role") &&
                localStorage.getItem("role").length > 0
                ? JSON.parse(localStorage.getItem("role"))
                : [];

        localStorage.setItem(
            "role",
            JSON.stringify([..._role, { role }])
        );

        navigate("/");
    };

    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Add Role Form</h3>
            </div>
            <form onSubmit={onSubmitClickHandler}>
                <label htmlFor="dropdown">
                    Select your role:
                </label>
                <select
                    id="dropdown"
                    value={role}
                    onChange={onRoleChangeHandler}>
                    <option value="">-- Select --</option>
                    <option value="option1">Doctor</option>
                    <option value="option2">User</option>
                </select>
                <br/>
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

export default AddRole;
