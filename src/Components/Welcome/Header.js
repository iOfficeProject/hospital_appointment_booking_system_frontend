import React from 'react';
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="body">
        <nav className="nav">
          <ul>
            <div className="icon">
              <FaHome />
            </div>
            <li>
              <div className="admin-logo">
                <AiOutlineUser />
                <span>Admin</span>
              </div>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header