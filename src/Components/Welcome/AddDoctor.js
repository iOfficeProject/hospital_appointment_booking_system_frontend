import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./AddDoctor.css";
// import doctors from "../api/doctors";
import axios from "axios";

const AddDoctor = () => {
  const [name, setName] = useState("");

  const [contact, setContact] = useState("");

  const [speciality, setSpeciality] = useState("");

  // const retrieveDoctors = async () => {

  //   const response = await api.get("/doctors");

  //   return response.data;

  // };

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const ids = uuid();

  //   let uniqueId = ids.slice(0, 8);

  //   let a = name,
  //     b = speciality,
  //     c = contact;

  //   Doctors.push({ id: uniqueId, Name: a, Speciality: b, Contact: c });

  //   navigate("/");
  // };

  const addDoctor = () => {
    axios

      .post("url", {})

      .then((res) => {})

      .catch((err) => {});
  };

  //  useEffect(()=>{

  //   const getAllDoctors = async () =>{

  //     const AllDoctors =await retrieveDoctors ();

  //     if (AllDoctors) setDoctors(AllDoctors)

  //   };

  //   getAllDoctors();

  //  },[])

  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <div>
        <h3 className="heading">Add Doctor Form</h3>
      </div>

      <Form style={{ margin: "10rem" }}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          placeholder="enter name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="speciality">Speciality:</label>
        <input
          type="text"
          placeholder="enter speciality"
          required
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <label htmlFor="speciality">Contact:</label>
        <input
          type="text"
          placeholder="enter contact number"
          required
          onChange={(e) => setContact(e.target.value)}
        />
        <Button onClick={(e) => addDoctor()} type="submit">
          Submit
        </Button>
        &nbsp;
        <Button onClick={(e) => handleBackBtn(e)} type="submit">
          Back
        </Button>
      </Form>
    </div>
  );
};

export default AddDoctor;
