import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

const AddHospital = () => {
    const [name, setName] = useState("");
    const [locality, setLocality] = useState("");
    const [contact, setContact] = useState("");

    const navigate = useNavigate();

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    };

    const onLocalityChangeHandler = (e) => {
        setLocality(e.target.value);
    };

    const onContactChangeHandler = (e) => {
        setContact(e.target.value);
    };

    const backBtnHandler = () => {
        navigate("/hospital");
    };

    const onSubmitClickHandler = (e) => {
        e.preventDefault();
        console.log(name, locality, contact);
        const _hospitals =
            localStorage.getItem("hospitals") &&
                localStorage.getItem("hospitals").length > 0
                ? JSON.parse(localStorage.getItem("hospitals"))
                : [];

        localStorage.setItem(
            "hospitals",
            JSON.stringify([..._hospitals, { name, locality, contact }])
        );

        navigate("/");
    };

    return (
        <div className="form-container">
            <div>
                <h3 className="heading">Add Hospital Form</h3>
            </div>
            <form onSubmit={onSubmitClickHandler}>
                <label htmlFor="name">
                    <b>Name of Hospital :</b>
                </label>
                <input
                    type="text"
                    placeholder="Hospital's Name"
                    value={name}
                    onChange={onNameChangeHandler}
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
                    value={locality}
                    onChange={onLocalityChangeHandler}
                    required
                    title="Can contain alphabets, numbers and some relevant symbols"
                />

                <label htmlFor="contact">
                    <b>Contact Number :</b>
                </label>
                <input
                    type="text"
                    placeholder="Enter contact number..."
                    value={contact}
                    onChange={onContactChangeHandler}
                    required
                    pattern="[0-9]+"
                    title="Must contain numbers only"
                />
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

export default AddHospital;
