import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
  };
  return (
    <nav className={classes.nav}>
      <ul>
        <div>
          <FaHome onClick={homeClickHandler} />
        </div>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <button>
            <Link to="/login">SignIn</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default App;
