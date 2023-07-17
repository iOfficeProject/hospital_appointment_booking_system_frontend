import React, { useEffect, useState } from "react";
// import "./AdminPage.css";
import "../AdminPage/AdminPage.css"
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
// import Image from "../image/doctor.jpg";
import Image from "../../image/doctor.jpg";

const AdminPage = () => {
  // const [doctor, setDoctor] = useState([]);

  // const API_URL = "";

  // const getDoctors = async () => {
  //   try {
  //     const fetchData = await axios.get(API_URL, {
  //       headers: {
  //         authorization: "Bearer JWT Token",
  //       },
  //     });
  //     setDoctor(fetchData.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("load", getDoctors);
  //   return () => {
  //     window.removeEventListener("load", getDoctors);
  //   };
  // }, [doctor]);

  const handleEdit = (id, name, speciality, contact) => {
    localStorage.setItem("Name", name);

    localStorage.setItem("Speciality", speciality);

    localStorage.setItem("Contact", contact);

    localStorage.setItem("Id", id);
  };

  // const handleDelete = (id) => {

  //   let index = Doctors.map(function (e) {

  //     return e.id;

  //   }).indexOf(id);

  //   Doctors.splice(index, 1);

  //   navigate("/");

  // };

  const deleteDoctor = (doctorId) => {
    var url = "https://localhost:3000/doctor/" + doctorId;

    axios

      .delete(url)

      .then((res) => {})

      .catch((err) => {});
  };

  return (
    <>
      {/* Header */}

      <Header />

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2}>
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col md={10}>
            <div className="container">
              <div className="card my-5  ">
                <div className="row g-0">
                  <div className="col-md-4 order-md-2">
                    <img
                      src={Image}
                      className="img-fluid rounded-start"
                      alt="..."
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">Welcome To Admin Page</h2>
                      <br />
                      <p className="card-text">
                        <h5>
                          1. Admin can add, delete and update the hospitals.
                        </h5>
                        <br />
                        <h5>2. Admin can add, delete and update the users.</h5>
                        <br />
                        <h5>3. Admin can add, delete and update the roles.</h5>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;
