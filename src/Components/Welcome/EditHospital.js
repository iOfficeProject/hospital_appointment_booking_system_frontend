import React, { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// import Doctors from "./Doctors";

import Hospitals from "./Hospitals";

import { v4 as uuid } from "uuid";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";




const EditHospital = () => {

  const [name, setName] = useState("");

  const [locality, setLocality] = useState("");

  const [contact, setContact] = useState("");

  const [id, setId] = useState("");




  const navigate = useNavigate();




  let index = Hospitals.map(function (e) {

    return e.id;

  }).indexOf(id);




  const updateHospital = (hospitalId) => {

    axios

      .put("url/" + hospitalId, {})

      .then((res) => {})

      .catch((err) => {});

  };




  useEffect(() => {

    setName(localStorage.getItem("Name"));




    setLocality(localStorage.getItem("Locality"));




    setContact(localStorage.getItem("Contact"));




    setId(localStorage.getItem("Id"));

  }, []);




  const backBtnHandler = () => {

    navigate("/hospital");

  };

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

          value={name}

          onChange={(e) => setName(e.target.value)}

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

          value={locality}

          onChange={(e) => setLocality(e.target.value)}

          title="Can contain alphabets, numbers and some relevant symbols"

        />




        <label htmlFor="contact">

          <b>Contact Number :</b>

        </label>




        <input

          type="text"

          placeholder="Enter contact number..."

          required

          value={contact}

          onChange={(e) => setContact(e.target.value)}

          pattern="[0-9]+"

          title="Must contain numbers only"

        />




        <br />

        <br />




        <input

          type="button"

          className="back-btn"

          value="Back"

          onClick={backBtnHandler}

        />




        <input

          type="submit"

          className="btn"

          onClick={(e) => updateHospital(e)}

          value="Submit"

        />

      </form>

    </div>

  );

};




export default EditHospital;