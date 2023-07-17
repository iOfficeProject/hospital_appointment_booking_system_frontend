import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Roles from "./Roles";
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
import Add from "@mui/icons-material/Add";

const RolePage = () => {
  // const navigate = useNavigate();
  const [roles, setRoles] = useState([]);

  const API_URL = "https://localhost:7264/api/roles";

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = () => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        const allRoles = res.data;
        setRoles(allRoles);
        console.log(allRoles);
      })
      .catch((err) => {
        console.error(`Error: ${err}`);
      });
  };

  const deleteRole = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      console.log("deleted successfully");
      getRoles();
    } catch (err) {
      console.error(`Error:${err}`);
    }
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
                <h2 style={{ textAlign: "center" }}>List of roles</h2>

                <br />

                <Link to="/addrole">
                  <Button variant="contained" startIcon={<Add />}>
                    Add Role
                  </Button>
                </Link>

                <br />

                <br />

                <div style={{ margin: "2rem" }}>
                  {/* <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Roles</th>
                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {roles && roles.length > 0
                        ? roles.map((role) => {
                            return (
                              <tr>
                                <td>{role.roleName}</td>

                                <td>
                                  <Button
                                    onClick={() => deleteRole(role.roleId)}
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
                            <b style={{ fontSize: "18px" }}>Roles</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Actions</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {roles && roles.length > 0
                          ? roles.map((role) => (
                              <TableRow key={role.roleId}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {role.roleName}
                                </TableCell>
                                <TableCell align="center">
                                  <Button
                                    variant="contained"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => deleteRole(role.roleId)}
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

export default RolePage;
