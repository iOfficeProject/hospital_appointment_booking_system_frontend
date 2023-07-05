import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Hospitals from "./Hospitals";
import axios from "axios";

const HospitalPage = () => {
  const handleEdit = (id, name, locality, contact) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Locality", locality);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Id", id);
  };

  const deleteHospital = (hospitalId) => {
    var url = "https://localhost:3000/hospital/" + hospitalId;

    axios

      .delete(url)

      .then((res) => {})

      .catch((err) => {});
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
                        <th>Contact</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Hospitals && Hospitals.length > 0 ? (
                        Hospitals.map((hospital) => {
                          return (
                            <tr>
                              <td>{hospital.Name}</td>
                              <td>{hospital.locality}</td>
                              <td>{hospital.Contact}</td>
                              <td>
                                <Link to={`/edithospital`}>
                                  <Button
                                    onClick={() =>
                                      handleEdit(
                                        hospital.id,
                                        hospital.Name,
                                        hospital.locality,
                                        hospital.Contact
                                      )
                                    }
                                  >
                                    Edit
                                  </Button>
                                </Link>
                                &nbsp;
                                <Button onClick={() => deleteHospital(hospital.id)}>Delete</Button>
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
