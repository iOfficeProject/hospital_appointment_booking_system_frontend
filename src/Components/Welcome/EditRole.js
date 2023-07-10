import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const EditRole = () => {
    const [role, setRole] = useState("");
    const [id, setId] = useState("");
    const [roleNames, setRoleNames] = useState([]);
    const navigate = useNavigate();



    const updateRole = (roleId) => {
        axios
            .put(`https://localhost:7264/api/roles/${roleId}`, {})
            .then((res) => { })
            .catch((err) => { });
    };



    useEffect(() => {
        setId(localStorage.getItem("Id"));
        fetchRoleNames();
    }, []);



    const fetchRoleNames = () => {
        axios
            .get("https://localhost:7264/api/roles")
            .then((response) => {
                const names = response.data.map((role) => role.roleName);
                setRoleNames(names);
            })
            .catch((error) => {
                console.error("Error fetching role names:", error);
            });
    };



    const handleBackBtn = () => {
        navigate("/addrole");
    };



    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Edit Role Form</h3>
            </div>
            <form>
                <label htmlFor="dropdown">Select your role:</label>
                <select
                    id="dropdown"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
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
                    onClick={handleBackBtn}
                    className="back-btn"
                    value="Back"
                />
                <input
                    type="submit"
                    onClick={(e) => updateRole(e)}
                    className="btn"
                    value="Submit"
                />
            </form>
        </div>
    );
};



export default EditRole;