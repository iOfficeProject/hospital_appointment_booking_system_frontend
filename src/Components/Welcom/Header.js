import React from 'react';
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div>
        <nav className="nav">
          <ul>
            <div className="icon">
              <FaHome />
            </div>
            <li>
              <div className="admin-logo">
                <AiOutlineUser />
                <h4>Admin</h4>
              </div>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Header