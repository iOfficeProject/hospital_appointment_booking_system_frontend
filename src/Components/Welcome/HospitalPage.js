import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Hospitals from "./Hospitals";
import axios from "axios";

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
                <h2 style={{ textAlign: "center" }}>List of Hospitals</h2>
                <br />
                <Link to="/addhospital">
                  <Button size="lg">Add Hospital</Button>
                </Link>
                <br />
                <br />
                <div style={{ margin: "2rem" }}>
                  <Table striped bordered hover size="sm">
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
                  </Table>
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
