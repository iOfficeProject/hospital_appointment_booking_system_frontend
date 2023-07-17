import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import axios from "axios";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Update from "@mui/icons-material/Update";
import Add from "@mui/icons-material/Add";

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
            <div id="main">
              <article>
                <h2 style={{ textAlign: "center" }}>List of doctors</h2>

                <br />

                <Link to="/adddoctor">
                  <Button variant="contained" startIcon={<Add />}>
                    Add Doctors
                  </Button>
                </Link>

                <br />

                <br />

                <div style={{ margin: "2rem" }}>
                  {/* <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>

                        <th>Speciality</th>

                        <th>Contact</th>

                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {Doctors && Doctors.length > 0
                        ? Doctors.map((doctor) => {
                            return (
                              <tr>
                                <td>{doctor.Name}</td>

                                <td>{doctor.Speciality}</td>

                                <td>{doctor.Contact}</td>

                                <td>
                                  <Link to={`/editdoctor`}>
                                    <Button
                                      onClick={() =>
                                        handleEdit(
                                          doctor.id,

                                          doctor.Name,

                                          doctor.Speciality,

                                          doctor.Contact
                                        )
                                      }
                                    >
                                      Edit
                                    </Button>
                                  </Link>
                                  &nbsp;
                                  <Button
                                    onClick={() => deleteDoctor(doctor.id)}
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            );
                          })
                        : "No data available"}
                    </tbody>
                  </Table> */}
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Name</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Speciality</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Contact</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Actions</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Doctors && Doctors.length > 0
                          ? Doctors.map((doctor) => (
                              <TableRow key={doctor.id}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {doctor.Name}
                                </TableCell>
                                <TableCell align="center">
                                  {doctor.Speciality}
                                </TableCell>
                                <TableCell align="center">
                                  {doctor.Contact}
                                </TableCell>
                                <TableCell align="center">
                                  <Button
                                    variant="contained"
                                    startIcon={<Update />}
                                    onClick={() =>
                                      handleEdit(
                                        doctor.id,
                                        doctor.Name,
                                        doctor.Speciality,
                                        doctor.Contact
                                      )
                                    }
                                  >
                                    Edit
                                  </Button>
                                  &nbsp;
                                  <Button
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => deleteDoctor(doctor.id)}
                                  >
                                    Delete
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))
                          : "No data available"}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminPage;
