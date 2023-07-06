import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Roles from "./Roles";
import Sidebar from "./Sidebar";
import Header from "./Header";


const RolePage = () => {
    const navigate = useNavigate();

    const handleEdit = (id, role) => {
        localStorage.setItem("Role", role);
        localStorage.setItem("Id", id);
    };

    const deleteRole = (roleId) => {
        var url = "https://localhost:3000/doctor/" + roleId;

        axios

            .delete(url)

            .then((res) => { })

            .catch((err) => { });
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
                        <Button size="lg">Add Role</Button>
                    </Link>

                    <br />

                    <br />

                    <div style={{ margin: "2rem" }}>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Roles</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Roles && Roles.length > 0
                                    ? Roles.map((role) => {
                                        return (
                                            <tr>
                                                <td>{role.Name}</td>

                                                <td>
                                                    <Link to={`/editrole`}>
                                                        <Button
                                                            onClick={() =>
                                                                handleEdit(
                                                                    role.id,
                                                                )
                                                            }
                                                        >
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                    &nbsp;
                                                    <Button onClick={() => deleteRole(role.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                    : "No data available"}
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

export default RolePage;
