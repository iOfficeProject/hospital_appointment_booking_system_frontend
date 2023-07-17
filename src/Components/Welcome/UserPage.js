import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";
import axios from "axios";
import "./AdminPage.css";
// import './User.css';
import Users from "./Users";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function UserPage() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleEdit = (id, name, email, contact, password, role) => {
    localStorage.setItem("Name", name);

    localStorage.setItem("Email", email);

    localStorage.setItem("Contact", contact);

    localStorage.setItem("Password", password);

    localStorage.setItem("Role", role);

    localStorage.setItem("Id", id);
  };

  const url = "https://localhost:7264/api/users";

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allUsers = response.data;
        setUsers(allUsers);
        console.log(allUsers);
      })
      .catch((error) => {
        console.error(`Error:${error}`);
      });
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${url}/${id}`);

      console.log("deleted successfully");

      getUsers();
    } catch (err) {
      console.error(`Error: ${err}`);
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
                <h2 style={{ textAlign: "center" }}>List of Users</h2>

                <br />

                <Link to="/adduser">
                  <Button size="lg">Add User</Button>
                </Link>

                <br />

                <br />

                <div style={{ margin: "2rem" }}>
                  {/* <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Name</th>

                        <th>Email</th>

                        <th>Contact</th>

                        <th>Role</th>

                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {users && users.length > 0 ? (
                        users.map((user, index) => {
                          return (
                            <tr key={index}>
                              <td>{user.name}</td>

                              <td>{user.email}</td>

                              <td>{user.mobileNumber}</td>
                              <td>{user.role.roleName}</td>

                              <td>
                              <Link to={`/edituser/${user.userId}`}>
                                  <Button>Edit</Button>
                                </Link>
                                &nbsp;
                                <Button onClick={() => deleteUser(user.userId)}>
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
                            <b style={{ fontSize: "18px" }}>Email</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Contact</b>
                          </TableCell>
                          <TableCell align="center">
                            <b style={{ fontSize: "18px" }}>Role</b>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {users && users.length > 0
                          ? users.map((user) => (
                              <TableRow>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                >
                                  {user.name}
                                </TableCell>
                                <TableCell align="center">
                                  {user.email}
                                </TableCell>
                                <TableCell align="center">
                                  {user.mobileNumber}
                                </TableCell>
                                <TableCell align="center">
                                  {user.role.roleName}
                                </TableCell>
                                <TableCell align="center">
                                  <Link to={`/edituser/${user.userId}`}>
                                    <Button>Edit</Button>
                                  </Link>
                                  &nbsp;
                                  <Button
                                    onClick={() => deleteUser(user.userId)}
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
}

export default UserPage;
