import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./Doctors";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleEdit = (id, name, speciality, contact) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Speciality", speciality);
    localStorage.setItem("Contact", contact);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    let index = Doctors.map(function (e) {
      return e.id;
    }).indexOf(id);

    Doctors.splice(index, 1);

    navigate("/");
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav className="navbar">
          <div className="navbar-left">
            <FaHome className="navbar-icon" />
          </div>
          <div className="navbar-right">
            <RiAdminLine className="navbar-icon" />
            <h3>Admin</h3>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div id="main">
        <article>
          <h2 style={{ textAlign: "center" }}>List of doctors</h2>
          <br />
          <Link to="/create">
            <Button size="lg">Add Doctors</Button>
          </Link>
          <br />
          <br />

          <div style={{ margin: "2rem" }}>
            <Table striped bordered hover size="sm">
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
                            <Link to={`/edit`}>
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
                            <Button onClick={() => handleDelete(doctor.id)}>
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
        {/* Sidebar */}
        <nav>
          <ul>
            <li>
              <div>
                <FaHospitalSymbol />
                Hospital
              </div>
            </li>
            <li>
              <div>
                <FaUserAlt />
                Users
              </div>
            </li>
            <li>
              <div>
                <HiUsers />
                Roles
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AdminPage;
