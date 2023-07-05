import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const EditHospital = () => {


    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Edit Hospital Form</h3>
            </div>
            <form>
                <label htmlFor="name">
                    <b>Name of Hospital :</b>
                </label>
                <input
                    type="text"
                    placeholder="Hospital's Name"
                    required
                    pattern={"[A-Za-z ]+"}
                    title="Must contain alphabets and spaces only, numbers not allowed"
                />

                <label htmlFor="locality">
                    <b>Locality of Hospital :</b>
                </label>
                <input
                    type="text"
                    placeholder="Address of Hospital"
                    required
                    title="Can contain alphabets, numbers and some relevant symbols"
                />

                <label htmlFor="contact">
                    <b>Contact Number :</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter contact number..."
                    required
                    pattern="[0-9]+"
                    title="Must contain numbers only"
                />
                <br /><br/>
                <input
                    type="button"
                    className="back-btn"
                    value="Back"
                />
                <input type="submit" className="btn" value="Submit" />
            </form>
        </div>
    );
};

export default EditHospital;
