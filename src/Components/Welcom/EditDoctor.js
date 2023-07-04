import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const EditDoctor = () => {
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  let index = Doctors.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Doctors[index];
    a.Name = name;
    a.Speciality = speciality;
    a.Contact = contact;

    navigate("/");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setSpeciality(localStorage.getItem("Speciality"));
    setContact(localStorage.getItem("Contact"));
    setId(localStorage.getItem("Id"));
  }, []);

  const handleBackBtn = () => {
    navigate("/");
  }

  return (
    <div className="form-container">
      <div>
      <h3 className="heading">Edit Doctor Form</h3>
      </div>
      <Form style={{ margin: "10rem" }}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          placeholder="enter name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="speciality">Speciality:</label>
        <input
          type="text"
          placeholder="enter speciality"
          required
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <label htmlFor="speciality">Contact:</label>
        <input
          type="text"
          placeholder="enter contact number"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>&nbsp;
        <Button onClick={(e) => handleBackBtn(e)} type="submit">
          Back
        </Button>
      </Form>
    </div>
  );
};

export default EditDoctor;
