import React, { useEffect, useState } from "react";
import "./AdminPage.css";
import { FaHome, FaHospitalSymbol, FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const doctorData = [
  {
    name: "Alfreds",
    speciality: "Heart",
    contact: 1234567890,
  },
  {
    name: "Centro",
    speciality: "Stomach",
    contact: 1234567899,
  },
  {
    name: "Ernst",
    speciality: "Bones",
    contact: 1234567890,
  },
  {
    name: "Laugh",
    speciality: "Heart",
    contact: 1234567888,
  },
];

const AdminPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const doctors = localStorage.getItem("doctors");
    setDoctors(JSON.parse(doctors));
  }, []);
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
          <NavLink className="add-doctor" to="/adddoctor">
            Add Doctors
          </NavLink>
          <br />
          <br />
          <table>
            <tr>
              <th>Doctor Name</th>
              <th>Speciality</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>

            {doctors && doctors.length > 0
              ? doctors.map((doctor) => {
                return (
                  <tr>
                    <td>{doctor.name}</td>
                    <td>{doctor.speciality}</td>
                    <td>{doctor.contact}</td>
                    <td>
                      <button className="edit">Edit</button>
                      <button className="delete">Delete</button>
                    </td>
                  </tr>
                );
              })
              : "No Data found"}
          </table>
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
