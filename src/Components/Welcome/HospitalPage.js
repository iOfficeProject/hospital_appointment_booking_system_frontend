import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Hospitals from "./Hospitals";
import axios from "axios";
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

const HospitalPage = () => {
  const [hospitals, setHospitals] = useState([]);

  const API_URL = "https://localhost:7264/api/Hospital";

  useEffect(() => {
    getHospitals();
  }, []);

  const getHospitals = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        const allHospitals = response.data;
        setHospitals(allHospitals);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const handleEdit = (id, name, locality, contact) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Locality", locality);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Id", id);
  };

  const deleteHospital = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      console.log("deleted successfully");
      getHospitals();
    } catch (err) {
      console.error(`Error:${err}`);
    }
  };
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div id="main">
              <article>
                <h2 style={{ textAlign: "center", color:"black", textDecoration:"underline" }}>List of Hospitals</h2>
                <br />
                <Link to="/addhospital">
                  <Button variant="contained" startIcon={<Add />}>
                    Add Hospital
                  </Button>
                </Link>
                <br />
                <br />
                <div style={{ margin: "2rem" }}>
                  {/* <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Locality</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospitals && hospitals.length > 0 ? (
                        hospitals.map((hospital, index) => {
                          return (
                            <tr key={index}>
                              <td>{hospital.hospitalName}</td>
                              <td>{hospital.location}</td>
                              <td>
                                <Link to={`/edithospital/${hospital.hospitalId}`}>
                                  <Button>Edit</Button>
                                </Link>
                                &nbsp;
                                <Button
                                  onClick={() =>
                                    deleteHospital(hospital.hospitalId)
                                  }
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={4}>No data available</td>
                        </tr>
                      )}
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
                            <b style={{ fontSize: "18px" }}>Locality</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Actions</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {hospitals && hospitals.length > 0
                          ? hospitals.map((hospital) => (
                              <TableRow key={hospital.hospitalId}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {hospital.hospitalName}
                                </TableCell>
                                <TableCell align="center">
                                  {hospital.location}
                                </TableCell>
                                <TableCell align="center">
                                  <Link
                                    to={`/edithospital/${hospital.hospitalId}`}
                                  >
                                    <Button
                                      variant="contained"
                                      startIcon={<Update />}
                                    >
                                      Edit
                                    </Button>
                                  </Link>
                                  &nbsp;
                                  <Link>
                                    <Button
                                      variant="contained"
                                      startIcon={<DeleteIcon />}
                                      onClick={() =>
                                        deleteHospital(hospital.hospitalId)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </Link>
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

export default HospitalPage;
