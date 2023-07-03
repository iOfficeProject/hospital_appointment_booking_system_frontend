import React from 'react';
import "./Sidebar.css";
import { FaHospitalSymbol } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar">
    <ul>
      <li>
        <div className="side-icons">
          <FaHospitalSymbol />
          Hospital
        </div>
      </li>
      <li>
        <div className="side-icons">
          <FaUserAlt />
          Users
        </div>
      </li>
      <li>
        <div className="side-icons">
          <HiUsers />
          Roles
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar