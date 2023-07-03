import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onSpecialityChangeHandler = (e) => {
    setSpeciality(e.target.value);
  };

  const onContactChangeHandler = (e) => {
    setContact(e.target.value);
  };

  const backBtnHandler = () => {
    navigate("/");
  };

  const onSubmitClickHandler = (e) => {
    e.preventDefault();
    console.log(name, speciality, contact);
    const _doctors =
      localStorage.getItem("doctors") &&
      localStorage.getItem("doctors").length > 0
        ? JSON.parse(localStorage.getItem("doctors"))
        : [];

    localStorage.setItem(
      "doctors",
      JSON.stringify([..._doctors, { name, speciality, contact }])
    );

    navigate("/");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add Doctor Form</h3>
      </div>
      <form onSubmit={onSubmitClickHandler}>
        <label htmlFor="fname">
          <b>First name :</b>
        </label>
        <input
          type="text"
          placeholder="Doctor first name..."
          value={name}
          onChange={onNameChangeHandler}
          required
          pattern={"[A-Za-z]+"}
          title="Must contain alphabets only, numbers not allowed"
        />

        <label htmlFor="speciality">
          <b>Speciality :</b>
        </label>
        <input
          type="text"
          placeholder="Your speciality..."
          value={speciality}
          onChange={onSpecialityChangeHandler}
          required
          pattern="[A-Za-z]+"
          title="Must contain alphabets only, numbers not allowed"
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

export default AddDoctor;
