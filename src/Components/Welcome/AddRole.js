import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";



const AddRole = () => {
    const [role, setRole] = useState("");
    const [roleNames, setRoleNames] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        // Fetch role names from the API
        fetch("https://localhost:7264/api/roles")
            .then((response) => response.json())
            .then((data) => {
                // Extract role names from the array of objects
                const names = data.map((item) => item.roleName);
                setRoleNames(names);
            })
            .catch((error) => {
                console.error("Error fetching role names:", error);
            });
    }, []);



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
            localStorage.getItem("role") && localStorage.getItem("role").length > 0
                ? JSON.parse(localStorage.getItem("role"))
                : [];



        localStorage.setItem("role", JSON.stringify([..._role, { role }]));



        navigate("/");
    };



    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Add Role Form</h3>
            </div>
            <form onSubmit={onSubmitClickHandler}>
                <label htmlFor="dropdown">Select your role:</label>
                <select id="dropdown" value={role} onChange={onRoleChangeHandler}>
                    <option value="">-- Select --</option>
                    {roleNames.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                    ))}
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



export default AddRole;